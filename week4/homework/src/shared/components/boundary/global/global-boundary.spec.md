# GlobalBoundary

## 목적

앱 또는 라우트 트리 전체를 감싸는 최상위 Boundary이다.
예상하지 못한 렌더링 에러나 하위 Boundary에서 위임된 에러를 처리한다.

## 공개 API

```tsx
<GlobalBoundary>
  <TanStackRouterProvider />
</GlobalBoundary>
```

## Props

- `children: ReactNode`
- `pendingFallback?: ReactNode`
  - 전역 Suspense fallback이다.
- `errorFallback?: (props: BoundaryFallbackProps) => ReactNode`
  - 전역 에러 fallback을 커스터마이즈한다.
- `onError?: (error: unknown, info: ErrorInfo) => void`
  - 에러 로깅 hook이다.

## 동작

- 로딩 중에는 `pendingFallback`을 보여준다.
- 렌더링 에러가 발생하면 error fallback을 보여준다.
- 재시도 버튼은 ErrorBoundary reset만 수행한다.
- TanStack Query reset은 직접 알지 않는다. query error reset은 `AsyncBoundary`가 담당한다.

## 스타일

- 기본 fallback은 사용자가 현재 화면을 회복할 수 있도록 다시 시도 버튼을 제공한다.
- 앱 전체 fallback이므로 중앙 정렬된 단순한 블록을 기본으로 한다.
- 상세한 라우팅 복구 버튼이 필요하면 `errorFallback`으로 주입한다.

## 구현 기준

- `react-error-boundary`를 사용한다.
- `GlobalBoundary`를 export한다.
- 서버 상태 조회 단위의 재시도 정책을 포함하지 않는다.
