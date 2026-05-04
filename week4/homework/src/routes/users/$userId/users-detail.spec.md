# UsersDetailPage

## Route

`/users/$userId`

## 목적

전체 멤버 리스트에서 선택한 회원의 상세 정보를 조회하고 표시한다.

## 과제 요구사항

- 전체 멤버 리스트 카드 클릭 시 상세 정보 페이지로 이동한다.
- 뒤로가기 클릭 시 다시 회원 조회 페이지로 이동한다.

## 화면 구성

```txt
UsersDetailPage
  PageTitle
  BackLink
  InfoCard
```

## Route-local Components

### UsersDetailPage

- route param의 `userId`를 숫자로 변환한다.
- `useUserDetailQuery(userId)`로 회원 상세 정보를 조회한다.
- `InfoCard`로 이름, 아이디, 이메일, 나이, 파트를 표시한다.
- 뒤로가기 링크를 제공한다.

## Navigation

- 뒤로가기는 TanStack Router `Link`를 사용한다.
- 목적지는 `/users`이다.

## Error Handling

- 상세 조회 실패는 boundary fallback으로 처리한다.
- `/users` route guard가 상위에서 로그인 여부를 보장한다.

## Styling

- 페이지 배경은 global theme의 page background를 따른다.
- 컨텐츠는 중앙 정렬한다.
- 카드 최대 너비는 회원 조회 검색 결과 카드와 유사하게 제한한다.

