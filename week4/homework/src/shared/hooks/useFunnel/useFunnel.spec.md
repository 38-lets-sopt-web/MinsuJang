# useFunnel

## 목적

순차적인 단계 흐름을 제어하는 shared hook이다.
회원가입처럼 한 URL 안에서 여러 step을 이동하며 입력값을 누적하는 퍼널 UI에 사용한다.

## 공개 API

```ts
const funnel = useFunnel(['loginId', 'password', 'profile'] as const);

funnel.currentStep; // 'loginId'
funnel.currentIndex; // 0
funnel.isFirstStep; // true
funnel.isLastStep; // false

funnel.goNext();
funnel.goPrev();
funnel.goTo('profile');
funnel.reset();
```

초기 step을 지정할 수 있다.

```ts
const funnel = useFunnel(['loginId', 'password', 'profile'] as const, {
  initialStep: 'password',
});
```

## Props

### steps

- `readonly Step[]`
- step 이름 목록이다.
- 최소 1개 이상의 step이 있어야 한다.
- `as const`로 전달하면 `currentStep`, `goTo`가 union literal 타입으로 추론되어야 한다.

### options

- `initialStep?: Step`
  - 초기 step이다.
  - 기본값은 첫 번째 step이다.
- `onStepChange?: (nextStep: Step, previousStep: Step) => void`
  - step이 변경될 때 호출한다.
  - 같은 step으로 이동하는 경우에는 호출하지 않는다.

## Return

- `currentStep: Step`
  - 현재 step 이름이다.
- `currentIndex: number`
  - 현재 step index이다.
- `isFirstStep: boolean`
  - 첫 step 여부이다.
- `isLastStep: boolean`
  - 마지막 step 여부이다.
- `goNext: () => void`
  - 다음 step으로 이동한다.
- `goPrev: () => void`
  - 이전 step으로 이동한다.
- `goTo: (step: Step) => void`
  - 특정 step으로 이동한다.
- `reset: () => void`
  - initial step으로 되돌린다.

## 동작

- `goNext`는 마지막 step에서는 아무 동작도 하지 않는다.
- `goPrev`는 첫 step에서는 아무 동작도 하지 않는다.
- `goTo`는 steps에 포함된 step만 받을 수 있어야 한다.
- `reset`은 최초 initial step으로 이동한다.
- step 변경 시 `onStepChange`가 있으면 호출한다.
- hook은 URL query parameter를 직접 읽거나 쓰지 않는다.
- hook은 form state를 직접 알지 않는다.

## 에러 처리

- `steps`가 빈 배열이면 개발자가 잘못 사용한 것이므로 Error를 throw한다.
- `initialStep`이 steps에 없으면 Error를 throw한다.

## 구현 기준

- React state 기반으로 구현한다.
- generic tuple/literal 타입 추론을 유지한다.
- route 전용 step 이름이나 회원가입 도메인 로직을 포함하지 않는다.
- 다른 route나 컴포넌트에서도 재사용 가능해야 한다.
- export는 `src/shared/hooks/index.ts`에서 제공한다.
