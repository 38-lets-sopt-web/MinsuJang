# InfoCard

## 목적

label/value 형태의 읽기 전용 정보를 카드 형태로 표시한다.
회원 검색 결과, 회원 상세 정보, 내 정보 요약처럼 도메인 정보 요약에 재사용한다.

## 사용 예시

```tsx
<InfoCard
  items={[
    { label: '이름', value: user.name },
    { label: '아이디', value: user.loginId },
  ]}
/>
```

## Props

### items

- 필수
- `{ label: string; value: ReactNode }[]`
- 전달된 순서대로 렌더링한다.

### className

- 선택
- route-local layout 조정을 위해 root className을 받을 수 있다.

## 렌더링

- root는 `dl`로 렌더링한다.
- label은 `dt`, value는 `dd`로 렌더링한다.
- label/value는 2열 grid로 배치한다.
- value가 길면 줄바꿈되어 카드 밖으로 넘치지 않아야 한다.

## 스타일

- 카드 배경, radius, shadow는 theme token을 사용한다.
- label은 강조된 텍스트로 표시한다.
- value는 보조 텍스트 색상으로 오른쪽 정렬한다.

