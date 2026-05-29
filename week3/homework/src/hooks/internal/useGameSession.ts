import { useCallback, useState } from 'react';
import type { GameStatus } from '@/types/game';

type UseGameSessionOptions = {
  initialStatus?: GameStatus;
};

export function useGameSession({ initialStatus = 'idle' }: UseGameSessionOptions = {}) {
  const [gameStatus, setGameStatus] = useState<GameStatus>(initialStatus);

  const startSession = useCallback(() => {
    setGameStatus('playing');
  }, []);

  const stopSession = useCallback(() => {
    setGameStatus('stopped');
  }, []);

  const finishSession = useCallback(() => {
    setGameStatus('finished');
  }, []);

  const resetSession = useCallback(() => {
    setGameStatus('idle');
  }, []);

  return {
    state: {
      gameStatus,
      isPlaying: gameStatus === 'playing',
    },
    actions: {
      startSession,
      stopSession,
      finishSession,
      resetSession,
      setGameStatus,
    },
  };
}
