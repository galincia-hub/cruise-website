# cruise-site-structure.md — 사이트 구조 매핑 문서
## Version 1.0 | 2026.04.07

> 기존 v2 설계의 콘텐츠 기획 + A&K UI 구조를 합친 실제 구현 지시서.
> Claude Code는 cruise-site Jekyll 템플릿 작업 시 이 문서와 cruise-design.md를 함께 참조한다.

---

## 1. 전체 사이트맵

```
cruise.co.kr/
├── index.html                    ← 홈페이지
├── cruiselines/
│   ├── regent.html               ← 선사 페이지 (템플릿)
│   ├── silversea.html
│   ├── crystal.html
│   ├── oceania.html
│   ├── ritzcarlton.html
│   └── fourseasons.html
├── voyages/
│   ├── index.html                ← 상품 검색 (Journey Finder)
│   └── {sailing_code}.html       ← 상품 상세
├── blog/
│   ├── index.html                ← 블로그 메인
│   └── {slug}.html               ← 개별 글
├── offers/
│   └── index.html                ← 프로모션/오퍼 목록
├── about.html                    ← 회사 소개
├── contact.html                  ← 문의 (Enquiry 허브)
└── deckplans/
    └── {ship_name}.html          ← 덱플랜 (선박별 공통, 새창 호출)
```

---

## 2. Jekyll 파일 구조

```
cruise-site/
├── _config.yml                   ← 사이트 설정 + image_base_url 변수
├── _layouts/
│   ├── default.html              ← 기본 레이아웃 (헤더/푸터/메타)
│   ├── cruiseline.html           ← 선사 페이지 레이아웃
│   ├── voyage.html               ← 상품 상세 레이아웃
│   ├── post.html                 ← 블로그 글 레이아웃
│   └── deckplan.html             ← 덱플랜 레이아웃 (새창용, 간소화)
├── _includes/
│   ├── header.html               ← 공통 헤더 + 네비게이션
│   ├── footer.html               ← 공통 푸터
│   ├── sticky-nav.html           ← 스티키 서브 네비게이션
│   ├── hero.html                 ← 히어로 섹션 (이미지DB 매칭)
│   ├── product-card.html         ← 상품 카드
│   ├── blog-card.html            ← 블로그 카드
│   ├── ship-card.html            ← 선박 카드 + 이미지 캐러셀
│   ├── cabin-modal.html          ← 객실 3탭 모달 (공통)
│   ├── port-modal.html           ← 기항지 모달 (공통)
│   ├── enquiry-form.html         ← 상품 매칭 문의 폼 (공통)
│   ├── price-table.html          ← 날짜/가격/상태 테이블
│   ├── date-selector.html        ← 날짜 선택 버튼
│   ├── filter-sidebar.html       ← 필터링 사이드바
│   ├── filter-tags.html          ← 선택된 필터 태그 바
│   ├── recommendation.html       ← 관련 상품/글 캐러셀
│   ├── category-tabs.html        ← 블로그 카테고리 탭
│   ├── deckplan-button.html      ← 덱플랜 새창 링크 버튼
│   └── bottom-bar.html           ← 하단 고정 CTA 바
├── _data/
│   ├── cruiselines.yml           ← 선사 메타데이터 (6개)
│   ├── ships.yml                 ← 선박 데이터 (선사별)
│   ├── cabins.yml                ← 객실 데이터 (선박별)
│   ├── ports.yml                 ← 기항지 데이터
│   ├── navigation.yml            ← 메인 네비게이션 구조
│   └── filters.yml               ← 필터 옵션 정의
├── _voyages/                     ← 상품 마크다운 (CruiseMD에서 생성)
│   └── SPLW260714.md
├── _posts/                       ← 블로그 글 (CruiseStudio에서 생성)
│   └── 2026-04-07-regent-splendor-review.md
├── _sass/
│   ├── _variables.scss           ← cruise-design.md의 토큰을 CSS 변수로
│   ├── _base.scss                ← 리셋 + 타이포그래피
│   ├── _components.scss          ← 컴포넌트별 스타일
│   ├── _layout.scss              ← 그리드/간격
│   └── _responsive.scss          ← 반응형
├── assets/
│   ├── css/main.scss             ← SCSS 엔트리
│   ├── js/
│   │   ├── sticky-nav.js         ← 스티키 네비 스크롤 감지
│   │   ├── modal.js              ← 모달 열기/닫기
│   │   ├── carousel.js           ← 이미지 캐러셀
│   │   ├── filter.js             ← 필터 OR/AND 로직
│   │   ├── date-selector.js      ← 날짜 버튼 전환
│   │   └── price-dropdown.js     ← 가격 드롭다운
│   └── images/
│       ├── regent/               ← 선사별 이미지
│       ├── silversea/
│       ├── crystal/
│       ├── oceania/
│       ├── ritzcarlton/
│       ├── fourseasons/
│       ├── common/               ← 기항지/공통 이미지
│       ├── ships/                ← 선박 사진
│       ├── cabins/               ← 객실 사진 (선박별 하위폴더)
│       ├── floorplans/           ← 객실 평면도
│       ├── deckplans/            ← 덱플랜 이미지
│       └── ui/                   ← 로고/아이콘/UI 요소
└── .claude/
    ├── CLAUDE.md                 ← 프로젝트 규칙
    └── skills/
        └── cruise-design.md      ← 디자인 규칙 (작업 1 산출물)
```

