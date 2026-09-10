# ADR 0008 — CruiseMD 듀얼 트랙 + 사이트 브릿지

- Status: **accepted**
- Date: 2026-09-10
- Confirmed by: Kangsoo Hyun

## Context

CruiseMD는 단품(오퍼·세일링·링크, 카드/랜딩) 파이프가 중심이다. 패키지 기획여행(항공+지상+크루즈)은 카드만으로 표현이 어렵다. 사이트(cruise-website)와의 일상 연결 습관도 미문서화였다. 제작 코딩은 기획 완료 전까지 보류.

## Decision

### A. 듀얼 트랙

| | 트랙 A — 크루즈 단품 | 트랙 B — 패키지 기획 |
|--|---------------------|---------------------|
| 범위 | 선박·항차·프로모 중심 | 항공 + 지상 + 크루즈 결합 |
| MD | 기존 Offer / Sailing / Link + 카드·랜딩 | `product_kind: package` + 구간 블록(항공/호텔/투어/크루즈) |
| 사이트 | `_voyages` 등 항차·카드형 상세 | **별도 패키지 레이아웃** (카드 한 장으로 끝내지 않음) |
| 가격 (ADR 0007) | `inquiry` 또는 `from_price` | 동일 혼용. 패키지는 구성 변동이 커서 **기본 inquiry 권장**, 공개 가능 시 `from_price` |

- 상품 SSOT는 **항상 CruiseMD**. ops에는 상품 마스터를 합치지 않고 **ID만** 연결 (맵 v1).

### B. MD to 사이트 브릿지 (Master-First)

```text
CruiseMD (승인된 상품)
  -> export (스크립트/에이전트) -> Jekyll draft
       (_voyages 등 front matter + price_display + kakao CTA 플래그)
  -> 사람 확인
  -> cruise-website 커밋·푸시 (GitHub Pages)
```

1. 사이트에서 상품을 **최종 원본으로 직접 편집하지 않는다.** 수정은 MD -> 재export.
2. `export_to_jekyll`(가칭) 등 자동 export는 **이 브릿지의 구현 후보**이다. 구현은 제작 재개 시.
3. `output/` 카드 HTML은 **사내·미리보기**. 공개면 정본은 Jekyll 컬렉션.
4. export 산출물 필수 필드: `price_display` (ADR 0007), CTA=`kakao` (ADR 0005), 컨설턴트는 플레이스홀더만 (ADR 0006).

## Consequences

- 패키지 스키마·패키지 레이아웃의 **상세 필드**는 후속 기획/제작에서 채운다. 경계(트랙 B · 카드 단독 불가)는 여기서 잠금.
- Phase 0 draft PR의 시드 항차는 트랙 A 예시로 본다.

## Still open (다음 기획)

KMS/DB -> 상담·Supabase 전역 단계, CRM 유입(카톡 전제), Studio 채널 우선순위·3트랙 훅.
