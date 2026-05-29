import { AsyncBoundary } from '@shared/components/boundary';
import { useUserDetailQuery } from '@shared/queries';
import { Route as UsersRoute } from '../route';
import { MyInfoForm } from './-components/MyInfoForm';
import { MyInfoSummary } from './-components/MyInfoSummary';
import * as S from './-MyPage.css';

const MyPageContent = () => {
  const { userId } = UsersRoute.useRouteContext();
  const { data: user } = useUserDetailQuery(userId);

  return (
    <main className={S.page}>
      <section className={S.content}>
        <h1 className={S.title}>내 정보</h1>
        <MyInfoSummary loginId={user.loginId} part={user.part} />
        <MyInfoForm user={user} />
      </section>
    </main>
  );
};

export const MyPage = () => {
  return (
    <AsyncBoundary>
      <MyPageContent />
    </AsyncBoundary>
  );
};
