# cruise.co.kr

크루즈 인터내셔널 공식 홈페이지 — Jekyll + GitHub Pages

## 구조

- `_layouts/` — default, cruiseline, product, post
- `_includes/` — topbar, header, gnb, breadcrumb, footer, section-divider, cta-bottom, card-consultant
- `_data/` — cruiselines.yml, consultants.yml, featured_products.yml
- `_cruiselines/` — 선사별 페이지 (regent.md 등)
- `_voyages/` — 상품 상세 페이지
- `_posts/` — 블로그 글
- `assets/css/style.css` — 디자인 가이드 v1 기반 CSS
- `assets/js/main.js` — 인터랙션 (일정표 토글, 필터)

## 로컬 실행

```bash
bundle install
bundle exec jekyll serve
```

http://localhost:4000 에서 확인

## 참조 문서

- `cruise_design_guide_v1.md` — 디자인 토큰, 컬러, 타이포, 컴포넌트 규격
- `cruise_site_architecture_v0.1.md` — 사이트 구조, 페이지별 스펙
- 목업 JSX 4개 — 홈/선사/상품상세/블로그
