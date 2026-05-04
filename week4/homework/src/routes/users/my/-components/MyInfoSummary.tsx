import * as styles from './MyInfoSummary.css';

type MyInfoSummaryProps = {
  loginId: string;
  part: string;
};

export const MyInfoSummary = ({ loginId, part }: MyInfoSummaryProps) => {
  return (
    <dl className={styles.root}>
      <dt className={styles.label}>아이디</dt>
      <dd className={styles.value}>{loginId}</dd>
      <dt className={styles.label}>파트</dt>
      <dd className={styles.value}>{part}</dd>
    </dl>
  );
};
