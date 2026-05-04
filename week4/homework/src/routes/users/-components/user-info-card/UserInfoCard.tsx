import type { User } from '@apis/users/users.types';
import * as styles from './UserInfoCard.css';

type UserInfoCardProps = {
  user: User;
};

export const UserInfoCard = ({ user }: UserInfoCardProps) => {
  return (
    <dl className={styles.root}>
      <dt className={styles.label}>아이디</dt>
      <dd className={styles.value}>{user.loginId}</dd>
      <dt className={styles.label}>이름</dt>
      <dd className={styles.value}>{user.name}</dd>
      <dt className={styles.label}>이메일</dt>
      <dd className={styles.value}>{user.email}</dd>
      <dt className={styles.label}>나이</dt>
      <dd className={styles.value}>{user.age}</dd>
      <dt className={styles.label}>파트</dt>
      <dd className={styles.value}>{user.part}</dd>
    </dl>
  );
};
