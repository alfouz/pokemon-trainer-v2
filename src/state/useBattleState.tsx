import { create } from "zustand";
import { ConcretePokemon } from "../types/ownTypes";
import PokemonService from "../services/PokemonService";
import selectPokemon from "../utils/selectPokemon";
import getWildPokemon from "../utils/getWildPokemon";
import { OwnZone } from "../types/utilTypes";

interface ConcretePokemonWithLife extends ConcretePokemon {
  life: number;
}

const assignLife: (poke: ConcretePokemon) => ConcretePokemonWithLife = (
  poke
) => {
  return { ...poke, life: poke.stats.hp };
};

interface PlayerState {
  currentTeam: ConcretePokemonWithLife[];
  enemyTeam: ConcretePokemonWithLife[];
  currentPokemon?: ConcretePokemonWithLife;
  enemyPokemon?: ConcretePokemonWithLife;
  damageCurrentPokemon: (damage: number) => number;
  damageEnemyPokemon: (damage: number) => number;
  startBattle: (
    ownTeam: ConcretePokemon[],
    enemyTeam: ConcretePokemon[],
    callback?: () => void
  ) => void;
  startRandomBattle: (ownTeam: ConcretePokemon[], zone: OwnZone) => void;
  cleanTeams: () => void;
  hasWon: number;
  battleStarted: boolean;
  onFinishBattle?: () => void;
}

const useBattleState = create<PlayerState>()((set) => ({
  currentTeam: [],
  enemyTeam: [],
  hasWon: 0,
  battleStarted: false,
  startBattle: async (ownTeam, enemyTeam, callback) => {
    const [ownFirst, ...ownRest] = ownTeam.map((p) => assignLife(p));
    const [enemyFirst, ...enemyRest] = enemyTeam.map((p) => assignLife(p));
    set((state) => ({
      ...state,
      currentPokemon: ownFirst,
      currentTeam: ownRest,
      enemyPokemon: enemyFirst,
      enemyTeam: enemyRest,
      hasWon: 0,
      battleStarted: true,
      onFinishBattle: callback,
    }));
  },
  startRandomBattle: async (ownTeam, zone) => {
    const randomTeam = await Promise.all(
      Array(6)
        .fill(0)
        .map(async () => {
          const pokemon = await PokemonService.getPokemonDetails(
            selectPokemon(zone).id
          );
          return getWildPokemon(pokemon);
        })
    );
    const [ownFirst, ...ownRest] = ownTeam.map((p) => assignLife(p));
    const [enemyFirst, ...enemyRest] = randomTeam.map((p) => assignLife(p));
    set((state) => ({
      ...state,
      currentPokemon: ownFirst,
      currentTeam: ownRest,
      enemyPokemon: enemyFirst,
      enemyTeam: enemyRest,
      hasWon: 0,
      battleStarted: true,
    }));
  },
  damageCurrentPokemon: (damage) => {
    let life = 0;
    set((state) => {
      if (!state.currentPokemon) {
        return state;
      }
      if (state.currentPokemon?.life - damage <= 0) {
        const [first, ...rest] = state.currentTeam;
        if (state.currentTeam.length > 0) {
          return { ...state, currentPokemon: first, currentTeam: rest };
        } else {
          return {
            ...state,
            currentPokemon: first,
            currentTeam: rest,
            hasWon: -1,
          };
        }
      } else {
        life = state.currentPokemon?.life - damage;
        const newPokemon = {
          ...state.currentPokemon,
          life: state.currentPokemon?.life - damage,
        };
        return {
          ...state,
          currentPokemon: newPokemon,
        };
      }
    });

    return life;
  },
  damageEnemyPokemon: (damage) => {
    let life = 0;
    set((state) => {
      if (!state.enemyPokemon) {
        return state;
      }
      if (state.enemyPokemon.life - damage <= 0) {
        const [first, ...rest] = state.enemyTeam;
        if (state.enemyTeam.length > 0) {
          return { ...state, enemyPokemon: first, enemyTeam: rest };
        } else {
          return { ...state, enemyPokemon: first, enemyTeam: rest, hasWon: 1 };
        }
      } else {
        life = state.enemyPokemon.life - damage;
        const newPokemon = {
          ...state.enemyPokemon,
          life: state.enemyPokemon.life - damage,
        };
        return {
          ...state,
          enemyPokemon: newPokemon,
        };
      }
    });
    return life;
  },
  cleanTeams: async () => {
    set(() => ({
      currentTeam: [],
      enemyTeam: [],
      hasWon: 0,
      battleStarted: false,
    }));
  },
}));

export default useBattleState;
