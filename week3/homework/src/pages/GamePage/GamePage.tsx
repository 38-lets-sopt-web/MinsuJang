import { Button } from '@components/base/Button';
import { Card } from '@components/base/Card';
import { Flex } from '@components/base/Flex';
import { Grid } from '@components/base/Grid';
import { Section } from '@components/base/Section';
import { Text } from '@components/base/Text';
import * as styles from './GamePage.css';

const holes = Array.from({ length: 9 }, (_, index) => index);

export function GamePage() {
  return (
    <Section panel>
      <div className={styles.gameShell}>
        <Flex direction='column' gap='24px'>
          <Card.Root className={styles.statFull}>
            <Flex direction='column' align='center' justify='center' gap='16px'>
              <Card.Title>남은 시간</Card.Title>
              <Card.Value>20.0</Card.Value>
            </Flex>
          </Card.Root>
          <Card.Root className={styles.statFull}>
            <Flex direction='column' align='center' justify='center' gap='16px'>
              <Card.Title>총 점수</Card.Title>
              <Card.Value>0</Card.Value>
            </Flex>
          </Card.Root>
          <div className={styles.statsGrid}>
            <Card.Root className={styles.statHalf}>
              <Flex direction='column' align='center' justify='center' gap='16px'>
                <Text tone='success'>성공</Text>
                <Card.Value>0</Card.Value>
              </Flex>
            </Card.Root>
            <Card.Root className={styles.statHalf}>
              <Flex direction='column' align='center' justify='center' gap='16px'>
                <Text tone='danger'>실패</Text>
                <Card.Value>0</Card.Value>
              </Flex>
            </Card.Root>
          </div>
          <Card.Root className={styles.statFull}>
            <Flex direction='column' gap='20px'>
              <Card.Title>안내 메시지</Card.Title>
              <Text tone='secondary'>게임 시작 전입니다.</Text>
            </Flex>
          </Card.Root>
        </Flex>

        <Section panel>
          <Flex className={styles.controlsRow} align='center' justify='between' gap='20px'>
            <div className={styles.selector}>Level 2</div>
            <Flex gap='12px'>
              <Button variant='primary'>시작</Button>
              <Button variant='danger'>중단</Button>
            </Flex>
          </Flex>
          <div className={styles.boardFrame}>
            <Grid columns='repeat(3, minmax(0, 1fr))' gap='20px'>
              {holes.map((hole) => (
                <div key={hole} className={styles.boardHole} />
              ))}
            </Grid>
          </div>
        </Section>
      </div>
    </Section>
  );
}
