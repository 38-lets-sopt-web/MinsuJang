import { Grid } from '@components/base/Grid';
import { cn } from '@lib/cn';
import type { ActiveCell } from '@/types/game';
import * as S from './GameBoard.css';

type GameBoardProps = {
  rows: number;
  cols: number;
  activeCell: ActiveCell;
  onCellClick: () => void;
};

function getHoleStateClass(isActive: boolean, activeCell: ActiveCell) {
  if (!isActive || !activeCell) {
    return S.holeState.hidden;
  }

  if (activeCell.state === 'hit') {
    return S.holeState.hit;
  }

  return activeCell.kind === 'mole' ? S.holeState.visibleMole : S.holeState.visibleBomb;
}

function getHoleLabel(isActive: boolean, activeCell: ActiveCell) {
  if (!isActive || !activeCell) {
    return '';
  }

  if (activeCell.state === 'hit') {
    return '잡음';
  }

  return activeCell.kind === 'mole' ? '두더지' : '폭탄';
}

function getHoleAriaLabel(cellIndex: number, isActive: boolean, activeCell: ActiveCell) {
  const holeNumber = cellIndex + 1;

  if (!isActive || !activeCell) {
    return `빈 구멍 ${holeNumber}`;
  }

  if (activeCell.state === 'hit') {
    return `맞은 두더지 구멍 ${holeNumber}`;
  }

  return activeCell.kind === 'mole'
    ? `두더지가 나온 구멍 ${holeNumber}`
    : `폭탄이 나온 구멍 ${holeNumber}`;
}

export function GameBoard({ rows, cols, activeCell, onCellClick }: GameBoardProps) {
  const totalCells = rows * cols;
  const cells = Array.from({ length: totalCells }, (_, index) => index);

  return (
    <div className={S.boardFrame}>
      <Grid columns={`repeat(${cols}, minmax(0, 1fr))`} gap='1.25rem'>
        {cells.map((cellIndex) => {
          const isActive = activeCell?.index === cellIndex;
          const className = cn(S.boardHole, getHoleStateClass(isActive, activeCell));
          const label = getHoleLabel(isActive, activeCell);
          const canClick = isActive && activeCell?.state !== 'hit';
          const ariaLabel = getHoleAriaLabel(cellIndex, isActive, activeCell);

          return (
            <button
              aria-label={ariaLabel}
              key={cellIndex}
              className={className}
              type='button'
              onClick={canClick ? onCellClick : undefined}
            >
              {label}
            </button>
          );
        })}
      </Grid>
    </div>
  );
}
