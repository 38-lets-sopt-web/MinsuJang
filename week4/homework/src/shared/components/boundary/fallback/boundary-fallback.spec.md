# BoundaryFallback

## 목적

`AsyncBoundary`와 `GlobalBoundary`가 기본으로 사용하는 pending/error fallback UI를 제공한다.
화면별 fallback이 없을 때 최소한의 로딩/에러 상태를 보여준다.

## 공개 API

```tsx
<DefaultPendingFallback />
```

```tsx
<DefaultErrorFallback error={error} reset={resetErrorBoundary} />
```

## BoundaryFallbackProps

- `error: unknown`
- `reset: () => void`

fallback 구현체는 `reset`을 호출해 ErrorBoundary 상태를 초기화할 수 있어야 한다.

## DefaultPendingFallback Props

- `message?: string`
  - 기본값은 `불러오는 중입니다.`이다.

## DefaultErrorFallback Props

- `error: unknown`
- `reset: () => void`
- `title?: string`
  - 기본값은 `문제가 발생했습니다.`이다.
- `retryLabel?: ReactNode`
  - 기본값은 `다시 시도`이다.

## 동작

- `DefaultPendingFallback`은 `role='status'`와 `aria-live='polite'`를 사용한다.
- `DefaultErrorFallback`은 `role='alert'`를 사용한다.
- `ApiError`이면 서버 message를 우선 표시한다.
- `ApiError`가 아니면 기본 에러 문구를 표시한다.
- 재시도 버튼은 전달받은 `reset`을 호출한다.

## 스타일

- shared `Button`을 사용한다.
- fallback은 중앙 정렬된 간단한 블록으로 구성한다.
- 너무 큰 레이아웃 이동을 만들지 않도록 최소 높이만 제공한다.

## 구현 기준

- 데이터 fetch 로직을 포함하지 않는다.
- 라우팅 복구 로직을 포함하지 않는다.
- 화면별 상세 fallback은 Boundary의 `errorFallback`, `pendingFallback` props로 주입한다.
