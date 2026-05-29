import * as S from './MyInfoSummary.css';

type MyInfoSummaryProps = {
  loginId: string;
  part: string;
};

export const MyInfoSummary = ({ loginId, part }: MyInfoSummaryProps) => {
  return (
    <dl className={S.root}>
      <dt className={S.label}>아이디</dt>
      <dd className={S.value}>{loginId}</dd>
      <dt className={S.label}>파트</dt>
      <dd className={S.value}>{part}</dd>
    </dl>
  );
};
