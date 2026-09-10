# 사이트 게이트 요약 (기획 잠금)

- **Status:** **locked (1차)**
- **Date:** 2026-09-10
- **Coding:** 미구현. 제작 재개 시 이 표 + ADR을 따른다.

| 게이트 | 결정 | ADR |
|--------|------|-----|
| 색상 | C 테라코타 (A&K형). 토큰 구조 재사용, 값만 교체(제작 시) | [0004](../decisions/0004-site-color-terracotta.md) |
| 문의 입구 | **카카오톡만**. 웹 폼 없음. 전화는 푸터 보조 | [0005](../decisions/0005-inquiry-kakao-primary.md) |
| 컨설턴트 | **플레이스홀더** 슬롯만. 실명·사진 없음. CTA->카톡 | [0006](../decisions/0006-consultant-placeholder.md) |
| 가격 표시 | **혼용**: 럭셔리/GSA=상담 문의, 대중·공개요금=시작가+디스클레이머 | [0007](../decisions/0007-price-display-hybrid.md) |

전체 맵: [system-map-v1.md](system-map-v1.md)

MD 듀얼·브릿지: [md-dual-bridge.md](md-dual-bridge.md) · [ADR 0008](../decisions/0008-md-dual-and-site-bridge.md)

## 다음 기획

KMS/DB -> 상담 / Supabase 전역 단계.
