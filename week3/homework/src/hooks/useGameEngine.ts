import { useCallback, useEffect, useState } from 'react';
import { createInitialGameState, LEVEL_CONFIGS } from '@constants/game';
import { getCellMessage, getInitialMessage, getStatusMessage } from '@lib/gameMessages';
import { createRandomCellIndex, getBoardCellCount } from '@lib/gameHelpers';
import { useActiveCell } from '@hooks/internal/useActiveCell';
import { useGameFeedback } from '@hooks/internal/useGameFeedback';
import { useGameSession } from '@hooks/internal/useGameSession';
import { useGameTimer } from '@hooks/internal/useGameTimer';
import { useScoreBoard } from '@hooks/internal/useScoreBoard';
import type { CellKind, Level } from '@/types/game';

function createRandomCellKind(): CellKind {
  return Math.random() > 0.5 ? 'mole' : 'bomb';
}

export function useGameEngine(initialLevel: Level = 1) {
  const [selectedLevel, setSelectedLevel] = useState<Level>(initialLevel);
  const {
    state: { gameStatus, isPlaying },
    actions: { finishSession, resetSession, startSession, stopSession },
  } = useGameSession({
    initialStatus: createInitialGameState(initialLevel).gameStatus,
  });
  const {
    state: { score, successCount, failCount },
    actions: { hitBomb, hitMole, resetScoreBoard },
  } = useScoreBoard();
  const {
    state: { message, isResultModalOpen },
    actions: { closeResultModal, openResultModal, resetFeedback, setMessage },
  } = useGameFeedback();
  const levelConfig = LEVEL_CONFIGS[selectedLevel];
  const { activeCell, closeCell, hitCell, openCell } = useActiveCell();
  const { timeLeft, resetTimer } = useGameTimer({
    initialTime: levelConfig.durationSeconds,
    isRunning: isPlaying,
    onExpire: () => {
      finishSession();
      setMessage(getStatusMessage('finished'));
      openResultModal();
      closeCell();
    },
  });

  const resetBoardState = useCallback(
    (nextLevel: Level) => {
      const nextConfig = LEVEL_CONFIGS[nextLevel];
      resetScoreBoard();
      resetFeedback();
      resetTimer(nextConfig.durationSeconds);
      closeCell();
    },
    [closeCell, resetFeedback, resetScoreBoard, resetTimer],
  );

  useEffect(() => {
    if (!isPlaying || activeCell) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      openCell({
        index: createRandomCellIndex(selectedLevel),
        kind: createRandomCellKind(),
      });
    }, levelConfig.spawnIntervalMs);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [activeCell, isPlaying, levelConfig.spawnIntervalMs, openCell, selectedLevel]);

  useEffect(() => {
    if (!activeCell) {
      return undefined;
    }

    const timeoutMs = activeCell.state === 'hit' ? 700 : levelConfig.visibleDurationMs;
    const timeoutId = window.setTimeout(() => {
      closeCell();
    }, timeoutMs);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [activeCell, closeCell, levelConfig.visibleDurationMs]);

  const startGame = useCallback(() => {
    resetBoardState(selectedLevel);
    startSession();
    setMessage(getStatusMessage('playing'));
    openCell({
      index: createRandomCellIndex(selectedLevel),
      kind: createRandomCellKind(),
    });
  }, [openCell, resetBoardState, selectedLevel, setMessage, startSession]);

  const stopGame = useCallback(() => {
    resetBoardState(selectedLevel);
    stopSession();
    setMessage(getStatusMessage('stopped'));
  }, [resetBoardState, selectedLevel, setMessage, stopSession]);

  const resetGame = useCallback(() => {
    resetBoardState(selectedLevel);
    resetSession();
  }, [resetBoardState, resetSession, selectedLevel]);

  const handleCellClick = useCallback(() => {
    if (!isPlaying || !activeCell) {
      return;
    }

    if (activeCell.kind === 'mole') {
      hitCell();
      hitMole();
    } else {
      hitBomb();
      closeCell();
    }

    setMessage(getCellMessage(activeCell.kind));
  }, [activeCell, closeCell, hitBomb, hitCell, hitMole, isPlaying, setMessage]);

  const selectLevel = useCallback(
    (level: Level) => {
      if (isPlaying) {
        return;
      }

      setSelectedLevel(level);
      resetBoardState(level);
      resetSession();
    },
    [isPlaying, resetBoardState, resetSession],
  );

  const dismissResultModal = useCallback(() => {
    closeResultModal();
    resetBoardState(selectedLevel);
    resetSession();
    setMessage(getInitialMessage());
  }, [closeResultModal, resetBoardState, resetSession, selectedLevel, setMessage]);

  const boardCellCount = getBoardCellCount(selectedLevel);

  return {
    state: {
      selectedLevel,
      gameStatus,
      timeLeft,
      score,
      successCount,
      failCount,
      message,
      activeCell,
      isResultModalOpen,
      levelConfig,
      boardCellCount,
      canChangeLevel: !isPlaying,
    },
    actions: {
      startGame,
      stopGame,
      resetGame,
      selectLevel,
      handleCellClick,
      dismissResultModal,
    },
  };
}
