# Header

## 목적

상단 앱 헤더의 레이아웃과 기본 스타일을 제공하는 compound component이다.
브랜드 영역과 네비게이션 영역을 조합해 사용할 수 있어야 하며, 실제 링크 경로와 로그아웃 같은 앱 동작은 사용하는 쪽에서 결정한다.

## 공개 API

```tsx
<Header>
  <Header.Brand title='SOPT MEMBERS' description='안녕하세요, 웨비들이라면 하비!' />
  <Header.Nav>
    <Header.Link asChild>
      <Link to='/users/my'>내 정보</Link>
    </Header.Link>
    <Header.Button type='button'>로그아웃</Header.Button>
  </Header.Nav>
</Header>
```

### Header

- `header` 요소를 렌더링한다.
- `children`을 내부 중앙 정렬 컨테이너 안에 배치한다.
- 기본 `header` attribute를 전달할 수 있다.
- `className`을 전달하면 기본 root class와 병합한다.

### Header.Brand

- 브랜드 타이틀과 보조 설명을 렌더링한다.
- `title`은 필수 문자열이다.
- `description`은 선택 문자열이다.
- `description`이 없으면 설명 요소를 렌더링하지 않는다.

### Header.Nav

- 네비게이션 영역을 렌더링한다.
- 자식 요소를 가로로 배치한다.

### Header.Link

- 기본적으로 `a` 요소를 렌더링한다.
- `asChild`를 전달하면 단일 자식 요소에 헤더 링크 스타일 class를 주입한다.
- TanStack Router의 `Link`와 조합할 수 있어야 한다.
- 전달받은 `className`은 기본 링크 class와 병합한다.

### Header.Button

- `button` 요소를 렌더링한다.
- 헤더 네비게이션 버튼 스타일을 적용한다.
- 기본 `button` attribute를 전달할 수 있다.
- 전달받은 `className`은 기본 버튼 class와 병합한다.

## 스타일

- 헤더는 전체 너비를 차지한다.
- 헤더 높이는 theme의 `vars.size.headerHeight`를 따른다.
- 배경색은 `vars.color.headerBg`를 사용한다.
- 텍스트는 `vars.color.headerText`와 `vars.color.headerSubText`를 사용한다.
- 내부 컨테이너는 `vars.size.pageWidth`를 최대 너비로 갖고 중앙 정렬한다.
- 브랜드 영역은 타이틀과 설명을 세로로 배치한다.
- 네비게이션 영역은 항목을 가로로 배치한다.

## 사용 기준

- Header는 UI primitive 성격이므로 라우팅 경로나 저장소 조작을 직접 알지 않는다.
- 앱 전용 헤더는 route-local 컴포넌트에서 Header를 조합해 만든다.
- Header compound API를 유지하기 위해 `Header.tsx`는 compound export를 사용한다.
