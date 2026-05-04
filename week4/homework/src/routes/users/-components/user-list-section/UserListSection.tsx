import { Link } from '@tanstack/react-router';
import { AsyncBoundary } from '@shared/components/boundary';
import { useUserListQuery } from '@shared/queries';
import { List } from '@layout';
import { Card } from '@ui';
import * as S from './UserListSection.css';

const UserListContent = () => {
  const { data } = useUserListQuery();

  return (
    <List as='ul' layout='grid' gap='xl' minItemWidth='13rem'>
      {data.users.map((user) => (
        <li key={user.id}>
          <Link className={S.cardLink} to='/users/$userId' params={{ userId: String(user.id) }}>
            <Card variant='interactive'>
              <Card.Title>{user.name}</Card.Title>
              <Card.Badge>{user.part}</Card.Badge>
            </Card>
          </Link>
        </li>
      ))}
    </List>
  );
};

export const UserListSection = () => {
  return (
    <section className={S.root}>
      <h2 className={S.title}>전체 멤버 리스트</h2>
      <AsyncBoundary>
        <UserListContent />
      </AsyncBoundary>
    </section>
  );
};
