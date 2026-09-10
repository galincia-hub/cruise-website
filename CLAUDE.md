# cruise-site — Jekyll 기반 크루즈인터내셔널 공식 사이트

## 토큰 효율 규칙
- 이미 읽은 파일은 같은 세션에서 다시 읽지 않는다
- 불필요한 도구 호출을 하지 않는다 (확인용 재조회 금지)
- 병렬 실행 가능한 도구 호출은 동시에 실행한다
- 20줄 이상의 반복 출력은 서브에이전트로 위임한다
- 사용자가 이미 설명한 내용을 반복하지 않는다

## 역할
Jekyll 기반 정적 사이트. 선사 소개, 상품 카드, 블로그 포스트를 관리한다.

## 디렉터리 구조
- `_posts/` — 블로그 글 (Markdown)
- `_cruiselines/` — 선사 소개 페이지
- `_voyages/` — 항해 상품 카드
- `_includes/` — 공통 HTML 컴포넌트
- `_layouts/` — 레이아웃 템플릿
- `_data/` — YAML 데이터 파일
- `assets/` — CSS, JS, 이미지
- `_site/` — Jekyll 빌드 출력 (claudeignore)

## 주요 규칙
- `_site/` 폴더는 빌드 결과물이므로 직접 편집하지 않는다
- 새 포스트는 `_posts/YYYY-MM-DD-slug.md` 형식으로 생성
- frontmatter에 `layout`, `title`, `date` 필수 포함
