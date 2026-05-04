import { SignUpFunnel } from './-components/funnel';
import * as styles from './-SignUpPage.css';

export const SignUpPage = () => {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <SignUpFunnel />
      </div>
    </main>
  );
};
