import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Pokemon } from "../types/ImportedTypes";

interface PlayerState {
  pokemons: Pokemon[];
  addPokemon: (newPokemon: Pokemon) => void;
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
        set((state) => ({ pokemons: [...state.pokemons, newPokemon] })),
    }),
    {
      name: "pokemon-trainer-player",
    }
  )
);

export default usePlayerState;
