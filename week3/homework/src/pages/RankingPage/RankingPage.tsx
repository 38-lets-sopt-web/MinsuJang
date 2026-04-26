import { Button } from '@components/base/Button';
import { Flex } from '@components/base/Flex';
import { Section } from '@components/base/Section';
import { Title } from '@components/base/Title';
import * as styles from './RankingPage.css';

export function RankingPage() {
  return (
    <Section panel>
      <Flex direction='column' gap='24px'>
        <Flex align='center' justify='between'>
          <Title level='page'>랭킹 보드</Title>
          <Button variant='danger'>기록 초기화</Button>
        </Flex>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.headCell}>순위</th>
              <th className={styles.headCell}>레벨</th>
              <th className={styles.headCell}>점수</th>
              <th className={styles.headCell}>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.bodyCell}>1</td>
              <td className={styles.bodyCell}>Level 2</td>
              <td className={styles.bodyCell}>20점</td>
              <td className={styles.bodyCell}>2026. 4. 25. 오전 1:14:15</td>
            </tr>
          </tbody>
        </table>
      </Flex>
    </Section>
  );
}
