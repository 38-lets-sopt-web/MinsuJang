import type { GameEngineState, Level, LevelConfig } from '@/types/game';

export const RANKING_STORAGE_KEY = 'mole-game-records';

export const DEFAULT_LEVEL: Level = 1;

export const LEVEL_CONFIGS: Record<Level, LevelConfig> = {
  1: {
    level: 1,
    rows: 2,
    cols: 2,
    durationSeconds: 15,
    spawnIntervalMs: 1000,
    visibleDurationMs: 800,
  },
  2: {
    level: 2,
    rows: 3,
    cols: 3,
    durationSeconds: 20,
    spawnIntervalMs: 900,
    visibleDurationMs: 750,
  },
  3: {
    level: 3,
    rows: 4,
    cols: 4,
    durationSeconds: 30,
    spawnIntervalMs: 800,
    visibleDurationMs: 700,
  },
};

export const INITIAL_MESSAGE = '게임 시작 전입니다.';

export function createInitialGameState(level: Level = DEFAULT_LEVEL): GameEngineState {
  return {
    selectedLevel: level,
    gameStatus: 'idle',
    timeLeft: LEVEL_CONFIGS[level].durationSeconds,
    score: 0,
    successCount: 0,
    failCount: 0,
    message: INITIAL_MESSAGE,
    activeCell: null,
    isResultModalOpen: false,
  };
}
