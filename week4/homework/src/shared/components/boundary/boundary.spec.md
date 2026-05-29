# Boundary

## 목적

Suspense와 ErrorBoundary를 조합해 로딩과 에러 UI를 선언적으로 처리한다.
페이지 컴포넌트는 데이터가 이미 준비되어 있음을 전제로 렌더링하고, 로딩/에러 표현은 Boundary가 담당한다.

## 구성

- [async/async-boundary.spec.md](async/async-boundary.spec.md)
- [global/global-boundary.spec.md](global/global-boundary.spec.md)
- [fallback/boundary-fallback.spec.md](fallback/boundary-fallback.spec.md)

## 공통 원칙

- Boundary는 데이터를 직접 fetch하지 않는다.
- 로딩 UI는 Suspense fallback으로 처리한다.
- 에러 UI는 ErrorBoundary fallback으로 처리한다.
- 화면별 skeleton이나 에러 UI가 필요하면 props로 주입한다.
- `react-error-boundary` v6의 error 타입이 `unknown`이므로 fallback도 `unknown`을 받아 처리한다.
