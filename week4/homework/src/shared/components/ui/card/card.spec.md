# Card

## 목적

콘텐츠를 하나의 선택 가능한 단위로 보여주는 카드 컴포넌트이다.
회원 목록의 사용자 카드처럼 `title`과 작은 `badge`를 같은 구성으로 배치할 때 사용한다.

## 공개 API

```tsx
<Card>
  <Card.Title>test</Card.Title>
  <Card.Badge>웹</Card.Badge>
</Card>
```

클릭 가능한 카드가 필요하면 기본 HTML attribute를 사용한다.

```tsx
<Card as='button' type='button' onClick={handleClick}>
  <Card.Title>홍길동</Card.Title>
  <Card.Badge>웹</Card.Badge>
</Card>
```

## 하위 API

### Card

- 카드 전체 wrapper를 렌더링한다.
- 기본 element는 `div`이다.
- `as?: 'div' | 'button' | 'a'`로 렌더링 element를 바꿀 수 있다.
- `className`을 전달하면 기본 root class와 병합한다.
- children을 세로로 배치하고 중앙 정렬한다.
- 회원, 파트 같은 도메인 지식을 갖지 않는다.

### Card.Title

- 카드의 핵심 텍스트를 렌더링한다.
- 기본 element는 `strong`이다.
- 긴 텍스트가 들어와도 카드 레이아웃을 깨지 않도록 줄바꿈과 overflow를 안정적으로 처리한다.

### Card.Badge

- 보조 정보를 pill 형태로 렌더링한다.
- 예: `웹`, `iOS`, `안드로이드`
- badge는 텍스트만 받는 것을 기본으로 하며, 도메인 옵션 검증은 담당하지 않는다.

## Props

`Card`는 선택한 element에 맞는 기본 HTML attribute를 받을 수 있어야 한다.

추가 props:

- `as?: 'div' | 'button' | 'a'`
  - 렌더링할 element를 결정한다.
  - 기본값은 `div`이다.
- `variant?: 'default' | 'interactive'`
  - 카드의 시각적 상태를 결정한다.
  - 기본값은 `default`이다.
  - `interactive`는 클릭 가능한 카드에 hover/focus 스타일을 제공한다.

## 동작

- `as='button'`일 때 `type` 기본값은 `button`이다.
- `as='button'`이고 disabled이면 클릭할 수 없어야 한다.
- `interactive` variant는 hover 가능한 상태에서만 hover 스타일을 적용한다.
- 카드가 라우트 이동에 쓰이면 사용하는 쪽에서 TanStack Router `Link`나 navigate 로직과 조합한다.

## 접근성

- 단순 정보 표시는 `div`로 렌더링한다.
- 클릭 가능한 액션이면 `button` 또는 `a`로 렌더링한다.
- 클릭 가능한 카드가 `div` + onClick 형태가 되지 않도록 한다.
- `Card.Badge`는 별도 의미가 필요한 경우 사용하는 쪽에서 `aria-label`을 제공할 수 있어야 한다.

## 스타일

- 카드 구성은 이미지 기준과 동일하게 `Title` 위, `Badge` 아래 구조를 유지한다.
- root는 흰색 계열 배경, radius, shadow, padding을 theme token으로 적용한다.
- title은 중앙 정렬, 굵은 글씨, 주요 텍스트 색상을 사용한다.
- badge는 pill 형태이며 카드 배경과 구분되는 muted 배경을 사용한다.
- 디자인 수치는 구현 과정에서 조정할 수 있지만 구성은 유지한다.

## 구현 기준

- compound component 형태를 사용한다.
- `Card.Title`, `Card.Badge`를 제공한다.
- 페이지 전용 데이터 매핑은 shared Card에 넣지 않는다.
- 회원 카드의 클릭 이동, userId, part 표기 변환은 route-local 컴포넌트에서 담당한다.
