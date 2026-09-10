# CruiseMD 듀얼 · 사이트 브릿지 (기획 잠금)

- **Status:** **locked**
- **Date:** 2026-09-10
- **ADR:** [0008](../decisions/0008-md-dual-and-site-bridge.md)
- **Coding:** 보류. 제작 재개 시 이 문서 + ADR을 따른다.

## 한 줄

단품은 카드·항차 페이지로, 패키지는 구간형 레이아웃으로. 둘 다 **MD가 원장**, 사이트는 export -> 검토 -> 커밋.

## 트랙

- **A 단품:** Offer/Sailing/Link -> 카드·랜딩 -> `_voyages`
- **B 패키지:** `product_kind: package` + 항공/지상/크루즈 블록 -> 패키지 전용 레이아웃

## 브릿지

MD 승인 -> export draft -> 사람 확인 -> `cruise-website` push (Pages). 사이트 단독 최종 편집 금지.

## 게이트 연동

`price_display` · 카톡 CTA · 컨설턴트 플레이스홀더 — [site-gates.md](site-gates.md)

## 다음 기획

KMS/DB -> 상담 / Supabase 전역 단계.
