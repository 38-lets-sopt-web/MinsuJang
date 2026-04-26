import { useMemo } from 'react';
import { getResultMessage, getResultTitle } from '@lib/gameMessages';
import type { GameStatus, Level } from '@/types/game';

type UseGameResultParams = {
  gameStatus: GameStatus;
  level: Level;
  score: number;
  successCount: number;
  failCount: number;
  timeLeft: number;
};

export function useGameResult({
  gameStatus,
  level,
  score,
  successCount,
  failCount,
  timeLeft,
}: UseGameResultParams) {
  const state = useMemo(() => {
    const isFinished = gameStatus === 'finished';
    const successTime =
      successCount > 0 ? Number((successCount + Math.max(score, 0)).toFixed(2)) : 0;
    const canSaveRecord = isFinished && score > 0;

    return {
      isFinished,
      canSaveRecord,
      resultTitle: getResultTitle(isFinished),
      resultMessage: getResultMessage({
        level,
        score,
        successCount,
        failCount,
        isFinished,
      }),
      resultSummary: {
        level,
        score,
        successCount,
        failCount,
        timeLeft,
        successTime,
      },
    };
  }, [failCount, gameStatus, level, score, successCount, timeLeft]);

  return {
    state,
  };
}
