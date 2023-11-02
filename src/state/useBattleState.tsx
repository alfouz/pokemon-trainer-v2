import { create } from "zustand";
import { ConcretePokemon } from "../types/ownTypes";

interface PlayerState {
  currentTeam: ConcretePokemon[];
  enemyTeam: ConcretePokemon[];
  setCurrentTeam: (team: ConcretePokemon[]) => void;
  setEnemyTeam: (team: ConcretePokemon[]) => void;
  cleanTeams: () => void;
}

const useBattleState = create<PlayerState>()((set) => ({
  currentTeam: [],
  enemyTeam: [],
  setCurrentTeam: async (team) => {
    set((state) => ({ ...state, currentTeam: team }));
  },
  setEnemyTeam: async (team) => {
    set((state) => ({ ...state, enemyTeam: team }));
  },
  cleanTeams: async () => {
    set(() => ({ currentTeam: [], enemyTeam: [] }));
  },
}));

export default useBattleState;