---

## 3. 기존 v2 → A&K 구조 매핑 테이블

### 3-1. 홈페이지

| 기존 v2 요소 | A&K 대응 | 변경 사항 |
|-------------|---------|----------|
| 히어로 (CSS 바다 그라데이션) | 풀스크린 실사 이미지 히어로 | 실사 이미지로 교체, 텍스트 오버레이 |
| 선사 소개 섹션 | 6개 선사 카드 그리드 | 유지, 이미지+간략설명 추가 |
| 추천 상품 | 3열 카드 + "에디터 추천" 필터 | A&K 카드 패턴 적용 + 배지 시스템 |
| 블로그 미리보기 | 최신 3개 + 더보기 | 유지 |
| (없음) | Offers 섹션 | 신규 — 프로모션 유도 영역 추가 |
| (없음) | 브랜드 스토리 요약 | 신규 — SB7 원라이너 + 신뢰 지표 |

### 3-2. 선사 페이지

| 기존 v2 요소 | A&K 대응 | 변경 사항 |
|-------------|---------|----------|
| 선사 소개 | 이미지+텍스트 좌우 교차 (아만 패턴) | 레이아웃 변경 |
| 선박 목록 | 카드 + 이미지 캐러셀 + 드롭다운 스펙 | 캐러셀/드롭다운 추가 |
| 객실/다이닝 정보 | 카드 → 3탭 모달 (Photos/Floor Plan/Deck Plan) | 모달 방식으로 변경 |
| BDM 인터뷰 (Crystal Kong) | 유지 | 그대로 유지, 디자인만 맞춤 |
| 블로그 연동 | 관련 글 3개 + 관련 상품 3개 | 양방향 연결로 확장 |

### 3-3. 상품 상세 페이지

| 기존 v2 요소 | A&K 대응 | 변경 사항 |
|-------------|---------|----------|
| 싱글 페이지 스크롤 | 스티키 네비 + 섹션 전환 | **구조 변경 (핵심)** |
| 일정표 | Itinerary 섹션 + 기항지 모달 팝업 | 기항지 클릭 → 모달 추가 |
| 객실 카드 나열 | 가격 테이블 + 드롭다운 상세 + 3탭 모달 | **구조 변경 (핵심)** |
| 포함사항 그리드 | 좌측 아이콘+텍스트 리스트 (A&K 패턴) | 레이아웃 변경 |
| 담당 컨설턴트 | Details 섹션 내 배치 | 위치 이동 |
| 관련 블로그 | 하단 관련 글 3개 + 관련 상품 3개 | 양방향 연결 |
| 유사 상품 추천 | 캐러셀 + 카테고리 드롭다운 전환 | A&K 패턴 적용 |
| 크루즈 라인 소개 | Ship 섹션으로 통합 | 섹션 이동 |
| (없음) | 날짜 선택 버튼 (검정/흰색 전환) | **신규 (필수)** |
| (없음) | 상태 배지 (AVAILABLE/LIMITED/CALL) | **신규 (필수)** |
| (없음) | 하단 고정 CTA 바 | **신규 (필수)** |
| (없음) | Enquiry Form (상품 자동 매칭) | **신규 (필수)** |
| (없음) | 덱플랜 새창 링크 | **신규** |

### 3-4. 블로그

