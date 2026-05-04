/* eslint-disable react-refresh/only-export-components */
import { cloneElement, isValidElement } from 'react';
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import * as S from './Header.css';

type HeaderProps = ComponentPropsWithoutRef<'header'>;
type HeaderLinkProps = ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
  children: ReactNode;
};
type HeaderButtonProps = ComponentPropsWithoutRef<'button'>;

type HeaderBrandProps = ComponentPropsWithoutRef<'div'> & {
  title: string;
  description?: string;
};

type HeaderNavProps = ComponentPropsWithoutRef<'nav'>;

function HeaderRoot({ children, className, ...props }: HeaderProps) {
  return (
    <header className={cn(S.root, className)} {...props}>
      <div className={S.inner}>{children}</div>
    </header>
  );
}

function HeaderBrand({ title, description, className, ...props }: HeaderBrandProps) {
  return (
    <div className={cn(S.brand, className)} {...props}>
      <strong className={S.title}>{title}</strong>
      {description ? <p className={S.description}>{description}</p> : null}
    </div>
  );
}

function HeaderNav({ className, ...props }: HeaderNavProps) {
  return <nav className={cn(S.nav, className)} {...props} />;
}

function HeaderLink({ className, ...props }: HeaderLinkProps) {
  const { asChild, children, ...linkProps } = props;
  const linkClassName = cn(S.navItem, className);

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(linkClassName, child.props.className),
    });
  }

  return (
    <a className={linkClassName} {...linkProps}>
      {children}
    </a>
  );
}

function HeaderButton({ className, ...props }: HeaderButtonProps) {
  return <button className={cn(S.navButton, className)} {...props} />;
}

export const Header = Object.assign(HeaderRoot, {
  Brand: HeaderBrand,
  Nav: HeaderNav,
  Link: HeaderLink,
  Button: HeaderButton,
});
