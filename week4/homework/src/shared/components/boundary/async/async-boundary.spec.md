# AsyncBoundary

## 목적

서버 상태 조회 영역을 감싸는 Boundary이다.
TanStack Query의 `useSuspenseQuery` 또는 `throwOnError` 쿼리와 함께 사용해 로딩/에러 처리를 컴포넌트 바깥으로 분리한다.

## 공개 API

```tsx
<AsyncBoundary>
  <UserList />
</AsyncBoundary>
```

커스텀 fallback이 필요하면 props로 주입한다.

```tsx
<AsyncBoundary pendingFallback={<UserListSkeleton />}>
  <UserList />
</AsyncBoundary>
```

## Props

- `children: ReactNode`
- `pendingFallback?: ReactNode`
  - Suspense fallback이다.
  - 기본값은 가벼운 로딩 메시지 UI이다.
- `errorFallback?: (props: BoundaryFallbackProps) => ReactNode`
  - 에러 fallback을 커스터마이즈한다.
- `onError?: (error: unknown, info: ErrorInfo) => void`
  - 에러 로깅 hook이다.

## 동작

- `QueryErrorResetBoundary`를 사용해 재시도 시 query error 상태를 reset한다.
- 로딩 중에는 `pendingFallback`을 보여준다.
- 렌더링 또는 suspense query 에러가 발생하면 error fallback을 보여준다.
- 기본 재시도 버튼은 ErrorBoundary reset과 TanStack Query error reset을 함께 수행한다.
- 인증/라우팅 같은 전역 에러 처리는 직접 담당하지 않는다.

## 스타일

- 기본 fallback은 shared fallback 컴포넌트를 사용한다.
- 화면별 skeleton이 필요하면 `pendingFallback`으로 주입한다.
- 좁은 UI 일부를 감쌀 수 있으므로 과한 전역 레이아웃을 강제하지 않는다.

## 구현 기준

- `react-error-boundary`를 사용한다.
- TanStack Query v5 기준으로 `QueryErrorResetBoundary`를 사용한다.
- `AsyncBoundary`를 export한다.
- 데이터 fetch 로직을 포함하지 않는다.