| 기존 v2 요소 | A&K 대응 | 변경 사항 |
|-------------|---------|----------|
| 카테고리 8탭 | 유지 | 그대로 |
| 필터: 선사 6개 + 지역 9개 칩 | 유지 | 그대로 |
| 필터 로직: 그룹 내 OR / 그룹 간 AND | 유지 | 그대로 |
| 피처드 포스트 + 카드 그리드 | 유지, A&K 카드 디자인 적용 | 디자인만 변경 |
| 헤더 배지 3개 (카테고리+선사+지역) | 유지 | 그대로 |
| 관련 글 스마트 매칭 | 관련 글 3개 + 관련 상품 3개 | 상품 연결 추가 |
| (없음) | Editor's Picks (편집자 추천) 영역 | 신규 — A&K Stories 패턴 |

### 3-5. 상품 검색 (Journey Finder)

| 기존 v2 요소 | A&K 대응 | 변경 사항 |
|-------------|---------|----------|
| (없음 — 상품 목록만 있었음) | 다층 필터링 + 카드 그리드 | **신규 페이지** |

**필터 구조 (A&K Journey Finder 기반):**

| 필터 카테고리 | 옵션 | 데이터 소스 |
|-------------|------|-----------|
| 선사 | regent, silversea, crystal, oceania, ritzcarlton, fourseasons | _data/cruiselines.yml |
| 지역 | 지중해, 카리브해, 알래스카, 북유럽, 아시아, 남태평양, 남미, 대서양횡단, 세계일주 | _data/filters.yml |
| 출발월 | 1월~12월 | 상품 frontmatter departure_date |
| 연도 | 2026, 2027, 2028 | 상품 frontmatter departure_date |
| 기간 (Duration) | 1-7박 / 8-14박 / 15-21박 / 22박+ | 상품 frontmatter nights |
| 여행스타일 | 올인클루시브 / 탐험 / 리버 | 상품 frontmatter travel_style |
| 특별 태그 | 프로모션 / 모객집중 / 담당자추천 / 2명추가시출발 | 상품 frontmatter tags |

---

## 4. 데이터 스키마

### 4-1. 상품 (Voyage) frontmatter
```yaml
---
layout: voyage
title: "그리스 섬 크루즈 2026"
sailing_code: SPLW260714
cruiseline: regent
ship: splendor
region: 지중해
departure_date: 2026-07-14
return_date: 2026-07-24
nights: 10
ports: 7
ports_list:
  - name: 아테네 (피레우스)
    type: embarkation
    image: common/athens_01.jpg
  - name: 산토리니
    type: port
    image: common/santorini_01.jpg
hero_image: regent/splendor_med_hero_01.jpg
category: SMALL GROUP JOURNEYS
travel_style: 올인클루시브
tags: [프로모션, 담당자추천]
departure_status: available  # available / limited / call / confirmed
passengers_needed: 2
passengers_confirmed: 14
price_from: 14895
currency: USD
inclusions:
  - 전 구간 비즈니스클래스 항공
  - 올인클루시브 (식음료 전체)
  - 무제한 기항지 관광
  - 버틀러 서비스 (스위트)
cabins:
  - type: Classic Stateroom
    category: 1
    price: 14895
    single_supplement: 7455
    cabin_sqft: 204
    balcony_sqft: 43
    status: call
    images: [cabins/splendor/classic_01.jpg, cabins/splendor/classic_02.jpg]
    floorplan: floorplans/splendor/classic.png
  - type: Deluxe Stateroom
    category: 2
    price: 16395
    single_supplement: 8200
    cabin_sqft: 258
    balcony_sqft: 53
    status: limited
    images: [cabins/splendor/deluxe_01.jpg]
    floorplan: floorplans/splendor/deluxe.png
dates_available:
  - start: 2026-07-14
    end: 2026-07-24
    selected: true
  - start: 2026-10-01
    end: 2026-10-11
    selected: false
deckplan: deckplans/splendor.html
related_posts: [regent-splendor-review, mediterranean-cruise-guide]
related_voyages: [SPLW260901, GRND261005]
---
```

### 4-2. 선사 (_data/cruiselines.yml)
```yaml
regent:
  name: 리젠트 세븐시즈
  name_en: Regent Seven Seas Cruises
  category: 울트라럭셔리
  logo: ui/regent-logo.png
  hero_image: regent/brand_hero_01.jpg
  tagline: "세계에서 가장 럭셔리한 올인클루시브 크루즈"
  gsa: true
  bdm:
    name: Crystal Kong
    title: 리젠트 한국 담당
    photo: regent/bdm_crystal_kong.jpg
    quote: "리젠트는 단순한 크루즈가 아닌 삶의 방식입니다."
  ships: [splendor, grandeur, mariner, voyager, navigator, explorer]
  description: |
    리젠트 세븐시즈는 모든 것이 포함된 진정한 올인클루시브 럭셔리를 제공합니다.
    비즈니스클래스 항공, 무제한 기항지 관광, 미슐랭 수준의 다이닝까지...
```

