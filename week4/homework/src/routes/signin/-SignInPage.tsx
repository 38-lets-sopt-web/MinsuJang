import { SignInForm } from './-components/SignInForm';
import * as styles from './-SignInPage.css';

export const SignInPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <SignInForm />
      </div>
    </main>
  );
};
