# CRM 유입 (기획 잠금)

- **Status:** **locked**
- **Date:** 2026-09-10
- **ADR:** [0010](../decisions/0010-crm-intake-kakao-semiauto.md)

## 한 줄

손님은 **카톡만**. 공개 웹 폼 없음. **카톡 → CRM 반자동은 MVP 포함** (완전 무인 응대는 제외).

## MVP 반자동

구조화 필드(이름·채널·관심상품·요약·유입=kakao)를 CRM에 넣는 경로. 구현 방식(템플릿 파서 / 직원용 내부 폼 / 카톡 API)은 제작 시 선택.

## 경계

PII = CRM private. 지식 = KMS. 상품 = MD. 예약 = ops + customer_id.

## 다음 기획

Studio 채널 우선순위 · 성장 3트랙 훅.
