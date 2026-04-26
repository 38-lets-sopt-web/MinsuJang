import { useCallback, useState } from 'react';

export function useScoreBoard() {
  const [score, setScore] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [failCount, setFailCount] = useState(0);

  const hitMole = useCallback(() => {
    setScore((previous) => previous + 1);
    setSuccessCount((previous) => previous + 1);
  }, []);

  const hitBomb = useCallback(() => {
    setScore((previous) => previous - 1);
    setFailCount((previous) => previous + 1);
  }, []);

  const resetScoreBoard = useCallback(() => {
    setScore(0);
    setSuccessCount(0);
    setFailCount(0);
  }, []);

  return {
    state: {
      score,
      successCount,
      failCount,
    },
    actions: {
      hitMole,
      hitBomb,
      resetScoreBoard,
    },
  };
}
