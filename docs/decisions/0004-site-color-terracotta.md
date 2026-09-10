# ADR 0004 — 사이트 색상 팔레트

- Status: **accepted**
- Date: 2026-09-10
- Confirmed by: Kangsoo Hyun

## Context

크루즈AI시스템 Site Master(`cruise-website`) 브랜드 토큰이 미확정이었다. 후보: A Navy+Orange, B Deep Navy+Gold, C 테라코타(A&K형), D 기존 토큰 유지 후 재결정. 제작 코딩은 기획 완료 전까지 보류이나, 게이트는 먼저 잠근다.

## Decision

1. **확정 팔레트: C — 테라코타 (A&K형)**.
2. 토큰 **구조**(CSS 변수·역할: primary / accent / surface / text 등)는 기존·핸드오프 패턴을 재사용하되, **색 값은 테라코타 계열**로 맞춘다.
3. 실제 `:root` 교체·전면 리스킨은 **기획 완료 후 제작 재개 시** 수행한다. 이 ADR은 방향 잠금이다.
4. A/B안 및 현재 레포 네이비·골드/오렌지 토큰은 라이브러리·비교용으로만 남긴다.

## Consequences

- Phase 0 draft PR의 색 토큰을 "최종"으로 보지 않는다.
- 디자인 가이드(`docs/library/cruise-design.md`)는 제작 착수 시 C안에 맞게 갱신한다.
- 럭셔리 2트랙 스킨이 생겨도 **같은 토큰 구조** 위에 스킨만 갈 수 있게 유지한다.

## Still open (사이트 게이트)

문의 입구, 컨설턴트 노출, 가격 표시.
