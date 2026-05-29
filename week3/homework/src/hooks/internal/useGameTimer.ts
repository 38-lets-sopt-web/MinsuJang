import { useCallback, useEffect, useRef, useState } from 'react';
import { roundToTenth } from '@lib/time';

type UseGameTimerOptions = {
  initialTime: number;
  isRunning?: boolean;
  stepMs?: number;
  onExpire?: () => void;
};

export function useGameTimer({
  initialTime,
  isRunning = false,
  stepMs = 100,
  onExpire,
}: UseGameTimerOptions) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const expireCallbackRef = useRef(onExpire);

  useEffect(() => {
    expireCallbackRef.current = onExpire;
  }, [onExpire]);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    const timerId = window.setInterval(() => {
      setTimeLeft((previous) => {
        const next = roundToTenth(previous - stepMs / 1000);

        if (next <= 0) {
          window.clearInterval(timerId);
          expireCallbackRef.current?.();
          return 0;
        }

        return next;
      });
    }, stepMs);

    return () => {
      window.clearInterval(timerId);
    };
  }, [isRunning, stepMs]);

  const resetTimer = useCallback((nextTime: number) => {
    setTimeLeft(nextTime);
  }, []);

  return {
    timeLeft,
    resetTimer,
  };
}
