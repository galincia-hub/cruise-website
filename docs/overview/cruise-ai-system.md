# 크루즈AI시스템 개요

- **정식 이름:** 크루즈AI시스템  
- **가칭:** 크루즈시스템 / 크루즈시스템구축  
- **문서 기준일:** 2026-09-10  
- **SSOT:** 이 문서는 `galincia-hub/cruise-website`의 `docs/` 허브에 둔다. 사이트 빌드에서는 `docs/` exclude.
- **전체 맵:** [system-map-v1.md](system-map-v1.md) — **locked (확정)**

## 1. 한 줄 정의

크루즈AI시스템은 선사·콘텐츠·지식을 **Digitize → 공개 사이트·사내 상담·운영**으로 흘리는 회사 구축물이다.  
**핵심 자산**은 누적·정제된 정보(CruiseDB)와 이를 분류·제공하는 CruiseKMS다. 사이트·MD·스튜디오·ops·CRM은 그 위에서 손님·상품·채널·예약을 만든다.

## 2. 지식층 (한몸) — 차별화의 핵

| 구성 | 역할 |
|------|------|
| **CruiseDB** | 정보를 담는 저장소. 현재는 크루즈 정보 DB. 추후 **Supabase**로 전역 DB로 확장. |
| **CruiseKMS** | 분류·정제·관리. **제공 + 입력** 다중역할. 소싱 분류 처리가 핵심. 기본은 **직접 사용**, 충돌·판단 시에만 사람 경유. |

### 양방향 흐름

- **출력(검색·제공):** 직원 상담, 사이트/MD/Studio가 KMS를 통해 DB 사실에 접근.
- **입력(분류·저장):** 문서·붙여넣기·URL·인터뷰·블로그 산출 등 → KMS(master-inputter 등) → 검증 → CruiseDB.
- 선사 메일·과거 사례도 DB에 쌓여 상담 시 “예전에 이런 케이스” 제공 → **회사 차별화 자산**.
- 모든 콘텐츠는 원칙적으로 **DB화**되고, KMS가 정제·관리한다. 인사이트 개발이 장기 자산.

참조: CruiseKMS `Pipeline 4: KMS 마스터 입력기 (I1~I4)`, 블로그 완성 시 KMS 자동추출 경로.

## 3. 시스템 인과 흐름

구성 다이어그램·확정 규칙 6조는 **[전체 맵 v1](system-map-v1.md)** 이 정본이다.

```text
[입력]
  선사 메일/PDF ──► CruiseMD (상품 SSOT, 듀얼)
  유튜브·채널 소싱 ─► CruiseStudio (상위) / blog-v2 (사이트 블로그 전문)
  문서·URL·인터뷰·산출물 ─► CruiseKMS ──저장──► CruiseDB

[지식 한몸]
  CruiseKMS ◄──► CruiseDB  (검색 MCP / 입력기 / 상담 제공)
       │
       ├──► 직원 상담 (직접)
       └──► 사이트 · MD · Studio (직접, 필요 시 사람)

[공개·운영]
  CruiseMD ──단품 카드 HTML / 패키지 듀얼──► cruise-website (_voyages 등)
  blog-v2 ──글──► cruise-website (_posts) · blog-preview · (네이버 등)
  cruise-website ──문의·견적(설계)──► CRM (Supabase 연동 예정)
  CruiseMD 상품 ID · CRM 고객 ID ──► ops (예약·단체·입금·인보이스)
```

상품 마스터를 ops에 합치지 않는다. MD = 세일링·요금·상품 SSOT, ops = 예약·입금 원장. 연결은 **ID만**.

## 4. 구성 요소 역할

| 구성 | GitHub / 위치 | 역할 |
|------|---------------|------|
| **cruise-website** | `galincia-hub/cruise-website` (로컬 `cruise-site`) | Site Master (Jekyll). 배포 정본 = **GitHub Pages** (ADR 0003). |
| **CruiseMD** | `CruiseMD` | 상품 SSOT. **단품** = 카드 HTML. **패키지**(항공+지상) = 카드만으로 부족 → **듀얼**. |
| **CruiseStudio** | `CruiseStudio` | 블로그·스레드·인스타·EDM 등 **채널 소싱 종합 툴**(상위 개념). |
| **blog-v2** | `blog-v2` (private) | 사이트와 붙는 **블로그 전문화**. Studio 아래 파생. 이후 채널별 전문 파생 예정. |
| **CruiseKMS + CruiseDB** | 각각 private/public 조합 | 지식 한몸. 분류기 + 저장소. |
| **ops** | `ops` | 예약·단체·회원·인보이스 프로토. |
| **CruiseCRM** | 로컬 (깃 금지·고객데이터) | 고객·리드. 기본안 있음. Supabase 환경은 열림, 프로젝트는 확인 중. |
| **dev-hub** | `dev-hub` | 진행 현황판. SSOT 아님. |
| **blog-preview** | `blog-preview` | 게시 전 글 스테이징. |
| **cruise-ops-desk** | `cruise-ops-desk` | 특정 전세선 운영 매뉴얼. 상품 파이프라인과 별개. |

민감 기획·자격증명·재무 문서는 공개 레포에 넣지 않는다 (`site_data/` 로컬 ignore). 디자인·구조 md 일부는 `docs/library/`.

## 5. 사이트·제품 전략 (요약)

- 목표: **범용 크루즈 백본** (싱가폴·알래스카 등 + 럭셔리). 럭셔리 전용 시안은 라이브러리.
- 시드: 럭셔리 RSSC 1 + 일반 싱가폴 1 등으로 시스템부터 세움.
- 성장 3트랙(컨설턴트 네트워크 · MNC · 레퍼럴)은 사이트·정산·권한 **훅**. MD→웹 파이프라인 자체를 바꾸지 않음.
- Claude 핸드오프는 **선택 라이브러리**. PM은 개발팀, 사업 아이디어는 사용자가 공급.

## 6. 확정·미결

**확정**

- **전체 맵 v1 locked** — `docs/overview/system-map-v1.md`  
- 배포 정본: GitHub Pages — `docs/decisions/0003-deploy-github-pages.md`  
- KMS↔DB 한몸, 입력+제공 양방향  
- Studio ⊃ blog-v2 (채널 전문 파생 구조)  
- MD 듀얼(단품 카드 / 패키지)  
- 미디어 ADR: 영상 YouTube embed, 이미지 Cloudflare R2 (`docs/decisions/0001-…`)  
- 제작 코딩 보류 (기획 우선)

**미결·확인 중**

- Supabase CRM 프로젝트 생성 여부  
- MD→사이트 일상 브릿지(export / 수동 / 혼용) 실무 습관 문서화  
- 색상·문의 입구·컨설턴트 노출 등 사이트 게이트

## 7. 관련 문서

- `docs/overview/system-map-v1.md` — 전체 맵 확정본  
- `docs/README.md` — 허브 규약  
- `docs/decisions/0001-media-storage.md`, `0002-…`, `0003-deploy-github-pages.md`  
- `docs/library/cruise-design.md`, `cruise-site-structure.md`  
- `docs/handoff/`
