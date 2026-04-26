import { headerPanel, titleRow } from '@/app.css';
import { Flex } from '@components/base/Flex';
import { Section } from '@components/base/Section';
import { Tabs } from '@components/base/Tabs';
import { Title } from '@components/base/Title';

type TabKey = 'game' | 'ranking';

type AppHeaderProps = {
  activeTab: TabKey;
  onChangeTab: (tab: TabKey) => void;
};

export function AppHeader({ activeTab, onChangeTab }: AppHeaderProps) {
  return (
    <Section panel className={headerPanel}>
      <Flex className={titleRow} align='center' gap='1.25rem'>
        <Title as='h1' level='page'>
          두더지 게임
        </Title>
        <Tabs.Root>
          <Tabs.List>
            <Tabs.Trigger active={activeTab === 'game'} onClick={() => onChangeTab('game')}>
              게임
            </Tabs.Trigger>
            <Tabs.Trigger active={activeTab === 'ranking'} onClick={() => onChangeTab('ranking')}>
              랭킹
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>
      </Flex>
    </Section>
  );
}