### 4-3. 선박 (_data/ships.yml)
```yaml
splendor:
  name: Seven Seas Splendor
  cruiseline: regent
  built: 2020
  tonnage: 55254
  passengers: 750
  crew: 542
  decks: 11
  images: [ships/splendor_01.jpg, ships/splendor_02.jpg, ships/splendor_03.jpg]
  deckplan: deckplans/splendor.html
  highlights:
    - 전 객실 프라이빗 발코니
    - 7개 무료 레스토랑
    - 스파 클럽
```

### 4-4. 기항지 (_data/ports.yml)
```yaml
santorini:
  name: 산토리니
  name_en: Santorini
  region: 지중해
  country: 그리스
  images: [common/santorini_01.jpg, common/santorini_02.jpg]
  description: "에게해의 보석, 하얀 절벽 위 파란 지붕의 마을..."
  highlights:
    - 이아 마을 석양
    - 화산 투어
    - 와이너리 방문
  transport: "텐더 보트로 하선, 항구에서 마을까지 케이블카 5분"
```

### 4-5. 블로그 글 frontmatter
```yaml
---
layout: post
title: "리젠트 스플렌더 지중해 탑승기"
date: 2026-04-07
author: Jane
category: 선박리뷰
cruiseline: regent
ship: splendor
region: 지중해
tags: [리젠트, 스플렌더, 지중해, 올인클루시브]
hero_image: regent/splendor_review_hero.jpg
excerpt: "7박 8일 지중해 항해, 스플렌더의 모든 것을 담았습니다."
featured: false
related_voyages: [SPLW260714, SPLW260901]
---
```

---

## 5. 공통 컴포넌트 작동 명세

### 5-1. cabin-modal.html (객실 3탭 모달)

**호출:** 가격 테이블에서 객실 이미지 아이콘 클릭, 또는 선사 페이지 객실 카드 클릭

**입력 데이터:**
```
cabin.type, cabin.category, cabin.price, cabin.single_supplement,
cabin.cabin_sqft, cabin.balcony_sqft, cabin.images[], cabin.floorplan,
ship.deckplan
```

**구조:**
- 3탭: PHOTOS | FLOOR PLAN | DECK PLAN
- PHOTOS: 좌측 이미지 캐러셀(좌우 화살표) + 우측 텍스트 정보
- FLOOR PLAN: 좌측 평면도 이미지 + 우측 동일 텍스트
- DECK PLAN: 좌측 전체 덱 배치도(카테고리 색상 구분 + 범례) + 우측 동일 텍스트
- 우측 텍스트: 객실명 / CATEGORY / 설명 / PRICE / SINGLE SUPPLEMENT / CABIN 면적 / BALCONY 면적
- 닫기: ×버튼 + 배경 클릭

**재사용:** 모든 선박의 모든 객실 타입에 동일 컴포넌트, 데이터만 교체

### 5-2. enquiry-form.html (상품 매칭 문의)

**호출:** 상품 상세의 "상담 문의" 버튼, 하단 고정 바 CTA, Offers 페이지 VIEW DETAILS

**입력 데이터:**
```
voyage.title, voyage.hero_image, voyage.category, voyage.nights,
voyage.ports, voyage.price_from, voyage.cruiseline
```

**구조:**
- 좌측: 상품 이미지 + 상품명 + 카테고리 배지 + 일수/항구수 + 시작가
- 우측: 전화번호(02-775-0100) + 카카오톡 버튼 + 문의폼(이름/전화/이메일/메시지/개인정보동의)
- 모달 형태, 모바일에서 풀스크린

### 5-3. price-table.html (날짜/가격 테이블)

**입력 데이터:**
```
voyage.dates_available[], voyage.cabins[], voyage.deckplan
```

