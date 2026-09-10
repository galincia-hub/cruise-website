# ADR 0005 — 사이트 문의 입구

- Status: **accepted** (1차)
- Date: 2026-09-10
- Confirmed by: Kangsoo Hyun

## Context

사이트 게이트 중 문의 입구. 후보였던 전화 중심 CTA를 사용자가 **카카오톡으로 대체**하기로 함. CRM/Supabase 연동 폼은 별도 여부 확인 중. 제작 코딩은 기획 완료 전까지 보류.

## Decision

1. **1차 CTA = 카카오톡 채널** (전화 번호를 메인 CTA로 쓰지 않음).
2. 전화는 푸터·사업자 정보 등 **보조 표기**만 허용 (법적·신뢰용). 플로팅/히어로 주 CTA는 카톡.
3. 카카오 채널 URL·QR은 운영 확정값을 `_data` 등에 두되, **구현은 기획 완료 후**.
4. 웹 폼(Supabase→CRM/MD) 병행 여부는 **후속 결정** (이 ADR 개정 또는 0005b).

## Consequences

- Phase 0 draft의 전화 CTA 플레이스홀더는 제작 재개 시 카톡 CTA로 교체.
- 핸드오프의 “전화 sticky CTA” 패턴은 **채널만 카톡으로 치환**해 재사용 가능.
- Formspree를 장기 정본으로 쓰지 않음 (임시도 기본 경로 아님).

## Still open

- 카톡만 vs 카톡+문의 폼
- 컨설턴트 노출, 가격 표시 (다른 게이트)
