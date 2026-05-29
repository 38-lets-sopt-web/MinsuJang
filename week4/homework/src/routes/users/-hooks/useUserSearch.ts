import { useState } from 'react';

export const useUserSearch = () => {
  const [userIdInput, setUserIdInput] = useState('');
  const [searchedUserId, setSearchedUserId] = useState<number | null>(null);
  const canSearch = userIdInput.length > 0;

  const changeUserIdInput = (value: string) => {
    setUserIdInput(value.replace(/\D/g, ''));
  };

  const search = () => {
    if (!canSearch) {
      return;
    }

    setSearchedUserId(Number(userIdInput));
  };

  return {
    state: {
      userIdInput,
      searchedUserId,
      canSearch,
    },
    action: {
      changeUserIdInput,
      search,
    },
  };
};