**구조:**
- 상단: 날짜 선택 버튼 (검정=현재 선택 / 아웃라인=다른 날짜) + DECKPLAN 버튼(새창)
- "Prices are in USD, per person, double occupancy." 안내
- 행: 객실타입 | 가격 | 상태배지 | 드롭다운 화살표
- 드롭다운 펼침: 객실 이미지(클릭→cabin-modal) + CATEGORY + 설명 + PRICE + SINGLE SUPPLEMENT + CABIN/BALCONY 면적
- OFFER 있으면: 빨간 글씨로 표시 + 원가 취소선
- 하단 고정 바: "10박 | ₩XX,XXX,XXX부터 | 상담 문의" (bottom-bar.html)

### 5-4. recommendation.html (관련 콘텐츠 추천)

**입력 데이터:**
```
related_voyages[] (상품 카드 3개)
related_posts[] (블로그 카드 3개)
current_region (카테고리 드롭다운용)
```

**구조:**
- "관련 상품" 제목 + 카테고리 드롭다운 (예: "More 지중해 항해 ∨")
- 드롭다운 펼침: 하위 카테고리 목록 (지역별/선사별)
- 3열 상품 카드 캐러셀 (좌우 화살표)
- "관련 글" 제목 + 3열 블로그 카드

---

## 6. 구현 우선순위

### Phase 1: 리젠트 완전체 (MVP)
리젠트 선사를 완전 기능 템플릿으로 완성하면 나머지 선사는 데이터만 교체.

| 순서 | 작업 | 산출물 | 의존성 |
|------|------|--------|--------|
| 1 | 디자인 토큰 → CSS 변수 | _sass/_variables.scss | cruise-design.md |
| 2 | 기본 레이아웃 + 헤더/푸터 | _layouts/default.html | 색상 확정 필요 |
| 3 | 홈페이지 | index.html | 히어로 이미지 |
| 4 | 리젠트 선사 페이지 | cruiselines/regent.html | _data/cruiselines.yml, ships.yml |
| 5 | 상품 상세 (스플렌더 지중해) | _voyages/SPLW260714.md + voyage.html | 공통 컴포넌트 전부 |
| 6 | 블로그 메인 + 글 1개 | blog/index.html + _posts/ | 카테고리 탭, 필터 |
| 7 | Enquiry Form | _includes/enquiry-form.html | Formspree 또는 Netlify Forms |
| 8 | 로컬 테스트 + 수정 | bundle exec jekyll serve | |
| 9 | Netlify 배포 | git push | |

### Phase 2: 확장
| 작업 | 내용 |
|------|------|
| 나머지 선사 5개 | 데이터 교체로 생성 |
| Journey Finder | 필터링 페이지 |
| Offers | 프로모션 페이지 |
| 회사 소개 | 브랜드 스토리 (별도 기획 후) |
| 덱플랜 페이지 | 선박별 통일 구조 |
| CruiseMD 연동 | 상품 자동 생성 파이프라인 |
| DNS 연결 | cruise.co.kr 도메인 |

### Phase 3: 고도화
| 작업 | 내용 |
|------|------|
| CruiseCRM 연동 | 문의 → 고객DB 자동 등록 |
| JSON-LD 스키마 | 모든 페이지 구조화 데이터 |
| 네이버 블로그 마이그레이션 | 194개 글 AEO 재작성 |
| 성능 최적화 | WebP 변환, 크리티컬 CSS |

---

## 7. 색상 확정 시 변경 범위

색상이 확정되면 변경할 파일은 딱 하나:

**_sass/_variables.scss** 의 --primary, --accent, --accent-hover 3개 변수만 교체.

나머지 모든 컴포넌트는 CSS 변수를 참조하므로 자동 반영.
cruise-design.md의 Option A/B 중 선택된 것으로 업데이트.

---

## 8. 이 문서와 다른 문서의 관계

| 문서 | 역할 | 관계 |
|------|------|------|
| **cruise-design.md** | 디자인 토큰 + UI 패턴 규칙 | Claude Code가 "어떻게 만들지" 참조 |
| **이 문서 (cruise-site-structure.md)** | 사이트 구조 + 데이터 스키마 + 구현 순서 | Claude Code가 "무엇을 만들지" 참조 |
| **AK_Design_Analysis.docx** | A&K 분석 원본 + 스크린샷 | "왜 이렇게 결정했는지" 맥락 기록 |
| **CruiseInternational_Master_Design_v1.1.md** | 전체 시스템 아키텍처 | 상위 설계 참조 |
| **CLAUDE.md (cruise-site)** | Claude Code 프로젝트 규칙 | cruise-design.md 참조 지시 포함 |
