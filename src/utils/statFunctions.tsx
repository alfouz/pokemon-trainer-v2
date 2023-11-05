const LEVEL = 50;
const IV = 31;
const EV = 100;

export const getHP = (value: number) => {
  return (
    Math.floor(0.01 * (2 * value + IV + Math.floor(0.25 * EV)) * LEVEL) +
    LEVEL +
    10
  );
};

export const getStat = (value: number) => {
  return (
    Math.floor(0.01 * (2 * value + IV + Math.floor(0.25 * EV)) * LEVEL) + 5
  );
};
