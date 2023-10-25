import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Pokemon } from "../types/ImportedTypes";
import PokemonService from "../services/PokemonService";

interface PlayerState {
  currentPokemon: Pokemon | undefined;
  getPokemon: (pokemonId: number) => void;
  removePokemon: () => void;
}

const useCurrentPokemon = create<PlayerState>()(
  persist(
    (set) => ({
      currentPokemon: undefined,
      getPokemon: async (pokemonId: number) => {
        const newPoke = await PokemonService.getPokemonDetails(pokemonId);
        set((state) => ({ ...state, currentPokemon: newPoke }));
      },
      removePokemon: async () => {
        set((state) => ({ ...state, currentPokemon: undefined }));
      },
    }),
    {
      name: "pokemon-trainer-current",
    }
  )
);

export default useCurrentPokemon;
