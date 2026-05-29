export type Level = 1 | 2 | 3;

export type GameStatus = 'idle' | 'playing' | 'stopped' | 'finished';

export type CellKind = 'mole' | 'bomb';

export type CellState = 'hidden' | 'visible' | 'hit';

export type ActiveCell = {
  index: number;
  kind: CellKind;
  state: CellState;
} | null;

export type LevelConfig = {
  level: Level;
  rows: number;
  cols: number;
  durationSeconds: number;
  spawnIntervalMs: number;
  visibleDurationMs: number;
};

export type GameEngineState = {
  selectedLevel: Level;
  gameStatus: GameStatus;
  timeLeft: number;
  score: number;
  successCount: number;
  failCount: number;
  message: string;
  activeCell: ActiveCell;
  isResultModalOpen: boolean;
};
