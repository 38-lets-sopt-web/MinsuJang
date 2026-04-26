import type { Level } from '@/types/game';

export type RankingRecord = {
  id: string;
  level: Level;
  score: number;
  successTime: number;
  createdAt: string;
};
