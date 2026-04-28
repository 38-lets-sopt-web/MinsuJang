import { Flex } from '@components/base/Flex';
import { Header } from '@components/base/Header';
import { Tabs } from '@components/base/Tabs';
import { Title } from '@components/base/Title';
import * as S from './AppHeader.css';

type TabKey = 'game' | 'ranking';

type AppHeaderProps = {
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
};

export function AppHeader({ activeTab, onChangeTab }: AppHeaderProps) {
  return (
    <Header panel className={S.headerPanel}>
      <Flex className={S.titleRow} align='center' gap='1.25rem'>
        <Title as='h1' level='page'>
          두더지 게임
        </Title>
        <Tabs.Root>
          <Tabs.List>
            <Tabs.Trigger
              active={activeTab === 'game'}
              aria-controls='game-panel'
              id='game-tab'
              onClick={() => onChangeTab('game')}
            >
              게임
            </Tabs.Trigger>
            <Tabs.Trigger
              active={activeTab === 'ranking'}
              aria-controls='ranking-panel'
              id='ranking-tab'
              onClick={() => onChangeTab('ranking')}
            >
              랭킹
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Flex>
    </Header>
  );
}
