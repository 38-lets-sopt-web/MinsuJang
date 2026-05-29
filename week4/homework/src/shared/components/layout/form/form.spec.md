# Form

## 목적

폼 화면의 구조를 일관되게 구성하기 위한 layout 컴포넌트이다.
React Hook Form 자체를 감싸는 상태 관리 컴포넌트가 아니라, 제목, 필드 그룹, 액션 영역을 배치하는 UI layout primitive이다.

## 공개 API

```tsx
<Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Header title='로그인' />
  <Form.Body>
    <Input label='아이디' {...register('loginId')} />
    <Input label='비밀번호' type='password' {...register('password')} />
  </Form.Body>
  <Form.Actions>
    <Button type='submit'>로그인</Button>
  </Form.Actions>
</Form>
```

## 하위 API

### Form

- 기본 `form` element를 렌더링한다.
- `onSubmit`, `className`, `id`, `aria-*` 등 form attribute를 전달할 수 있어야 한다.
- children을 세로 흐름으로 배치한다.

### Form.Header

- 폼 제목과 설명을 렌더링한다.
- props:
  - `title: string`
  - `description?: string`

### Form.Body

- 입력 필드들을 세로로 배치한다.
- children을 받는다.

### Form.Actions

- 제출, 다음, 취소 같은 액션 버튼을 배치한다.
- 기본은 세로 또는 full-width 버튼 흐름을 지원한다.
- 필요 시 가로 정렬을 확장할 수 있어야 한다.

## 동작

- React Hook Form의 `handleSubmit` 결과를 `onSubmit`으로 전달해 사용할 수 있어야 한다.
- Form 컴포넌트는 validation 로직을 직접 알지 않는다.
- submit, reset 같은 HTML form 기본 동작을 막지 않는다.

## 스타일

- Form 내부 간격은 theme token을 사용한다.
- Header, Body, Actions 사이의 간격을 명확히 둔다.
- 좁은 화면에서도 버튼과 input이 부모 영역을 넘지 않아야 한다.

## 구현 기준

- compound component 형태를 사용한다.
- `Form.Header`, `Form.Body`, `Form.Actions`를 제공한다.
- route/page 전용 문구나 비즈니스 로직은 포함하지 않는다.
- `forwardRef`를 사용해 실제 form element ref를 전달한다.
