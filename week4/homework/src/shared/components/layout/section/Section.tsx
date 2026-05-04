/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import * as S from './Section.css';

type SectionProps = ComponentPropsWithoutRef<'section'>;
type SectionHeaderProps = ComponentPropsWithoutRef<'header'> & {
  title: string;
  description?: string;
};
type SectionBodyProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

const SectionRoot = forwardRef<HTMLElement, SectionProps>(({ className, ...props }, ref) => {
  return <section ref={ref} className={cn(S.root, className)} {...props} />;
});

SectionRoot.displayName = 'Section';

function SectionHeader({ title, description, className, ...props }: SectionHeaderProps) {
  return (
    <header className={cn(S.header, className)} {...props}>
      <h2 className={S.title}>{title}</h2>
      {description ? <p className={S.description}>{description}</p> : null}
    </header>
  );
}

function SectionBody({ className, ...props }: SectionBodyProps) {
  return <div className={cn(S.body, className)} {...props} />;
}

export const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
  Body: SectionBody,
});
