# Select

## 목적

선택형 입력을 위한 select 컴포넌트이다.
파트 선택처럼 정해진 옵션 중 하나를 고르는 폼에서 사용한다.
기본 Input과 동일한 label, helper text, error message 구조를 따른다.

## 공개 API

```tsx
<Select label='파트' errorMessage={errors.part?.message} {...register('part')}>
  <option value=''>파트를 선택해주세요</option>
  <option value='WEB'>웹</option>
  <option value='IOS'>iOS</option>
  <option value='ANDROID'>안드로이드</option>
</Select>
```

## Props

`Select`는 기본 `select` attribute를 모두 받을 수 있어야 한다.

추가 props:

- `label?: string`
  - select 위에 표시할 라벨이다.
  - 없으면 라벨 영역을 렌더링하지 않는다.
- `helperText?: string`
  - 선택 보조 설명이다.
  - error가 없을 때만 표시한다.
- `errorMessage?: string`
  - 검증 실패 메시지이다.
  - 값이 있으면 error 상태로 렌더링한다.
- `fullWidth?: boolean`
  - true이면 부모 너비를 모두 사용한다.
  - 기본값은 true로 둔다.

## 동작

- children 기반으로 `option`을 전달한다.
- options 배열 prop은 기본 API로 제공하지 않는다.
- `errorMessage`가 있으면 `aria-invalid=true`를 설정한다.
- `errorMessage`가 있으면 helper text보다 error message를 우선 표시한다.
- React Hook Form의 `register` 반환값을 그대로 spread할 수 있어야 한다.
- `disabled` 상태에서는 선택할 수 없어야 하며 시각적으로 비활성 상태를 표현한다.

## 스타일

- 라벨, select, 메시지를 세로로 배치한다.
- 높이와 radius는 `Input`과 같은 기준을 따른다.
- 기본 브라우저 select의 화살표가 보이도록 하거나, 별도 아이콘을 사용할 경우 접근성을 해치지 않는다.
- error 상태에서는 danger color를 사용한다.
- focus 상태는 명확하게 보여야 한다.

## 구현 기준

- `forwardRef`를 사용해 실제 select element ref를 전달한다.
- 제어 컴포넌트로 강제하지 않는다.
- 외부에서 `value`, `defaultValue`, `onChange`, `ref`를 전달할 수 있어야 한다.
- Select는 옵션 렌더링만 담당하고, 파트 목록 같은 도메인 값은 사용하는 쪽에서 전달한다.
