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

export function GameBoard({ rows, cols, activeCell, onCellClick }: GameBoardProps) {
  const totalCells = rows * cols;
  const cells = Array.from({ length: totalCells }, (_, index) => index);

  return (
    <div className={S.boardFrame}>
      <Grid columns={`repeat(${cols}, minmax(0, 1fr))`} gap='1.25rem'>
        {cells.map((cellIndex) => {
          const isActive = activeCell?.index === cellIndex;
          const className = cn(
            S.boardHole,
            isActive
              ? activeCell.state === 'hit'
                ? S.holeState.hit
                : activeCell.kind === 'mole'
                  ? S.holeState.visibleMole
                  : S.holeState.visibleBomb
              : S.holeState.hidden,
          );

          return (
            <button
              key={cellIndex}
              className={className}
              type='button'
              onClick={isActive && activeCell.state !== 'hit' ? onCellClick : undefined}
            >
              {isActive
                ? activeCell.state === 'hit'
                  ? '잡음'
                  : activeCell.kind === 'mole'
                    ? '두더지'
                    : '폭탄'
                : ''}
            </button>
          );
        })}
      </Grid>
    </div>
  );
}
