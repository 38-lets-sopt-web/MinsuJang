/* eslint-disable react-refresh/only-export-components */
import { cloneElement, isValidElement } from 'react';
import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';
import * as styles from './Header.css';

type HeaderProps = ComponentPropsWithoutRef<'header'>;
type HeaderLinkProps = ComponentPropsWithoutRef<'a'> & {
  asChild?: boolean;
  children: ReactNode;
};
type HeaderButtonProps = ComponentPropsWithoutRef<'button'>;

type HeaderBrandProps = {
  title: string;
  description?: string;
};

type HeaderNavProps = {
  children: ReactNode;
};

function HeaderRoot({ children, className, ...props }: HeaderProps) {
  const rootClassName = className ? `${styles.root} ${className}` : styles.root;

  return (
    <header className={rootClassName} {...props}>
      <div className={styles.inner}>{children}</div>
    </header>
  );
}

function HeaderBrand({ title, description }: HeaderBrandProps) {
  return (
    <div className={styles.brand}>
      <strong className={styles.title}>{title}</strong>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}

function HeaderNav({ children }: HeaderNavProps) {
  return <nav className={styles.nav}>{children}</nav>;
}

function HeaderLink({ className, ...props }: HeaderLinkProps) {
  const { asChild, children, ...linkProps } = props;
  const linkClassName = className ? `${styles.navItem} ${className}` : styles.navItem;

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    const childClassName = child.props.className
      ? `${linkClassName} ${child.props.className}`
      : linkClassName;

    return cloneElement(child, {
      className: childClassName,
    });
  }

  return (
    <a className={linkClassName} {...linkProps}>
      {children}
    </a>
  );
}

function HeaderButton({ className, ...props }: HeaderButtonProps) {
  const buttonClassName = className ? `${styles.navButton} ${className}` : styles.navButton;

  return <button className={buttonClassName} {...props} />;
}

export const Header = Object.assign(HeaderRoot, {
  Brand: HeaderBrand,
  Nav: HeaderNav,
  Link: HeaderLink,
  Button: HeaderButton,
});
