import { POKEURL } from "./consts";

export const fetchPoke = async (url: string) => {
  const response = await fetch(`${POKEURL}${url}`);
  return response.json();
};
