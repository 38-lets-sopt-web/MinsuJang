# Input

## 목적

텍스트 입력을 위한 기본 input 컴포넌트이다.
로그인, 회원가입, 내 정보 수정 같은 폼에서 공통으로 사용하며, label, helper text, error message를 함께 표현할 수 있어야 한다.

## 공개 API

```tsx
<Input
  label='아이디'
  placeholder='아이디를 입력해주세요'
  errorMessage={errors.loginId?.message}
  {...register('loginId')}
/>
```

## Props

`Input`은 기본 `input` attribute를 모두 받을 수 있어야 한다.

추가 props:

- `label?: string`
  - input 위에 표시할 라벨이다.
  - 없으면 라벨 영역을 렌더링하지 않는다.
- `helperText?: string`
  - 입력 보조 설명이다.
  - error가 없을 때만 표시한다.
- `errorMessage?: string`
  - 검증 실패 메시지이다.
  - 값이 있으면 error 상태로 렌더링한다.
- `fullWidth?: boolean`
  - true이면 부모 너비를 모두 사용한다.
  - 기본값은 true로 둔다.

## 동작

- `errorMessage`가 있으면 `aria-invalid=true`를 설정한다.
- `errorMessage`가 있으면 helper text보다 error message를 우선 표시한다.
- React Hook Form의 `register` 반환값을 그대로 spread할 수 있어야 한다.
- `disabled` 상태에서는 입력과 포커스가 불가능해야 하며 시각적으로 비활성 상태를 표현한다.
- `type` 기본값은 `text`이다.

## 스타일

- 라벨, 입력창, 메시지를 세로로 배치한다.
- 입력창 높이는 버튼과 동일한 기준으로 맞춘다.
- border, radius, color는 theme token을 사용한다.
- error 상태에서는 danger color를 사용한다.
- focus 상태는 명확하게 보여야 한다.

## 구현 기준

- 제어 컴포넌트로 강제하지 않는다.
- 외부에서 `value`, `defaultValue`, `onChange`, `ref`를 전달할 수 있어야 한다.
- `forwardRef`를 사용해 실제 input element ref를 전달한다.
