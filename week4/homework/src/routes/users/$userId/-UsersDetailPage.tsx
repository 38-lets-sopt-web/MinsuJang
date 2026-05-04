import { Link } from '@tanstack/react-router';
import { AsyncBoundary } from '@shared/components/boundary';
import { useUserDetailQuery } from '@shared/queries';
import { InfoCard } from '@ui';
import { Route } from './route';
import * as styles from './-UsersDetailPage.css';

const UsersDetailPageContent = () => {
  const { userId } = Route.useParams();
  const { data: user } = useUserDetailQuery(Number(userId));

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <h1 className={styles.title}>상세 정보</h1>
        <Link className={styles.backLink} to='/users'>
          뒤로가기
        </Link>
        <InfoCard
          items={[
            { label: '이름', value: user.name },
            { label: '아이디', value: user.loginId },
            { label: '이메일', value: user.email },
            { label: '나이', value: `${user.age}세` },
            { label: '파트', value: user.part },
          ]}
        />
      </section>
    </main>
  );
};

export const UsersDetailPage = () => {
  return (
    <AsyncBoundary>
      <UsersDetailPageContent />
    </AsyncBoundary>
  );
};
