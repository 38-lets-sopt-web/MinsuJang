import type { SubmitEvent } from 'react';
import { AsyncBoundary } from '@shared/components/boundary';
import { useUserDetailQuery } from '@shared/queries';
import { Button, Input } from '@ui';
import { useUserSearch } from '../../-hooks/useUserSearch';
import { UserInfoCard } from '../user-info-card/UserInfoCard';
import * as styles from './UserSearchSection.css';

type UserSearchResultProps = {
  userId: number | null;
};

const UserSearchResult = ({ userId }: UserSearchResultProps) => {
  if (!userId) {
    return <div className={styles.emptyResult}>원하는 ID를 검색해 보세요! 🔍</div>;
  }

  return (
    <AsyncBoundary>
      <UserSearchResultContent userId={userId} />
    </AsyncBoundary>
  );
};

const UserSearchResultContent = ({ userId }: { userId: number }) => {
  const { data: user } = useUserDetailQuery(userId);

  return <UserInfoCard user={user} />;
};

export const UserSearchSection = () => {
  const { state, action } = useUserSearch();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    action.search();
  };

  return (
    <section className={styles.root}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label='회원 ID'
          placeholder='회원 ID를 입력해주세요.'
          inputMode='numeric'
          value={state.userIdInput}
          onChange={(event) => {
            action.changeUserIdInput(event.currentTarget.value);
          }}
        />
        <Button type='submit' fullWidth disabled={!state.canSearch}>
          검색
        </Button>
      </form>
      <div className={styles.result}>
        <h2 className={styles.resultTitle}>검색 결과</h2>
        <UserSearchResult userId={state.searchedUserId} />
      </div>
    </section>
  );
};
