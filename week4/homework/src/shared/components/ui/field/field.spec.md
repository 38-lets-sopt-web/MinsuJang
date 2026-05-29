# Field

## 목적

폼 입력 컴포넌트가 공통으로 사용하는 label, control wrapper, helper text, error message 구조를 제공하는 UI primitive이다.
`Input`, `PasswordInput`, `Select`는 Field를 조합해 동일한 폼 필드 구조와 접근성 규칙을 공유한다.

## 공개 API

```tsx
<Field>
  <Field.Label htmlFor={inputId}>아이디</Field.Label>
  <Field.Control>
    <input id={inputId} aria-invalid={hasError} aria-describedby={messageId} />
  </Field.Control>
  <Field.Message id={messageId} helperText='영문과 숫자를 조합해주세요.' errorMessage={errorMessage} />
</Field>
```

## 하위 API

### Field

- 필드 전체 wrapper를 렌더링한다.
- children을 세로로 배치한다.
- `className`을 전달하면 기본 root class와 병합한다.
- 입력 종류(input, select, password)에 대한 도메인 지식을 갖지 않는다.

### Field.Label

- `label` 요소를 렌더링한다.
- `htmlFor`를 통해 실제 control과 연결할 수 있어야 한다.
- 기본 `label` attribute를 전달할 수 있어야 한다.

### Field.Control

- input, select 등 실제 입력 control을 감싸는 wrapper이다.
- control 주변에 아이콘이나 버튼이 필요한 경우 wrapper 기준으로 배치할 수 있어야 한다.
- 기본적으로 children만 렌더링하며 입력 상태를 직접 제어하지 않는다.

### Field.Message

- helper text 또는 error message를 렌더링한다.
- props:
  - `helperText?: string`
  - `errorMessage?: string`
  - `id?: string`
- `errorMessage`가 있으면 helper text보다 우선 표시한다.
- `helperText`와 `errorMessage`가 모두 없어도 message 영역의 높이는 유지한다.
- message 영역을 유지해 validation message 표시 여부에 따른 input layout shift를 방지한다.
- error message가 표시될 때는 error 스타일을 적용한다.

## 접근성

- control을 구현하는 컴포넌트는 `Field.Label`의 `htmlFor`와 control의 `id`를 연결한다.
- helper/error 메시지가 있으면 control에 `aria-describedby`를 연결한다.
- error 상태에서는 control에 `aria-invalid=true`를 설정한다.
- Field는 접근성 id를 직접 생성하지 않는다. id 생성은 `Input`, `PasswordInput`, `Select` 같은 control 컴포넌트에서 담당한다.

## 스타일

- root는 label, control, message를 세로로 배치한다.
- label과 control 사이, control과 message 사이의 간격은 theme token을 사용한다.
- label은 읽기 쉬운 굵기와 크기를 가진다.
- helper text는 보조 색상을 사용한다.
- error message는 danger color를 사용한다.
- message는 최소 한 줄 높이를 확보한다.
- Field는 control 자체의 border, height, padding을 정의하지 않는다. control 스타일은 각 입력 컴포넌트가 담당한다.

## 구현 기준

- compound component 형태를 사용한다.
- `Field.Label`, `Field.Control`, `Field.Message`를 제공한다.
- React Hook Form이나 Zod에 직접 의존하지 않는다.
- 비즈니스 문구나 도메인 옵션을 포함하지 않는다.
- `Input`, `PasswordInput`, `Select`의 공통 layout/accessibility 중복을 줄이는 용도로만 사용한다.
