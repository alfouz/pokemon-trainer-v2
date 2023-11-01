export function getRandomNumberRange(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function getPokemonId(name: string) {
  return `${name}${Date.now()}`;
}
