import type { CellKind, GameStatus, Level } from '@/types/game';

export const GAME_MESSAGES = {
  idle: '게임 시작 전입니다.',
  playing: '게임이 시작되었습니다.',
  stopped: '게임이 중단되었습니다.',
  finished: '게임이 종료되었습니다.',
  moleHit: '잡았다!',
  bombHit: '땡!',
  resultTitleFinished: '게임 종료',
  resultTitlePending: '게임 대기',
  resultPending: '게임이 아직 종료되지 않았습니다.',
} as const;

export function getInitialMessage() {
  return GAME_MESSAGES.idle;
}

export function getStatusMessage(status: GameStatus) {
  switch (status) {
    case 'playing':
      return GAME_MESSAGES.playing;
    case 'stopped':
      return GAME_MESSAGES.stopped;
    case 'finished':
      return GAME_MESSAGES.finished;
    case 'idle':
    default:
      return getInitialMessage();
  }
}

export function getCellMessage(kind: CellKind) {
  return kind === 'mole' ? GAME_MESSAGES.moleHit : GAME_MESSAGES.bombHit;
}

export function getResultTitle(isFinished: boolean) {
  return isFinished ? GAME_MESSAGES.resultTitleFinished : GAME_MESSAGES.resultTitlePending;
}

type ResultMessageParams = {
  level: Level;
  score: number;
  successCount: number;
  failCount: number;
  isFinished: boolean;
};

export function getResultMessage({
  level,
  score,
  successCount,
  failCount,
  isFinished,
}: ResultMessageParams) {
  if (!isFinished) {
    return GAME_MESSAGES.resultPending;
  }

  return `Level ${level} 결과: ${score}점, 성공 ${successCount}회, 실패 ${failCount}회`;
}
