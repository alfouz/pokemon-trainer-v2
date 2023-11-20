import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConcretePokemon } from "../types/ownTypes";
import { OwnZone } from "../types/utilTypes";

interface PlayerState {
  currentTeam: ConcretePokemon[];
  pokemons: ConcretePokemon[];
  addPokemon: (newPokemon: ConcretePokemon) => void;
  removePokemon: (id: string) => void;
  addPokemonToTeam: (ownPokemon: ConcretePokemon) => void;
  removePokemonFromTeam: (id: string) => void;
  removeBall: (ballIndex: number) => void;
  getBall: (ballIndex: number) => void;
  options: { speed: number };
  inventory: { balls: [number, number, number, number] };
  progress: number;
  currentZone: OwnZone;
  setCurrentZone: (cZ: OwnZone) => void;
  setProgress: (p: number) => void;
}

const usePlayerState = create<PlayerState>()(
  persist(
    (set) => ({
      currentTeam: [],
      pokemons: [],
      inventory: { balls: [1, 1, 0, 0] },
      options: { speed: 5000 },
      progress: 0,
      currentZone: "ranch",
      addPokemon: (newPokemon) =>
        set((state) =>
          state.currentTeam.length <= 40
            ? { pokemons: [...state.pokemons, newPokemon] }
            : state
        ),
      removePokemon: (id) =>
        set((state) => ({
          pokemons: state.pokemons.filter((p) => p.id !== id),
        })),
      addPokemonToTeam: (ownPokemon) =>
        set((state) =>
          state.currentTeam.length <= 5
            ? { currentTeam: [...state.currentTeam, ownPokemon] }
            : state
        ),
      removePokemonFromTeam: (id) =>
        set((state) => ({
          currentTeam: state.currentTeam.filter((p) => p.id !== id),
        })),
      removeBall: (ballIndex) =>
        set((state) => ({
          inventory: {
            ...state.inventory,
            balls: state.inventory.balls.map((b, index) =>
              index === ballIndex ? b - 1 : b
            ) as [number, number, number, number],
          },
        })),
      getBall: (ballIndex) =>
        set((state) => ({
          inventory: {
            ...state.inventory,
            balls: state.inventory.balls.map((b, index) =>
              index === ballIndex ? b + 1 : b
            ) as [number, number, number, number],
          },
        })),
      setProgress: (p) =>
        set((state) => ({
          progress: state.progress > p ? state.progress : p,
        })),
      setCurrentZone: (cZ) =>
        set(() => ({
          currentZone: cZ,
        })),
    }),
    {
      name: "pokemon-trainer-player",
    }
  )
);

export default usePlayerState;
