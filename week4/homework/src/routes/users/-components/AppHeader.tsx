import { Link, useNavigate } from '@tanstack/react-router';
import { clearStoredUserId } from '@apis/core';
import { Header } from '@ui/header/Header';

export function AppHeader() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    clearStoredUserId();
    await navigate({ to: '/signin' });
  };

  return (
    <Header>
      <Header.Brand title='SOPT MEMBERS' description='안녕하세요, 웨비들이라면 하비!' />
      <Header.Nav>
        <Header.Link asChild>
          <Link to='/users/my'>내 정보</Link>
        </Header.Link>
        <Header.Link asChild>
          <Link to='/users'>회원 조회</Link>
        </Header.Link>
        <Header.Button type='button' onClick={handleLogout}>
          로그아웃
        </Header.Button>
      </Header.Nav>
    </Header>
  );
}
