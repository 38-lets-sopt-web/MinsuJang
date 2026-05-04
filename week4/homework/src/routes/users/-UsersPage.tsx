import { UserListSection } from './-components/user-list-section/UserListSection';
import { UserSearchSection } from './-components/user-search-section/UserSearchSection';
import * as S from './-UsersPage.css';

export const UsersPage = () => {
  return (
    <main className={S.page}>
      <div className={S.content}>
        <h1 className={S.title}>회원 조회</h1>
        <UserSearchSection />
        <UserListSection />
      </div>
    </main>
  );
};
