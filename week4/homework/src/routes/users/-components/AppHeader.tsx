import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { clearStoredUserId } from '@apis/core';
import { AsyncBoundary } from '@shared/components/boundary';
import { useUserDetailQuery } from '@shared/queries';
import { Header } from '@ui';
import { cn } from '@shared/utils/cn';
import { Route as UsersRoute } from '../route';
import * as styles from './AppHeader.css';

type AppHeaderNavProps = {
  isMenuOpen: boolean;
  isLogoutDisabled?: boolean;
  onCloseMenu: () => void;
  onLogout: () => void;
};

const AppHeaderNav = ({
  isMenuOpen,
  isLogoutDisabled = false,
  onCloseMenu,
  onLogout,
}: AppHeaderNavProps) => {
  return (
    <Header.Nav
      id='app-header-nav'
      className={cn(styles.nav, isMenuOpen ? styles.navOpen : styles.navClosed)}
      aria-label='마이페이지 메뉴'
    >
      <Header.Link className={styles.navItem} asChild>
        <Link to='/users/my' onClick={onCloseMenu}>
          내 정보
        </Link>
      </Header.Link>
      <Header.Link className={styles.navItem} asChild>
        <Link to='/users' onClick={onCloseMenu}>
          회원 조회
        </Link>
      </Header.Link>
      <Header.Button
        className={styles.navItem}
        type='button'
        disabled={isLogoutDisabled}
        onClick={onLogout}
      >
        로그아웃
      </Header.Button>
    </Header.Nav>
  );
};

type AppHeaderMenuButtonProps = {
  isMenuOpen: boolean;
  onClick: () => void;
};

const AppHeaderMenuButton = ({ isMenuOpen, onClick }: AppHeaderMenuButtonProps) => {
  return (
    <Header.Button
      className={styles.menuButton}
      type='button'
      aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
      aria-controls='app-header-nav'
      aria-expanded={isMenuOpen}
      onClick={onClick}
    >
      <span className={cn(styles.menuIcon, isMenuOpen && styles.menuIconOpen)} />
    </Header.Button>
  );
};

const AppHeaderFallback = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Header className={styles.root}>
      <Header.Brand title='SOPT MEMBERS' description='불러오는 중입니다.' />
      <AppHeaderMenuButton
        isMenuOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
        }}
      />
      <AppHeaderNav
        isMenuOpen={isMenuOpen}
        isLogoutDisabled
        onCloseMenu={closeMenu}
        onLogout={closeMenu}
      />
    </Header>
  );
};

const AppHeaderContent = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userId } = UsersRoute.useRouteContext();
  const { data: user } = useUserDetailQuery(userId);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    clearStoredUserId();
    closeMenu();
    await navigate({ to: '/signin' });
  };

  return (
    <Header className={styles.root}>
      <Header.Brand title='SOPT MEMBERS' description={`안녕하세요, ${user.name}님!`} />
      <AppHeaderMenuButton
        isMenuOpen={isMenuOpen}
        onClick={() => {
          setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
        }}
      />
      <AppHeaderNav isMenuOpen={isMenuOpen} onCloseMenu={closeMenu} onLogout={handleLogout} />
    </Header>
  );
};

export const AppHeader = () => {
  return (
    <AsyncBoundary
      pendingFallback={<AppHeaderFallback />}
      errorFallback={() => <AppHeaderFallback />}
    >
      <AppHeaderContent />
    </AsyncBoundary>
  );
};
