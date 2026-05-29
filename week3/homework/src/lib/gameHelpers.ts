import { LEVEL_CONFIGS } from '@constants/game';
import type { ActiveCell, Level } from '@/types/game';

export function getLevelConfig(level: Level) {
  return LEVEL_CONFIGS[level];
}

export function getBoardCellCount(level: Level) {
  const config = getLevelConfig(level);
  return config.rows * config.cols;
}

export function createRandomCellIndex(level: Level) {
  return Math.floor(Math.random() * getBoardCellCount(level));
}

export function hasActiveVisibleCell(activeCell: ActiveCell) {
  return Boolean(activeCell && activeCell.state !== 'hidden');
}
