import { SignInForm } from './-components/SignInForm';
import * as S from './-SignInPage.css';

export const SignInPage = () => {
  return (
    <main className={S.page}>
      <div className={S.content}>
        <SignInForm />
      </div>
    </main>
  );
};
