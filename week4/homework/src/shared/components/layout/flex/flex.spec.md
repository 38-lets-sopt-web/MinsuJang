# Flex

## 목적

children을 flexbox로 배치하는 가장 기본적인 layout primitive이다.
버튼 그룹, 헤더 내부 정렬, 입력과 액션의 가로 배치처럼 방향과 정렬만 필요한 경우 사용한다.

## 공개 API

```tsx
<Flex direction='row' align='center' justify='between' gap='md'>
  <Button>취소</Button>
  <Button variant='primary'>확인</Button>
</Flex>
```

## Props

`Flex`는 기본 `div` attribute를 받을 수 있어야 한다.

추가 props:

- `direction?: 'row' | 'column'`
  - flex 방향을 결정한다.
  - 기본값은 `row`이다.
- `align?: 'start' | 'center' | 'end' | 'stretch'`
  - 교차축 정렬을 결정한다.
  - 기본값은 `stretch`이다.
- `justify?: 'start' | 'center' | 'end' | 'between'`
  - 주축 정렬을 결정한다.
  - 기본값은 `start`이다.
- `gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'`
  - children 사이 간격을 결정한다.
  - 기본값은 `none`이다.
- `wrap?: boolean`
  - true이면 children 줄바꿈을 허용한다.
  - 기본값은 false이다.
- `fullWidth?: boolean`
  - true이면 부모 너비를 모두 사용한다.
  - 기본값은 false이다.

## 동작

- children 배치만 담당한다.
- children의 의미나 상태를 알지 않는다.
- 페이지 전용 spacing, route 전용 로직을 포함하지 않는다.

## 스타일

- flex 관련 속성만 최소한으로 제공한다.
- gap은 theme token을 사용한다.
- `justify='between'`은 `space-between`으로 매핑한다.
- `align='start' | 'end'`는 `flex-start` | `flex-end`로 매핑한다.

## 구현 기준

- `forwardRef`를 사용해 실제 div element ref를 전달한다.
- variant 조합은 vanilla-extract recipe 사용을 우선한다.
- 세로 배치만 필요한 경우에는 가독성을 위해 `Column` 사용을 우선한다.
