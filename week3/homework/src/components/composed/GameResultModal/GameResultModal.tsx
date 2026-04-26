import { Button } from '@components/base/Button';
import { Flex } from '@components/base/Flex';
import { Text } from '@components/base/Text';
import { Title } from '@components/base/Title';
import { createPortal } from 'react-dom';
import * as S from './GameResultModal.css';

type GameResultModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export function GameResultModal({ open, title, message, onClose }: GameResultModalProps) {
  if (!open) {
    return null;
  }

  return createPortal(
    <div className={S.overlay}>
      <div className={S.content}>
        <Flex direction='column' gap='1.25rem'>
          <Title level='section'>{title}</Title>
          <Text tone='secondary'>{message}</Text>
          <Flex justify='end'>
            <Button variant='primary' onClick={onClose}>
              확인
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>,
    document.body,
  );
}
