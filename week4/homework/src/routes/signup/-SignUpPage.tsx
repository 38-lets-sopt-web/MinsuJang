import { SignUpFunnel } from './-components/funnel';
import * as S from './-SignUpPage.css';

export const SignUpPage = () => {
  return (
    <main className={S.page}>
      <div className={S.content}>
        <SignUpFunnel />
      </div>
    </main>
  );
};
