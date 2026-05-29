import { Button } from '@components/base/Button';
import { Flex } from '@components/base/Flex';
import { LEVEL_CONFIGS } from '@constants/game';
import type { Level } from '@/types/game';
import * as S from './GameControls.css';

type GameControlsProps = {
  selectedLevel: Level;
  canChangeLevel: boolean;
  onLevelChange: (level: Level) => void;
  onStart: () => void;
  onStop: () => void;
};

const levelOptions = Object.values(LEVEL_CONFIGS).map((config) => ({
  label: `Level ${config.level}`,
  value: config.level,
}));

export function GameControls({
  selectedLevel,
  canChangeLevel,
  onLevelChange,
  onStart,
  onStop,
}: GameControlsProps) {
  return (
    <Flex className={S.controlsRow} align='center' justify='between' gap='1.25rem'>
      <select
        aria-label='레벨 선택'
        className={S.selector}
        disabled={!canChangeLevel}
        value={selectedLevel}
        onChange={(event) => onLevelChange(Number(event.target.value) as Level)}
      >
        {levelOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Flex gap='0.75rem'>
        <Button variant='primary' onClick={onStart}>
          시작
        </Button>
        <Button variant='danger' onClick={onStop}>
          중단
        </Button>
      </Flex>
    </Flex>
  );
}
