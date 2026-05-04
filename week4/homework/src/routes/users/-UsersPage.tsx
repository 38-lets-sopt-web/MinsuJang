import { UserListSection } from './-components/user-list-section/UserListSection';
import { UserSearchSection } from './-components/user-search-section/UserSearchSection';
import * as styles from './-UsersPage.css';

export const UsersPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>회원 조회</h1>
        <UserSearchSection />
        <UserListSection />
      </div>
    </main>
  );
};
