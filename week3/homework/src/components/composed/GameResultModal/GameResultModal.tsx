import { Button } from '@components/base/Button';
import { Flex } from '@components/base/Flex';
import { Text } from '@components/base/Text';
import { Title } from '@components/base/Title';
import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as S from './GameResultModal.css';

type GameResultModalProps = {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
};

export function GameResultModal({ open, title, message, onClose }: GameResultModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    closeButtonRef.current?.focus();
  }, [open]);

  if (!open) {
    return null;
  }

  return createPortal(
    <div className={S.overlay}>
      <div aria-labelledby={titleId} aria-modal='true' className={S.content} role='dialog'>
        <Flex direction='column' gap='1.25rem'>
          <Title as='h2' id={titleId} level='section'>
            {title}
          </Title>
          <Text tone='secondary'>{message}</Text>
          <Flex justify='end'>
            <Button ref={closeButtonRef} variant='primary' onClick={onClose}>
              확인
            </Button>
          </Flex>
        </Flex>
      </div>
    </div>,
    document.body,
  );
}
