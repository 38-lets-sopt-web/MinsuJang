import { useCallback, useState } from 'react';
import type { ActiveCell, CellKind } from '@/types/game';

type OpenCellInput = {
  index: number;
  kind: CellKind;
};

export function useActiveCell() {
  const [activeCell, setActiveCell] = useState<ActiveCell>(null);

  const openCell = useCallback(({ index, kind }: OpenCellInput) => {
    setActiveCell({
      index,
      kind,
      state: 'visible',
    });
  }, []);

  const hitCell = useCallback(() => {
    setActiveCell((previous) => {
      if (!previous) {
        return previous;
      }

      return {
        ...previous,
        state: 'hit',
      };
    });
  }, []);

  const closeCell = useCallback(() => {
    setActiveCell(null);
  }, []);

  return {
    activeCell,
    openCell,
    hitCell,
    closeCell,
  };
}
