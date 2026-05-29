# MyPage

## Route

`/users/my`

## 목적

저장된 `userId`로 로그인한 사용자의 정보를 조회하고, 이름/이메일/나이를 수정한다.
users 공통 레이아웃 하위 페이지이므로 `AppHeader`가 함께 표시된다.

## 과제 요구사항

- 아이디와 파트를 표시한다.
- 이름, 이메일, 나이 입력 Input을 제공한다.
- `정보 수정` 버튼 클릭 시 회원 정보를 업데이트한다.
- 저장 성공 시 alert를 표시한다.
- 저장 실패 시 alert를 표시한다.

## 화면 구성

```txt
MyPage
  PageTitle
  MyInfoSummary
    아이디 / loginId
    파트 / part
  MyInfoForm
    name Input
    email Input
    age Input
    submit Button
```

## Route-local Components

### MyPage

- `/users/my` route의 page entry 컴포넌트이다.
- `getStoredUserId()`로 저장된 `userId`를 확인한다.
- `userId`가 없으면 `/signin`으로 이동한다.
- `useUserDetailQuery(userId)`로 내 정보를 조회한다.
- 조회된 유저 정보를 `MyInfoSummary`, `MyInfoForm`에 전달한다.
- 비동기 조회는 상위 route boundary 또는 page 내부 boundary에서 처리한다.

### MyInfoSummary

- 조회된 유저의 `loginId`, `part`를 표시한다.
- 카드형 정보 영역으로 렌더링한다.
- 입력 가능한 form이 아니며 읽기 전용이다.

### MyInfoForm

- 조회된 유저의 `name`, `email`, `age`를 초기값으로 가진다.
- `name`, `email`, `age`를 수정할 수 있다.
- `age`는 form 내부에서 문자열로 입력받고 submit 시 number로 변환한다.
- 모든 필드가 유효할 때만 `정보 수정` 버튼을 활성화한다.
- submit 시 `useUpdateUserMutation(userId)`를 호출한다.
- 수정 성공 시 `alert('정보 수정에 성공했습니다.')`를 표시한다.
- 수정 실패 시 서버 메시지 또는 기본 실패 문구를 `alert`로 표시한다.

## Hook

### useMyInfoForm

- `react-hook-form` 초기화와 submit 로직을 담당한다.
- `zod` schema resolver를 사용한다.
- 성공/실패 alert 처리를 담당한다.
- 반환 구조는 다음과 같이 나눈다.

```ts
const { field, submission } = useMyInfoForm({ user });
```

### field

- `register`
- `errors`

### submission

- `isPending`
- `canSubmit`
- `submit`

## Schema

`-schemas/myInfoSchema.ts`

### name

- required

### email

- required
- email format

### age

- required
- 숫자 문자열만 허용
- submit 시 number로 변환

## 사용 Shared Components

- `Input`
- `Button`
- 필요 시 `Card`

## Error Handling

- 저장된 `userId`가 없으면 `/signin`으로 이동한다.
- 회원 조회 실패는 boundary로 전파한다.
- 회원 수정 실패는 `alert`로 표시한다.
- `ApiError`이면 서버 `message`를 우선 표시한다.
- 그 외 에러는 기본 문구 `정보 수정에 실패했습니다.`를 표시한다.

## Styling

- 페이지 배경은 global theme의 page background를 따른다.
- 컨텐츠는 중앙 정렬한다.
- 전체 폼 최대 너비는 로그인/회원가입 페이지와 유사하게 제한한다.
- summary 영역은 이미지 시안처럼 label/value 2열 정보 형태로 표시한다.
- field error message 표시 여부로 layout shift가 발생하지 않아야 한다.

