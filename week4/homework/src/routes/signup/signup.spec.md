# SignUpPage

## Route

`/signup`

## 목적

회원가입 정보를 3단계 퍼널로 입력받아 새 유저를 생성한다.
URL은 `/signup`으로 유지하고, 내부 step 상태만 변경한다.

## 과제 요구사항

- 회원가입 타이틀을 표시한다.
- 아이디 -> 비밀번호 -> 이름/이메일/나이/파트 흐름으로 진행한다.
- 각 단계에 `다음` 또는 `회원가입` 버튼이 존재한다.
- 각 단계에 로그인 페이지로 이동 가능한 버튼 또는 링크가 존재한다.
- 아이디 단계에서 Input이 비어 있으면 버튼을 비활성화한다.
- 비밀번호 단계에서 비밀번호/비밀번호 확인 중 하나라도 비어 있으면 버튼을 비활성화한다.
- 비밀번호 단계에서 두 비밀번호가 다르면 버튼을 비활성화한다.
- 추가 정보 단계에서 이름/이메일/나이/파트 중 하나라도 비어 있으면 버튼을 비활성화한다.
- 회원가입 성공 시 alert에 이름을 출력한 후 로그인 페이지로 이동한다.
- 회원가입 실패 시 alert 또는 실패 메시지를 표시한다.

## 도전 과제 반영

- 아이디가 50글자를 초과하면 에러 메시지를 표시하고 버튼을 비활성화한다.
- 비밀번호 보기/숨기기 토글 버튼을 제공한다.
- 비밀번호 불일치 에러 메시지를 표시한다.
- 비밀번호 정책을 만족하지 않으면 에러 메시지를 표시하고 버튼을 비활성화한다.
  - 길이 8~64자
  - 영어/숫자/특수문자 각각 1자 이상 포함
  - 공백 불허
- 이메일 형식이 올바르지 않으면 에러 메시지를 표시한다.
- 나이가 숫자가 아니면 에러 메시지를 표시한다.
- 파트는 드롭다운으로 구현한다.

## Funnel Steps

```ts
const SIGN_UP_STEPS = ['loginId', 'password', 'profile'] as const;
```

### loginId

- 아이디를 입력한다.
- 유효하면 `다음` 버튼으로 `password` step으로 이동한다.
- 로그인 페이지 이동 링크를 제공한다.

### password

- 비밀번호와 비밀번호 확인을 입력한다.
- 비밀번호 보기/숨기기 토글을 제공한다.
- 유효하면 `다음` 버튼으로 `profile` step으로 이동한다.
- 로그인 페이지 이동 링크를 제공한다.

### profile

- 이름, 이메일, 나이, 파트를 입력한다.
- 파트는 `Select`를 사용한다.
- 유효하면 `회원가입` 버튼으로 회원가입 API를 호출한다.
- 로그인 페이지 이동 링크를 제공한다.

## 화면 구성

```txt
SignUpPage
  SignUpFunnel
    Form.Header
    SignUpLoginIdStep
    SignUpPasswordStep
    SignUpProfileStep
    LoginLink
```

## Route-local Components

### SignUpPage

- `/signup` route의 page entry 컴포넌트이다.
- users 공통 레이아웃을 사용하지 않는다.
- 화면 중앙에 회원가입 퍼널을 배치한다.
- 비즈니스 로직은 `SignUpFunnel`에 위임한다.

### SignUpFunnel

- `useFunnel`로 현재 step을 관리한다.
- `react-hook-form`으로 전체 회원가입 입력값을 누적 관리한다.
- step별 validation을 통과했을 때만 다음 step으로 이동한다.
- 마지막 step에서 `useSignupMutation`을 호출한다.
- 회원가입 성공 시 `alert(name)` 후 `/signin`으로 이동한다.
- 회원가입 실패 시 서버 메시지 또는 기본 실패 메시지를 표시한다.

### SignUpLoginIdStep

- `loginId` field와 다음 버튼을 렌더링한다.
- 아이디가 비어 있거나 50글자를 초과하면 다음 버튼을 비활성화한다.

### SignUpPasswordStep

