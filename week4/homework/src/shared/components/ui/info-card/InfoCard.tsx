import { Fragment } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import * as S from './InfoCard.css';

type InfoCardItem = {
  label: string;
  value: ReactNode;
};

type InfoCardProps = Omit<ComponentPropsWithoutRef<'dl'>, 'children'> & {
  items: InfoCardItem[];
};

export const InfoCard = ({ items, className, ...props }: InfoCardProps) => {
  return (
    <dl className={cn(S.root, className)} {...props}>
      {items.map(({ label, value }) => (
        <Fragment key={label}>
          <dt className={S.label}>{label}</dt>
          <dd className={S.value}>{value}</dd>
        </Fragment>
      ))}
    </dl>
  );
};
