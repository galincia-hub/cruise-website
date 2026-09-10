# 크루즈AI시스템 1차 기획서

- **문서 ID:** PLAN-2026-09-pack1
- **Status:** **locked (1차)**
- **Date:** 2026-09-10
- **Confirmed with:** Kangsoo Hyun
- **PM:** 개발팀 (시스템화). 사업 아이디어는 사용자 공급.
- **Coding:** 제작·추가 구현은 **이 기획서 기준 재개 선언 전까지 보류.** Phase 0 PR은 draft 유지.

가칭: 크루즈시스템 / 크루즈시스템구축. 정식명: **크루즈AI시스템**.

상세 조각 문서·ADR은 본문 끝 인덱스. **충돌 시 이 기획서 + 해당 ADR**이 우선.

---

## 1. 목적과 차별화

정보를 쌓고(KMS·DB) → 상품·콘텐츠로 만들고(MD·Studio) → 손님·직원에게 쓰고(사이트·상담) → 돈·관계로 닫는다(ops·CRM).

**차별화 핵:** 누적·정제된 지식(선사 메일·사례·사실)을 직원이 상담에 쓰는 것. 인사이트 개발이 장기 자산.

사이트 목표: **범용 크루즈 백본**(싱가폴·알래스카 등 + 럭셔리). 럭셔리 전용 시안은 라이브러리. 시드는 시스템 검증용(예: RSSC 1 + 싱가폴 일반 1).

---

## 2. 전체 맵 (확정)

```text
소싱·메일·문서·URL·인터뷰·콘텐츠
        → CruiseKMS (분류·정제·제공·입력)
        → CruiseDB (저장; → 추후 Supabase 전역)
              ↓                    ↓
         CruiseMD              직원 상담(KMS 직접)
         (상품 SSOT, 듀얼)
              ↓
         CruiseStudio (상위) - blog-v2 (블로그 전문)
              ↓
         cruise-website (Jekyll, GitHub Pages)
              ↓ 카톡 CTA
         카톡 상담 → CRM (반자동 MVP) → ops (예약·입금, ID 연결)
```

주변: dev-hub(현황판) · blog-preview(글 스테이징) · cruise-ops-desk(전세 매뉴얼).

**맵 규칙 6**

1. KMS+DB 한몸. 입력 분류도 KMS.
2. Studio = 채널 종합, blog-v2 = 사이트 블로그 전문.
3. MD = 단품 카드 + 패키지 듀얼. 상품 SSOT는 MD. ops에 상품 마스터 합치지 않음.
4. 배포 정본 = GitHub Pages. 제작은 기획 재개 선언 전까지 보류.
5. 성장 3트랙은 훅 레이어(백본 대체 아님).
6. CRM·ops는 관계·예약 원장. 지식·MD와 ID로만 연결.

→ [system-map-v1.md](system-map-v1.md)

---

## 3. 사이트 게이트 (확정)

| 게이트 | 결정 | ADR |
|--------|------|-----|
| 색상 | C 테라코타(A&K형). 토큰 구조 재사용, 값 교체는 제작 시 | 0004 |
| 문의 | **카카오톡만**. 웹 폼 없음. 전화는 푸터 보조 | 0005 |
| 컨설턴트 | **플레이스홀더** 슬롯만. 실명·사진 없음. CTA→카톡 | 0006 |
| 가격 | **혼용**: 럭셔리/GSA=상담 문의, 대중·공개요금=시작가+디스클레이머 | 0007 |

미디어: 영상 YouTube 임베드, 이미지 Cloudflare R2 (ADR 0001). 배포: Pages (ADR 0003).

→ [site-gates.md](site-gates.md)

---

## 4. CruiseMD 듀얼 · 사이트 브릿지 (확정)

| | 트랙 A 단품 | 트랙 B 패키지 |
|--|-------------|---------------|
| 범위 | 선박·항차·프로모 | 항공+지상+크루즈 |
| MD | Offer/Sailing/Link + 카드·랜딩 | product_kind=package + 구간 블록 |
| 사이트 | `_voyages` 등 | **패키지 전용 레이아웃** |
| 가격 | inquiry / from_price | 동일 혼용, 패키지 기본 inquiry 권장 |

**브릿지 (Master-First):** MD 승인 → export draft → 사람 확인 → cruise-website 커밋·푸시. 사이트 단독 최종 편집 금지. export에 `price_display`, CTA=kakao, 컨설턴트 플레이스홀더 필수.

→ [md-dual-bridge.md](md-dual-bridge.md) · ADR 0008

---

