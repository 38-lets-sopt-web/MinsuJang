import { useState } from 'react';
import { app } from '@/app.css';
import { AppHeader } from '@components/composed/AppHeader';
import { useRankingRecords } from '@hooks/useRankingRecords';
import { GamePage } from '@pages/GamePage';
import { RankingPage } from '@pages/RankingPage';

type TabKey = 'game' | 'ranking';

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('game');
  const ranking = useRankingRecords();

  return (
    <main className={app}>
      <AppHeader activeTab={activeTab} onChangeTab={setActiveTab} />
      {activeTab === 'game' && <GamePage onSaveRecord={ranking.actions.saveRecord} />}
      {activeTab === 'ranking' && (
        <RankingPage
          records={ranking.state.rankedRecords}
          onResetRecords={ranking.actions.resetRecords}
        />
      )}
    </main>
  );
}

export default App;
