# SignInPage

## Route

`/signin`

## 목적

아이디와 비밀번호로 로그인한다.
로그인 성공 시 서버가 반환한 `userId`를 저장하고 내 정보 페이지로 이동한다.

## 과제 요구사항

- 로그인 타이틀을 표시한다.
- 아이디 입력 Input을 제공한다.
- 비밀번호 입력 Input을 제공한다.
- 회원가입 페이지로 이동 가능한 버튼 또는 링크를 제공한다.
- 로그인 버튼은 hover 시 배경색이 변경되어야 한다.
- 로그인 성공 시 마이페이지로 이동하고 `userId`를 저장한다.
- 아이디/비밀번호 둘 중 하나라도 미입력 시 로그인 버튼을 비활성화한다.
- 비밀번호 가시 여부 변경 버튼을 제공한다.
- 로그인 실패 시 실패 상태를 표시한다. UI 형식은 자유이다.

## 화면 구성

```txt
SignInPage
  SignInForm
    Form.Header
    Input(loginId)
    PasswordInput(password)
    Button(submit)
    Link(to='/signup')
```

## Route-local Components

### SignInPage

- `/signin` route의 page entry 컴포넌트이다.
- users 공통 레이아웃을 사용하지 않는다.
- 화면 중앙에 로그인 폼을 배치한다.
- 비즈니스 로직은 `SignInForm`에 위임한다.

### SignInForm

- 로그인 폼 UI와 제출 동작을 담당한다.
- `react-hook-form`으로 입력 상태를 관리한다.
- `zod` schema로 필수 입력을 검증한다.
- `useLoginMutation`을 사용해 로그인 API를 호출한다.
- 로그인 성공 후 `/users/my`로 이동한다.
- 로그인 실패 시 서버 에러 메시지 또는 기본 실패 메시지를 표시한다.

## 사용 Shared Components

- `Form`
- `Input`
- `PasswordInput`
- `Button`

## 사용 Hook

- `useLoginMutation`

## Form Fields

### loginId

- label: `아이디`
- placeholder: `아이디를 입력해주세요.`
- 비어 있으면 로그인 버튼이 비활성화된다.

### password

- label: `비밀번호`
- placeholder: `비밀번호를 입력해주세요.`
- `PasswordInput`을 사용해 가시 여부 변경 버튼을 제공한다.
- 비어 있으면 로그인 버튼이 비활성화된다.

## Validation

- `loginId`는 1글자 이상이어야 한다.
- `password`는 1글자 이상이어야 한다.
- 두 필드 중 하나라도 비어 있으면 submit 버튼을 비활성화한다.
- 제출 시점에도 동일한 validation을 적용한다.

## Submit Flow

1. 사용자가 아이디와 비밀번호를 입력한다.
2. 두 입력값이 모두 존재하면 로그인 버튼이 활성화된다.
3. 로그인 버튼을 누르면 `useLoginMutation`으로 로그인 API를 호출한다.
4. 로그인 성공 시 `useLoginMutation`이 `userId`를 저장한다.
5. 페이지는 `/users/my`로 이동한다.
6. 로그인 실패 시 실패 메시지를 표시한다.

## Navigation

- 회원가입 이동은 TanStack Router `Link`를 사용한다.
- 목적지는 `/signup`이다.
- 로그인 성공 후 이동 목적지는 `/users/my`이다.

## Error Handling

- `ApiError`이면 서버의 `message`를 우선 표시한다.
- 그 외 에러는 기본 문구 `로그인에 실패했습니다.`를 표시한다.
- 실패 메시지는 form 내부에 표시한다.
- 실패 후 사용자는 입력값을 수정하고 다시 제출할 수 있어야 한다.

## Styling

- 페이지 배경은 global theme의 page background를 따른다.
- 폼은 화면 중앙에 배치한다.
- 폼 최대 너비는 입력창이 과하게 넓어지지 않도록 제한한다.
- 로그인 버튼은 `Button`의 hover 스타일을 사용한다.
- 회원가입 이동 링크는 로그인 버튼 아래에 배치한다.

## 구현 기준

- `-SignInPage.tsx`는 page layout만 담당한다.
- `-components/SignInForm.tsx`에 form 로직과 UI를 둔다.
- 페이지 전용 스타일은 signin route 하위에 colocate한다.
- userId 저장 로직은 `useLoginMutation`에 위임한다.
- navigate와 실패 메시지 표시는 page/form 책임으로 둔다.