## 5. 지식층 KMS/DB · 상담 · Supabase (확정)

| Phase | 정본 | 비고 |
|-------|------|------|
| **K0** | CruiseDB 파일 | 지금. KMS 입력·검색·상담 제공 |
| **K1** | 파일 + Supabase 미러/이관 | 이중 기록 |
| **K2** | Supabase 전역 정본 후보 | 파일은 백업·export |

규칙: KMS 통로 유지 · 손님=카톡 / 직원=KMS · PII는 지식 DB에 넣지 않음 · 지식·CRM Supabase 논리 분리.

→ [kms-db-phases.md](kms-db-phases.md) · ADR 0009

---

## 6. CRM 유입 (확정)

- 손님 공개 입구 = **카톡만** (사이트 폼 없음).
- **카톡 → CRM 반자동 = MVP 포함** (구조화 필드 적재). 완전 무인 응대·자동 예약 = MVP 밖.
- 구현 후보(제작 시 선택): (a) 템플릿+파서 (b) 직원용 내부 폼 (c) 카톡 API/웹훅.
- 최소 필드 예: 이름/호칭, 채널=kakao, 관심 상품 ID, 요약, 유입, 일시.
- 전화·방문 = 직원 수동 등록. CRM 데이터 private.

→ [crm-intake.md](crm-intake.md) · ADR 0010

---

## 7. CruiseStudio 채널 (확정)

우선순위: **1 블로그(blog-v2) → 2 EDM → 3 스레드 → 4 인스타.**

제작 재개 직후 우선은 블로그만. 채널 산출 사실은 KMS 입력. 새 채널은 Studio 아래 전문 파생.

→ [studio-channels.md](studio-channels.md) · ADR 0011

---

## 8. 성장 3트랙 훅 (확정)

| 트랙 | MVP | 이후 |
|------|-----|------|
| 컨설턴트 네트워크 | 사이트 플레이스홀더, CRM/ops 파트너 필드 자리 | 실명, 등급·정산 |
| MNC (복수 OK, MC 아님) | partner_type=mnc 자리 | 캠페인 전용관, 지급 워크플로 |
| 레퍼럴 (컨설턴트 아님) | referral 코드·소개자 자리 | 공개 코드 UI, 리워드 |

백본 파이프 대체 금지.

→ [growth-hooks.md](growth-hooks.md) · ADR 0012

---

## 9. 레포·역할 한눈

| 구성 | 역할 |
|------|------|
| cruise-website | Site Master, docs SSOT, Pages |
| CruiseMD | 상품 SSOT |
| CruiseKMS + CruiseDB | 지식 한몸 |
| CruiseStudio / blog-v2 | 채널 종합 / 블로그 정본 |
| CruiseCRM | 고객·리드 (깃 금지·private) |
| ops | 예약·단체·입금·인보이스 |
| dev-hub / blog-preview / cruise-ops-desk | 관제·스테이징·전세 매뉴얼 |

---

## 10. 제작 재개 전 체크 (아직 열린 실무)

- [ ] Supabase: 지식용·CRM용 프로젝트/스키마 실체 확인
- [ ] 카톡 채널 URL 확정
- [ ] 카톡→CRM 반자동 방식 a/b/c 선택
- [ ] 테라코타 토큰 값 표 (제작 시)
- [ ] Phase 0 draft PR 머지 여부 (기획 재개 후)
- [ ] 패키지 트랙 B 상세 스키마 (경계만 잠금됨)

---

## 11. 문서·ADR 인덱스

| ADR | 제목 |
|-----|------|
| 0001 | 미디어 (YouTube + R2) |
| 0002 | 핸드오프 keep/drop |
| 0003 | 배포 GitHub Pages |
| 0004 | 색상 테라코타 |
| 0005 | 문의 카톡만 |
| 0006 | 컨설턴트 플레이스홀더 |
| 0007 | 가격 혼용 |
| 0008 | MD 듀얼·브릿지 |
| 0009 | KMS/DB 단계 |
| 0010 | CRM 카톡 반자동 MVP |
| 0011 | Studio 채널 순 |
| 0012 | 성장 3트랙 훅 |

overview 조각: system-map-v1, cruise-ai-system, site-gates, md-dual-bridge, kms-db-phases, crm-intake, studio-channels, growth-hooks.

---

## 12. 개정

| 버전 | 날짜 | 내용 |
|------|------|------|
| 1.0 | 2026-09-10 | 1차 기획 묶음 통합 |

v2는 맵 또는 게이트 변경 시 이 파일을 개정하고 Status를 갱신한다.
