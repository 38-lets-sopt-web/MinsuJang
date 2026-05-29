import type { SubmitEvent } from 'react';
import { AsyncBoundary } from '@shared/components/boundary';
import { useUserDetailQuery } from '@shared/queries';
import { Button, InfoCard, Input } from '@ui';
import { useUserSearch } from '../../-hooks/useUserSearch';
import * as S from './UserSearchSection.css';

type UserSearchResultProps = {
  userId: number | null;
};

const UserSearchResult = ({ userId }: UserSearchResultProps) => {
  if (!userId) {
    return <div className={S.emptyResult}>원하는 ID를 검색해 보세요! 🔍</div>;
  }

  return (
    <AsyncBoundary>
      <UserSearchResultContent userId={userId} />
    </AsyncBoundary>
  );
};

const UserSearchResultContent = ({ userId }: { userId: number }) => {
  const { data: user } = useUserDetailQuery(userId);

  return (
    <InfoCard
      items={[
        { label: '아이디', value: user.loginId },
        { label: '이름', value: user.name },
        { label: '이메일', value: user.email },
        { label: '나이', value: user.age },
        { label: '파트', value: user.part },
      ]}
    />
  );
};

export const UserSearchSection = () => {
  const { state, action } = useUserSearch();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    action.search();
  };

  return (
    <section className={S.root}>
      <form className={S.form} onSubmit={handleSubmit}>
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
      <div className={S.result}>
        <h2 className={S.resultTitle}>검색 결과</h2>
        <UserSearchResult userId={state.searchedUserId} />
      </div>
    </section>
  );
};
