# docs/ — 공유 작업 허브 (Claude ↔ 개발팀)

이 폴더는 채팅 첨부 대신 Claude와 개발팀(Grok)이 같은 산출물을 주고받기 위한 공간이다.

## 시작점

- **[크루즈AI시스템 1차 기획서 (통합)](overview/cruise-ai-master-plan-v1.md)** ← 전체 한 장
- **[기획서 HTML 열람본](overview/cruise-ai-master-plan-v1.html)** ← 브라우저용
- [전체 맵 v1 (확정)](overview/system-map-v1.md)
- [크루즈AI시스템 개요](overview/cruise-ai-system.md)
- 1차 기획 조각: [사이트 게이트](overview/site-gates.md) · [MD 듀얼](overview/md-dual-bridge.md) · [KMS/DB](overview/kms-db-phases.md) · [CRM 유입](overview/crm-intake.md) · [Studio 채널](overview/studio-channels.md) · [3트랙 훅](overview/growth-hooks.md)

## 규약

| 경로 | 용도 |
|------|------|
| `docs/overview/` | 확정 맵·기획 잠금 |
| `docs/handoff/` | 인수인계·세션 요약 |
| `docs/decisions/` | ADRs |
| `docs/library/` | 참고 라이브러리 |

- 원본 SSOT는 Git. Obsidian은 미러·열람용.
- `docs/`는 빌드 exclude 유지.
- 고객데이터·자격증명·재무 문서는 공개 레포에 넣지 않는다.
- 코딩·제작은 기획 완료 선언 전까지 보류.
- HTML 기획서는 열람용 병행본. 내용 정본은 `.md`.

## 현재 전략 (2026-09)

- 범용 크루즈 백본 + 럭셔리. 지식층이 상담 차별화 핵.
- Claude/과거 산출물은 선택적 참고. PM은 개발팀.
