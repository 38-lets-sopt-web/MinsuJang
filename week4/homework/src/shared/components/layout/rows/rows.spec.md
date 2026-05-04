# Rows

## 목적

페이지나 섹션 안에서 여러 block을 세로로 쌓는 layout primitive이다.
`Column`보다 큰 단위의 row 흐름을 표현할 때 사용한다.

## 공개 API

```tsx
<Rows gap='xl'>
  <Section>...</Section>
  <Section>...</Section>
</Rows>
```

## Props

`Rows`는 기본 `div` attribute를 받을 수 있어야 한다.

추가 props:

- `gap?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`
  - row 사이 간격을 결정한다.
  - 기본값은 `xl`이다.
- `fullWidth?: boolean`
  - true이면 부모 너비를 모두 사용한다.
  - 기본값은 true이다.

## 동작

- children을 큰 단위의 row로 세로 배치한다.
- 폼 필드처럼 작은 단위의 세로 배치는 `Column`을 우선한다.
- 페이지 전용 padding이나 max-width는 강제하지 않는다.

## 스타일

- `display: flex`, `flex-direction: column`을 사용한다.
- gap은 theme token을 사용한다.
- 각 row의 내부 스타일은 children이 담당한다.

## 구현 기준

- `forwardRef`를 사용해 실제 div element ref를 전달한다.
- `Column`과 역할이 겹치지 않도록 더 큰 block 흐름에만 사용한다.