- `password`, `passwordConfirm` field와 다음 버튼을 렌더링한다.
- 두 입력 중 하나라도 비어 있으면 다음 버튼을 비활성화한다.
- 두 값이 다르면 다음 버튼을 비활성화하고 에러 메시지를 표시한다.
- 비밀번호 정책을 만족하지 않으면 다음 버튼을 비활성화한다.

### SignUpProfileStep

- `name`, `email`, `age`, `part` field와 회원가입 버튼을 렌더링한다.
- 모든 field가 유효할 때만 회원가입 버튼을 활성화한다.
- `age`는 form 내부에서는 문자열로 입력받고, submit 시 number로 변환한다.

## 사용 Shared Components

- `Form`
- `Input`
- `PasswordInput`
- `Select`
- `Button`

## 사용 Hook

- `useFunnel`
- `useSignupMutation`

## Form Fields

### loginId

- label: `아이디`
- placeholder: `아이디를 입력해주세요.`
- required
- max length: 50

### password

- label: `비밀번호`
- placeholder: `비밀번호를 입력해주세요.`
- required
- length: 8~64
- 영어/숫자/특수문자 각각 1자 이상 포함
- 공백 불허

### passwordConfirm

- label: `비밀번호 확인`
- placeholder: `비밀번호를 한 번 더 입력해주세요.`
- required
- `password`와 일치해야 한다.

### name

- label: `이름`
- placeholder: `이름을 입력해주세요.`
- required

### email

- label: `이메일`
- placeholder: `이메일을 입력해주세요.`
- required
- email format

### age

- label: `나이`
- placeholder: `나이를 입력해주세요.`
- required
- 숫자 문자열만 허용
- submit 시 number로 변환

### part

- label: `파트`
- required
- select options:
  - `웹`
  - `iOS`
  - `안드로이드`
- API에는 선택한 문자열 값을 그대로 전달한다.

## Submit Flow

1. 사용자가 아이디를 입력한다.
2. 아이디 validation 통과 시 다음 step으로 이동한다.
3. 사용자가 비밀번호와 비밀번호 확인을 입력한다.
4. 비밀번호 validation 통과 시 추가 정보 step으로 이동한다.
5. 사용자가 이름, 이메일, 나이, 파트를 입력한다.
6. profile validation 통과 시 회원가입 API를 호출한다.
7. 성공 시 입력한 이름을 alert로 보여주고 `/signin`으로 이동한다.
8. 실패 시 실패 메시지를 표시한다.

## Navigation

- 로그인 이동은 TanStack Router `Link`를 사용한다.
- 목적지는 `/signin`이다.
- 회원가입 성공 후 이동 목적지는 `/signin`이다.

## Error Handling

- `ApiError`이면 서버의 `message`를 우선 표시한다.
- 그 외 에러는 기본 문구 `회원가입에 실패했습니다.`를 표시한다.
- 실패 메시지는 form 내부에 표시한다.
- 실패 후 사용자는 입력값을 수정하고 다시 제출할 수 있어야 한다.

## Styling

- 페이지 배경은 global theme의 page background를 따른다.
- 퍼널은 화면 중앙에 배치한다.
- 폼 최대 너비는 로그인 페이지와 유사하게 제한한다.
- step이 변경되어도 전체 폼 폭이 흔들리지 않아야 한다.
- field error message 표시 여부로 layout shift가 발생하지 않아야 한다.

## 구현 기준

- `-SignUpPage.tsx`는 page layout만 담당한다.
- `-components/funnel/SignUpFunnel.tsx`는 퍼널 조합과 step 렌더링만 담당한다.
- step별 UI는 `-components/steps` 하위의 `SignUpLoginIdStep`, `SignUpPasswordStep`, `SignUpProfileStep`으로 분리한다.
- 회원가입 form, step 이동, submit 로직은 `-hooks/useSignUpFunnel.ts`에 둔다.
- schema는 `-schemas/signUpSchema.ts`에 둔다.
- route-local 상수는 필요하면 `-constants`에 둔다.
- user 입력값은 step 이동 중 유지되어야 한다.
