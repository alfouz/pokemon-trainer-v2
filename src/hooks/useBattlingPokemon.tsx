import { useEffect, useState } from "react";
import useBattleState from "../state/useBattleState";
import { getDamage } from "../utils/damageFunctions";

type Props = {
  onWin?: () => void;
};

const useBattlingPokemon = ({ onWin }: Props) => {
  const [intervalID, setIntervalID] = useState<number>();

  const {
    currentPokemon,
    enemyPokemon,
    damageCurrentPokemon,
    damageEnemyPokemon,
    hasWon,
    battleStarted,
  } = useBattleState();

  const makeBattle = () => {
    if (currentPokemon?.name && enemyPokemon?.name && !hasWon) {
      if (currentPokemon.stats.speed >= enemyPokemon.stats.speed) {
        const damage = getDamage(currentPokemon, enemyPokemon);
        const enemyLife = damageEnemyPokemon(damage);

        if (enemyLife > 0) {
          const damageAlly = getDamage(enemyPokemon, currentPokemon);
          damageCurrentPokemon(damageAlly);
        }
      } else {
        const damageAlly = getDamage(enemyPokemon, currentPokemon);
        const ownLife = damageCurrentPokemon(damageAlly);

        if (ownLife > 0) {
          const damage = getDamage(currentPokemon, enemyPokemon);

          damageEnemyPokemon(damage);
        }
      }
    }
  };

  useEffect(() => {
    const int = setInterval(() => {
      makeBattle();
    }, 1000);
    setIntervalID(int);
    return () => clearInterval(int);
  }, [battleStarted]);

  useEffect(() => {
    if (hasWon > 0) {
      console.log("WIN");
      onWin && onWin();
    }
    if (hasWon < 0) {
      console.log("LOOSE");
    }
    if (hasWon !== 0) {
      clearInterval(intervalID);
    }
  }, [hasWon, intervalID]);

  return {
    cleanBattle: () => {
      clearInterval(intervalID);
    },
  };
};

export default useBattlingPokemon;
