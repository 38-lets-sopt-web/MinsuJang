# List

## 목적

동일한 항목을 반복해서 보여주는 목록 layout primitive이다.
회원 카드 목록처럼 여러 item을 일정한 간격과 반응형 흐름으로 배치할 때 사용한다.

## 공개 API

```tsx
<List layout='grid' minItemWidth='12rem' gap='lg'>
  {users.map((user) => (
    <UserCard key={user.id} user={user} />
  ))}
</List>
```

## Props

`List`는 기본 `div` attribute를 받을 수 있어야 한다.

추가 props:

- `layout?: 'stack' | 'grid'`
  - 목록 배치 방식을 결정한다.
  - 기본값은 `stack`이다.
- `gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`
  - item 사이 간격을 결정한다.
  - 기본값은 `md`이다.
- `minItemWidth?: string`
  - `layout='grid'`일 때 각 item의 최소 너비를 결정한다.
  - 기본값은 `16rem`이다.
- `as?: 'div' | 'ul' | 'ol'`
  - 렌더링할 element를 결정한다.
  - 기본값은 `div`이다.

## 동작

- children을 목록 항목으로 배치한다.
- 데이터를 직접 map하지 않는다.
- empty state 문구나 loading state는 route-local 컴포넌트에서 처리한다.
- `as='ul' | 'ol'`을 사용할 경우 children은 사용하는 쪽에서 `li`로 구성한다.

## 스타일

- `stack`은 세로 배치한다.
- `grid`는 `repeat(auto-fit, minmax(minItemWidth, 1fr))` 흐름을 사용한다.
- gap은 theme token을 사용한다.
- 목록 자체에 페이지 margin을 강제하지 않는다.

## 구현 기준

- `forwardRef`를 사용한다.
- 회원 목록의 데이터 구조나 클릭 이동 로직을 포함하지 않는다.
- route-local `UserCard` 같은 항목 컴포넌트와 조합해 사용한다.
