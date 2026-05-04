# UsersPage

## Route

`/users`

## 목적

최근 가입한 유저 목록을 보여주고, 회원 ID로 특정 유저의 상세 정보를 조회한다.

## 과제 요구사항

- 회원 리스트를 화면에 표시한다.
- 회원 ID 입력 Input을 제공한다.
- 조회 버튼을 제공한다.
- 조회 성공 시 상세 정보를 출력한다.
- Input이 비어 있으면 조회 버튼을 비활성화한다.

## 화면 구성

```txt
UsersPage
  PageTitle
  UserSearchForm
    userId Input
    search Button
  UserSearchResult
    empty state 또는 InfoCard
  UserListSection
    UserCard[]
```

## Route-local Components

### UsersPage

- `/users` route의 page entry 컴포넌트이다.
- users 공통 레이아웃 하위 페이지이므로 `AppHeader`가 함께 표시된다.
- `UserSearchSection`과 `UserListSection`을 렌더링한다.

### UserSearchSection

- 회원 ID 입력값을 관리한다.
- 입력값이 비어 있으면 조회 버튼을 비활성화한다.
- 조회 버튼 클릭 시 검색 대상 `userId`를 확정한다.
- 확정된 `userId`가 있으면 `useUserDetailQuery(userId)`로 상세 정보를 조회한다.
- 검색 전에는 안내 문구를 표시한다.
- 검색 성공 시 상세 정보 카드를 표시한다.

### InfoCard

- 유저 상세 정보를 읽기 전용으로 표시한다.
- 표시 필드: 아이디, 이름, 이메일, 나이, 파트
- `shared/components/ui`의 공통 컴포넌트를 사용한다.

### UserListSection

- `useUserListQuery()`로 최근 가입한 유저 목록을 조회한다.
- 목록을 카드 grid로 렌더링한다.
- 각 카드는 이름과 파트를 표시한다.
- 카드 클릭 시 `/users/$userId` 상세 페이지로 이동한다.

## Hook

### useUserSearch

- 검색 input state를 관리한다.
- 숫자만 입력 가능하게 정규화한다.
- 조회 버튼 disabled 상태를 계산한다.
- submit 시 검색 대상 `userId`를 확정한다.

## Error Handling

- 회원 검색 실패는 검색 결과 영역에서 fallback으로 처리한다.
- 회원 목록 조회 실패는 목록 영역에서 fallback으로 처리한다.
- API 에러 메시지는 boundary fallback을 통해 표시한다.

## Styling

- 페이지 배경은 global theme의 page background를 따른다.
- 상단 검색 영역은 중앙 정렬하고 최대 너비를 제한한다.
- 검색 결과 카드는 label/value 2열 정보 형태로 표시한다.
- 전체 멤버 리스트는 grid로 표시한다.
- 카드 클릭 가능 영역은 hover/focus-visible 상태를 제공한다.
