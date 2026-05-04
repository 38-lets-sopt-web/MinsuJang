# Button

## 목적

앱 전반에서 사용하는 기본 버튼 컴포넌트이다.
폼 제출, 페이지 이동, 조회, 수정 같은 주요 액션을 일관된 스타일과 상태로 표현한다.

## 공개 API

```tsx
<Button type='submit' variant='primary' disabled={!isValid}>
  로그인
</Button>
```

## Props

`Button`은 기본 `button` attribute를 모두 받을 수 있어야 한다.

추가 props:

- `variant?: 'primary' | 'neutral' | 'danger'`
  - 버튼의 시각적 의도를 나타낸다.
  - 기본값은 `primary`이다.
- `size?: 'md' | 'sm'`
  - 버튼 높이와 padding을 결정한다.
  - 기본값은 `md`이다.
- `fullWidth?: boolean`
  - true이면 부모 너비를 모두 사용한다.
  - 기본값은 false이다.
- `isLoading?: boolean`
  - true이면 버튼을 비활성화하고 loading text를 표시한다.
- `loadingText?: string`
  - loading 상태에서 표시할 텍스트이다.
  - 기본값은 기존 children을 유지하는 방향을 우선한다.

## 동작

- `type` 기본값은 `button`이다.
- `disabled` 또는 `isLoading`이면 클릭할 수 없어야 한다.
- `isLoading`일 때 `aria-busy=true`를 설정한다.
- children은 텍스트 또는 아이콘+텍스트 조합을 받을 수 있다.
- 폼 submit 버튼으로 사용할 수 있어야 한다.

## 스타일

- radius, height, padding, color는 theme token을 사용한다.
- hover 가능한 상태에서만 hover 스타일을 적용한다.
- disabled 상태는 opacity 또는 muted color로 명확히 구분한다.
- 버튼 내부 텍스트가 줄바꿈 없이 안정적으로 보이도록 정렬한다.

## 구현 기준

- `forwardRef`를 사용해 실제 button element ref를 전달한다.
- variant/size 조합은 vanilla-extract recipe 사용을 우선한다.
- 페이지 전용 버튼 스타일은 shared Button에 섞지 않고 className 확장으로 처리한다.
