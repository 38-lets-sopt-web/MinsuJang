import { GameBoard } from '@components/composed/GameBoard';
import { GameControls } from '@components/composed/GameControls';
import { GameResultModal } from '@components/composed/GameResultModal';
import { GameStatusPanel } from '@components/composed/GameStatusPanel';
import { Section } from '@components/base/Section';
import { useGameEngine } from '@hooks/useGameEngine';
import { useGameResult } from '@hooks/useGameResult';
import { useEffect, useRef } from 'react';
import type { RankingRecord } from '@/types/ranking';
import * as S from './GamePage.css';

type GamePageProps = {
  onSaveRecord: (record: RankingRecord) => void;
};

export function GamePage({ onSaveRecord }: GamePageProps) {
  const engine = useGameEngine();
  const result = useGameResult({
    gameStatus: engine.state.gameStatus,
    level: engine.state.selectedLevel,
    score: engine.state.score,
    successCount: engine.state.successCount,
    failCount: engine.state.failCount,
    timeLeft: engine.state.timeLeft,
  });
  const hasSavedRecordRef = useRef(false);

  useEffect(() => {
    if (engine.state.gameStatus !== 'finished') {
      hasSavedRecordRef.current = false;
      return;
    }

    if (!result.state.canSaveRecord || hasSavedRecordRef.current) {
      return;
    }

    onSaveRecord({
      id: crypto.randomUUID(),
      level: result.state.resultSummary.level,
      score: result.state.resultSummary.score,
      createdAt: new Date().toISOString(),
    });
    hasSavedRecordRef.current = true;
  }, [engine.state.gameStatus, onSaveRecord, result.state]);

  return (
    <Section panel>
      <div className={S.gameShell}>
        <GameStatusPanel
          failCount={engine.state.failCount}
          message={engine.state.message}
          score={engine.state.score}
          successCount={engine.state.successCount}
          timeLeft={engine.state.timeLeft}
        />

        <Section panel>
          <GameControls
            canChangeLevel={engine.state.canChangeLevel}
            selectedLevel={engine.state.selectedLevel}
            onLevelChange={engine.actions.selectLevel}
            onStart={engine.actions.startGame}
            onStop={engine.actions.stopGame}
          />
          <GameBoard
            activeCell={engine.state.activeCell}
            cols={engine.state.levelConfig.cols}
            rows={engine.state.levelConfig.rows}
            onCellClick={engine.actions.handleCellClick}
          />
        </Section>
      </div>
      <GameResultModal
        open={engine.state.isResultModalOpen}
        title={result.state.resultTitle}
        message={result.state.resultMessage}
        onClose={engine.actions.dismissResultModal}
      />
    </Section>
  );
}
