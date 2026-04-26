import { Button } from '@components/base/Button';
import { Flex } from '@components/base/Flex';
import { Text } from '@components/base/Text';
import { Title } from '@components/base/Title';
import { formatRecordDate } from '@lib/time';
import type { RankingRecord } from '@/types/ranking';
import * as S from './RankingBoard.css';

type RankedRecord = RankingRecord & { rank: number };

type RankingBoardProps = {
  records: RankedRecord[];
  onReset: () => void;
};

export function RankingBoard({ records, onReset }: RankingBoardProps) {
  return (
    <Flex direction='column' gap='1.5rem'>
      <Flex align='center' justify='between'>
        <Title level='page'>랭킹 보드</Title>
        <Button variant='danger' onClick={onReset}>
          기록 초기화
        </Button>
      </Flex>
      {records.length === 0 ? (
        <Text tone='secondary'>아직 저장된 기록이 없습니다.</Text>
      ) : (
        <table className={S.table}>
          <thead>
            <tr>
              <th className={S.headCell}>순위</th>
              <th className={S.headCell}>레벨</th>
              <th className={S.headCell}>점수</th>
              <th className={S.headCell}>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td className={S.bodyCell}>{record.rank}</td>
                <td className={S.bodyCell}>Level {record.level}</td>
                <td className={S.bodyCell}>{record.score}점</td>
                <td className={S.bodyCell}>{formatRecordDate(record.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Flex>
  );
}
