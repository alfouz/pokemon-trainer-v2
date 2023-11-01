import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ConcretePokemon } from "../types/ownTypes";

interface PlayerState {
  currentTeam: ConcretePokemon[];
  pokemons: ConcretePokemon[];
  addPokemon: (newPokemon: ConcretePokemon) => void;
  removePokemon: (id: string) => void;
  addPokemonToTeam: (ownPokemon: ConcretePokemon) => void;
  removePokemonFromTeam: (id: string) => void;
  options: { speed: number; maxPokemonId: number };
  inventory: { balls: [number, number, number, number] };
}

const usePlayerState = create<PlayerState>()(
  persist(
    (set) => ({
      currentTeam: [],
      pokemons: [],
      inventory: { balls: [1, 1, 1, 1] },
      options: { maxPokemonId: 150, speed: 2000 },
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
    }),
    {
      name: "pokemon-trainer-player",
    }
  )
);

export default usePlayerState;
