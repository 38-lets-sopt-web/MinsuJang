import { useCallback, useMemo, useState } from 'react';
import { RANKING_STORAGE_KEY } from '@constants/game';
import { readStorage, removeStorage, writeStorage } from '@lib/localStorage';
import type { RankingRecord } from '@/types/ranking';

function sortRecords(records: RankingRecord[]) {
  return [...records].sort((left, right) => {
    if (right.level !== left.level) {
      return right.level - left.level;
    }

    if (right.score !== left.score) {
      return right.score - left.score;
    }

    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}

export function useRankingRecords() {
  const [records, setRecords] = useState<RankingRecord[]>(() =>
    sortRecords(readStorage<RankingRecord[]>(RANKING_STORAGE_KEY, [])),
  );

  const saveRecord = useCallback((record: RankingRecord) => {
    setRecords((previous) => {
      const next = sortRecords([...previous, record]);
      writeStorage(RANKING_STORAGE_KEY, next);
      return next;
    });
  }, []);

  const resetRecords = useCallback(() => {
    setRecords([]);
    removeStorage(RANKING_STORAGE_KEY);
  }, []);

  const rankedRecords = useMemo(
    () =>
      records.map((record, index) => ({
        rank: index + 1,
        ...record,
      })),
    [records],
  );

  return {
    state: {
      records,
      rankedRecords,
    },
    actions: {
      saveRecord,
      resetRecords,
    },
  };
}
