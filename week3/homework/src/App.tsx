import { useState } from 'react';
import { app, headerPanel, titleRow } from '@/app.css';
import { Flex } from '@components/base/Flex';
import { Section } from '@components/base/Section';
import { Tabs } from '@components/base/Tabs';
import { Title } from '@components/base/Title';
import { GamePage } from '@pages/GamePage';
import { RankingPage } from '@pages/RankingPage';

type TabKey = 'game' | 'ranking';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('game');

  return (
    <main className={app}>
      <Section panel className={headerPanel}>
        <Flex className={titleRow} align='center' gap='20px'>
          <Title as='h1' level='page'>
            두더지 게임
          </Title>
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger active={activeTab === 'game'} onClick={() => setActiveTab('game')}>
                게임
              </Tabs.Trigger>
              <Tabs.Trigger
                active={activeTab === 'ranking'}
                onClick={() => setActiveTab('ranking')}
              >
                랭킹
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </Flex>
      </Section>
      {activeTab === 'game' ? <GamePage /> : <RankingPage />}
    </main>
  );
}

export default App;
