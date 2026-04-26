import { RankingBoard } from '@components/composed/RankingBoard';
import { Section } from '@components/base/Section';
import type { RankingRecord } from '@/types/ranking';

type RankingPageProps = {
  records: Array<RankingRecord & { rank: number }>;
  onResetRecords: () => void;
};

export function RankingPage({ records, onResetRecords }: RankingPageProps) {
  const handleReset = () => {
    const shouldReset = window.confirm('정말 랭킹 기록을 초기화할까요?');

    if (!shouldReset) {
      return;
    }

    onResetRecords();
  };

  return (
    <Section panel aria-labelledby='ranking-tab' id='ranking-panel' role='tabpanel'>
      <RankingBoard records={records} onReset={handleReset} />
    </Section>
  );
}
