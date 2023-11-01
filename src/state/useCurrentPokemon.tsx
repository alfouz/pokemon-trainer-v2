import { create } from "zustand";
import PokemonService from "../services/PokemonService";
import { ConcretePokemon } from "../types/ownTypes";
import getWildPokemon from "../utils/getWildPokemon";

interface PlayerState {
  currentPokemon: ConcretePokemon | undefined;
  getPokemon: (pokemonId: number) => void;
  removePokemon: () => void;
}

const useCurrentPokemon = create<PlayerState>()((set) => ({
  currentPokemon: undefined,
  getPokemon: async (pokemonId: number) => {
    const newPoke = await PokemonService.getPokemonDetails(pokemonId);
    set((state) => ({ ...state, currentPokemon: getWildPokemon(newPoke) }));
  },
  removePokemon: async () => {
    set((state) => ({ ...state, currentPokemon: undefined }));
  },
}));

export default useCurrentPokemon;
