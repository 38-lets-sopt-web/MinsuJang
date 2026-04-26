import { useCallback, useState } from 'react';
import { getInitialMessage } from '@lib/gameMessages';

export function useGameFeedback() {
  const [message, setMessage] = useState<string>(getInitialMessage());
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const resetFeedback = useCallback(() => {
    setMessage(getInitialMessage());
    setIsResultModalOpen(false);
  }, []);

  const openResultModal = useCallback(() => {
    setIsResultModalOpen(true);
  }, []);

  const closeResultModal = useCallback(() => {
    setIsResultModalOpen(false);
  }, []);

  return {
    state: {
      message,
      isResultModalOpen,
    },
    actions: {
      setMessage,
      resetFeedback,
      openResultModal,
      closeResultModal,
    },
  };
}
