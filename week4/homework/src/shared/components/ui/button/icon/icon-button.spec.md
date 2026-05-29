# IconButton

## 목적

아이콘만으로 액션을 표현하는 버튼 컴포넌트이다.
비밀번호 보기, 메뉴 열기, 닫기, 뒤로가기처럼 텍스트 라벨을 화면에 노출하지 않는 버튼에 사용한다.

## 공개 API

```tsx
<IconButton aria-label='비밀번호 보기' variant='neutral' size='md'>
  <EyeIcon />
</IconButton>
```

## Props

`IconButton`은 기본 `button` attribute를 받을 수 있어야 한다.

추가 props:

- `variant?: 'primary' | 'neutral' | 'danger' | 'ghost'`
  - 버튼의 시각적 의도를 나타낸다.
  - 기본값은 `neutral`이다.
- `size?: 'md' | 'sm'`
  - 버튼의 정사각형 크기를 결정한다.
  - 기본값은 `md`이다.
- `isLoading?: boolean`
  - true이면 버튼을 비활성화하고 `aria-busy=true`를 설정한다.

접근성 props:

- `aria-label` 또는 `aria-labelledby` 중 하나를 제공해야 한다.
- 아이콘 자체는 장식 요소로 취급하고, 실제 의미는 버튼의 접근성 이름으로 전달한다.

## 동작

- `type` 기본값은 `button`이다.
- `disabled` 또는 `isLoading`이면 클릭할 수 없어야 한다.
- children으로 아이콘 컴포넌트를 전달한다.
- 폼 내부에서 사용해도 기본 submit이 발생하지 않아야 한다.

## 스타일

- 버튼은 정사각형이다.
- 아이콘은 중앙 정렬한다.
- radius, size, color는 theme token을 사용한다.
- hover 가능한 상태에서만 hover 스타일을 적용한다.
- disabled 상태는 opacity 또는 muted color로 명확히 구분한다.

## 구현 기준

- `forwardRef`를 사용해 실제 button element ref를 전달한다.
- variant/size 조합은 vanilla-extract recipe 사용을 우선한다.
- 텍스트 버튼이 필요한 경우 `Button`을 사용하고, `IconButton`에 화면 표시용 텍스트를 넣지 않는다.
