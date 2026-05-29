# Section

## 목적

페이지 안의 의미 있는 콘텐츠 영역을 구성하는 layout primitive이다.
제목, 설명, 본문을 가진 화면 단위를 일관된 간격으로 배치한다.

## 공개 API

```tsx
<Section>
  <Section.Header title='회원 조회' description='회원 ID로 상세 정보를 조회할 수 있어요.' />
  <Section.Body>
    <UserSearchBar />
  </Section.Body>
</Section>
```

## 하위 API

### Section

- 기본 `section` element를 렌더링한다.
- children을 세로 흐름으로 배치한다.
- `className`, `id`, `aria-*` 등 section attribute를 전달할 수 있어야 한다.

### Section.Header

- 섹션 제목과 설명을 렌더링한다.
- props:
  - `title: string`
  - `description?: string`

### Section.Body

- 섹션의 실제 콘텐츠를 렌더링한다.
- children을 받는다.

## 동작

- 제목/설명/본문 배치만 담당한다.
- route 전용 문구는 props로 전달받고 내부에 고정하지 않는다.
- 페이지 전체 max-width나 header 포함 여부를 알지 않는다.

## 스타일

- 내부 간격은 theme token을 사용한다.
- title은 주요 heading 스타일을 사용한다.
- description은 보조 텍스트 색상을 사용한다.
- section 자체는 카드처럼 보이지 않으며, 필요한 경우 children이 Card/Form 등을 사용한다.

## 구현 기준

- compound component 형태를 사용한다.
- `Section.Header`, `Section.Body`를 제공한다.
- `forwardRef`를 사용해 실제 section element ref를 전달한다.
