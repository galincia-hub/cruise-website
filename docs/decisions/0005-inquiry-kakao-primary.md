# ADR 0005 — 사이트 문의 입구

- Status: **accepted**
- Date: 2026-09-10
- Confirmed by: Kangsoo Hyun

## Context

사이트 게이트 중 문의 입구. 전화 중심 CTA 대신 **카카오톡**을 메인으로 하고, 웹 문의 폼 병행 여부를 결정함. 제작 코딩은 기획 완료 전까지 보류.

## Decision

1. **1차(유일한) CTA = 카카오톡 채널.**
2. **웹 문의 폼 없음** (Formspree·Netlify Forms·Supabase 폼 모두 사이트 MVP 경로에 넣지 않음).
3. 전화는 푸터·사업자 정보 등 **보조 표기**만 허용. 플로팅/히어로/상품 CTA의 주 버튼은 카톡.
4. 카카오 채널 URL·QR은 운영 확정값을 데이터로 두되, **구현은 기획 완료 후**.
5. CRM·견적 자동화는 사이트 폼이 아니라 **카톡·오프라인·추후 별도 채널**로 유입되는 전제. 사이트→Supabase 폼 파이프는 이 단계에서 채택하지 않음.

## Consequences

- Phase 0 draft의 전화 CTA·문의 폼 자리는 제작 재개 시 **카톡 CTA만**으로 정리.
- 핸드오프 “sticky phone CTA”는 채널만 카톡으로 치환.
- 견적 요청의CRM 연동을 사이트에서 받으려면 이후 맵/ADR 개정이 필요 (지금은 카톡 상담).

## Still open

컨설턴트 노출, 가격 표시.
