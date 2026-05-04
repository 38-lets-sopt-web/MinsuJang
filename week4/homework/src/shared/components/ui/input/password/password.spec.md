# PasswordInput

## 목적

비밀번호 입력을 위한 input 컴포넌트이다.
기본 Input의 label, helper text, error message 구조를 따르되, 비밀번호 표시/숨김 토글 버튼을 제공한다.

## 공개 API

```tsx
<PasswordInput
  label='비밀번호'
  placeholder='비밀번호를 입력해주세요'
  errorMessage={errors.password?.message}
  {...register('password')}
/>
```

## Props

`PasswordInput`은 기본 `input` attribute를 받을 수 있어야 한다.
단, `type`은 컴포넌트 내부에서 `password` 또는 `text`로 제어하므로 외부에서 직접 지정하지 않는다.

추가 props는 `Input`과 동일한 기준을 따른다.

- `label?: string`
- `helperText?: string`
- `errorMessage?: string`
- `fullWidth?: boolean`

추가 확장 props:

- `showPasswordLabel?: string`
  - 비밀번호 보기 버튼의 접근성 label이다.
  - 기본값은 `비밀번호 보기`이다.
- `hidePasswordLabel?: string`
  - 비밀번호 숨기기 버튼의 접근성 label이다.
  - 기본값은 `비밀번호 숨기기`이다.

## 동작

- 초기 type은 `password`이다.
- 토글 버튼을 누르면 type이 `text`와 `password` 사이에서 전환된다.
- 토글 버튼은 form submit을 발생시키지 않도록 `type='button'`이어야 한다.
- 현재 표시 상태에 맞게 토글 버튼의 `aria-label`을 변경한다.
- `errorMessage`가 있으면 `aria-invalid=true`를 설정한다.
- React Hook Form의 `register` 반환값을 그대로 spread할 수 있어야 한다.
- `disabled` 상태에서는 input과 토글 버튼 모두 비활성화한다.

## 스타일

- 기본 입력 영역은 `Input`과 동일한 시각 체계를 따른다.
- 토글 버튼은 input 오른쪽 내부에 배치한다.
- 아이콘은 눈/눈 감김 형태를 사용한다.
- 토글 버튼이 텍스트 입력을 가리지 않도록 input 오른쪽 padding을 확보한다.
- error, focus, disabled 상태는 `Input`과 같은 기준을 따른다.

## 구현 기준

- `forwardRef`를 사용해 실제 input element ref를 전달한다.
- 내부적으로 표시 상태를 `useState`로 관리한다.
- PasswordInput은 비밀번호 표시/숨김 책임만 가진다.
- 비밀번호 검증 정책은 PasswordInput이 아니라 form schema에서 처리한다.
