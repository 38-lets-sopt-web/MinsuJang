import { Card } from '@components/base/Card';
import { Flex } from '@components/base/Flex';
import { Text } from '@components/base/Text';
import * as S from './GameStatusPanel.css';

type GameStatusPanelProps = {
  timeLeft: number;
  score: number;
  successCount: number;
  failCount: number;
  message: string;
};

export function GameStatusPanel({
  timeLeft,
  score,
  successCount,
  failCount,
  message,
}: GameStatusPanelProps) {
  return (
    <Flex direction='column' gap='1.5rem'>
      <Card.Root className={S.statFull}>
        <Flex direction='column' align='center' justify='center' gap='1rem'>
          <Card.Title>남은 시간</Card.Title>
          <Card.Value>{timeLeft.toFixed(1)}</Card.Value>
        </Flex>
      </Card.Root>
      <Card.Root className={S.statFull}>
        <Flex direction='column' align='center' justify='center' gap='1rem'>
          <Card.Title>총 점수</Card.Title>
          <Card.Value>{score}</Card.Value>
        </Flex>
      </Card.Root>
      <div className={S.statsGrid}>
        <Card.Root className={S.statHalf}>
          <Flex direction='column' align='center' justify='center' gap='1rem'>
            <Text tone='success'>성공</Text>
            <Card.Value>{successCount}</Card.Value>
          </Flex>
        </Card.Root>
        <Card.Root className={S.statHalf}>
          <Flex direction='column' align='center' justify='center' gap='1rem'>
            <Text tone='danger'>실패</Text>
            <Card.Value>{failCount}</Card.Value>
          </Flex>
        </Card.Root>
      </div>
      <Card.Root className={S.statFull}>
        <Flex direction='column' gap='1.25rem'>
          <Card.Title>안내 메시지</Card.Title>
          <Text tone='secondary'>{message}</Text>
        </Flex>
      </Card.Root>
    </Flex>
  );
}
