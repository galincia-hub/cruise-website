# ADR 0009 — CruiseKMS/CruiseDB 단계 (상담 · Supabase)

- Status: **accepted**
- Date: 2026-09-10
- Confirmed by: Kangsoo Hyun

## Context

지식층은 KMS+DB 한몸이다. 현재는 크루즈 정보 파일 DB이고, 추후 Supabase 전역 DB로 간다. 직원 상담 차별화(과거 사례·선사 사실 검색)가 핵심 자산이다. 제작 코딩·Supabase 스키마 구현은 기획 완료 전까지 보류.

## Decision

### 단계

| Phase | 저장 정본 | KMS 역할 | 상담 |
|-------|-----------|----------|------|
| **K0** (지금) | CruiseDB 파일/MD | 입력(I1~I4)·검색 MCP·제공 | 직원 → KMS 직접 조회 |
| **K1** | 파일 정본 + **Supabase 구조화 미러/이관 시작** (이중 기록) | 동일, Supabase R/W 준비 | 동일 + 질의·태그 정리 |
| **K2** | **Supabase = 전역 DB 정본 후보**, 파일은 export/백업 | KMS가 Supabase R/W | 사내 상담 UI 검토 가능 |

### 규칙

1. **한몸:** 입·출력은 KMS를 통한다. 앱이 DB/Supabase를 우회해 쓰지 않음.
2. **정본 전환:** K0 파일 → K1 이중 → K2 Supabase 정본.
3. **상담 vs 손님:** 손님 사이트 CTA는 카톡(ADR 0005). **직원 상담 지식은 KMS/DB.**
4. **경계:** 고객 PII·예약 = CRM/ops. 상품 마스터 = MD. KMS/DB = 지식·사례·사실. ID로만 느슨히 연결.
5. **Supabase 분리:** 지식용과 CRM용은 **논리 분리** (별도 프로젝트 권장, 또는 같은 프로젝트면 schema 분리).

## Consequences

- master-inputter·블로그 자동추출 경로는 K0에서도 유효. K1부터 저장 타깃에 Supabase 추가.
- 사이트/MD/Studio의 사실 소스는 K2에서 읽기 경로를 Supabase로 바꿀 수 있음.

## Still open

CRM 유입(카톡 전제), Studio 채널 우선순위, 성장 3트랙 훅. Supabase 프로젝트/스키마 실체는 사용자 확인·후속 작업.
