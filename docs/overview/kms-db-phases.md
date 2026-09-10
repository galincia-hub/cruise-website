# 지식층 단계 — KMS/DB · 상담 · Supabase (기획 잠금)

- **Status:** **locked**
- **Date:** 2026-09-10
- **ADR:** [0009](../decisions/0009-kms-db-phases.md)
- **Coding / Supabase 구축:** 보류.

## 한 줄

K0 파일 정본 → K1 이중 기록 → K2 Supabase 전역 정본. 분류·상담 제공은 항상 KMS.

## 단계 요약

- **K0:** CruiseDB + KMS (지금)
- **K1:** + Supabase 미러/이관
- **K2:** Supabase 정본, 파일은 백업·export

## 규칙 5

한몸(KMS 통로) · 정본 전환 순서 · 손님=카톡 / 직원=KMS · MD·CRM·ops와 경계 · 지식·CRM Supabase 논리 분리.

## 다음 기획

CRM 유입 (카톡 전제) · Studio 채널 우선순위 · 3트랙 훅.
