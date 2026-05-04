# Column

## 목적

children을 세로 방향으로 배치하는 layout primitive이다.
폼 필드 묶음, 버튼 묶음, 카드 내부 콘텐츠처럼 단순한 수직 흐름을 표현할 때 사용한다.

## 공개 API

```tsx
<Column gap='md' align='stretch'>
  <Input label='아이디' />
  <PasswordInput label='비밀번호' />
</Column>
```

## Props

`Column`은 기본 `div` attribute를 받을 수 있어야 한다.

추가 props:

- `gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`
  - children 사이 간격을 결정한다.
  - 기본값은 `md`이다.
- `align?: 'start' | 'center' | 'end' | 'stretch'`
  - 교차축 정렬을 결정한다.
  - 기본값은 `stretch`이다.
- `fullWidth?: boolean`
  - true이면 부모 너비를 모두 사용한다.
  - 기본값은 true이다.

## 동작

- children을 받은 순서대로 세로 배치한다.
- spacing만 담당하고 비즈니스 로직을 갖지 않는다.
- 페이지 전용 margin이나 width 제한을 강제하지 않는다.

## 스타일

- `display: flex`, `flex-direction: column`을 사용한다.
- gap은 theme token을 사용한다.
- layout shifting을 만들지 않도록 children 크기를 임의로 바꾸지 않는다.

## 구현 기준

- `forwardRef`를 사용해 실제 div element ref를 전달한다.
- 단순한 수직 배치가 필요할 때 사용한다.
- 복잡한 page section 구조는 `Section`이 담당한다.
