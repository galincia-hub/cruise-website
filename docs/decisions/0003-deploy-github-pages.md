# ADR 0003 — 배포 플랫폼 (GitHub Pages)

- Status: **accepted**
- Date: 2026-09-10
- Confirmed by: Kangsoo Hyun

## Context

Jekyll 정적 사이트(`cruise-website`). README는 처음부터 GitHub Pages를 전제로 했다. Netlify·Cloudflare Pages도 후보였으나, 푸시하면 웹에서 바로 확인 가능한 워크플로와 깃 SSOT 선호가 맞다. `_site/`는 빌드 산출물이라 추적하지 않는다.

## Decision

1. **배포 정본: GitHub Pages** (`galincia-hub/cruise-website`).
2. 소스는 Jekyll 루트. Actions 또는 Pages의 Jekyll 빌드로 발행. **Publish로 `_site`만 올리는 방식은 쓰지 않는다.**
3. Netlify/CF Pages는 필요 시 미리보기·실험용으로만 재검토 (별도 ADR).
4. 커스텀 도메인 `cruise.co.kr` 연결은 Pages 설정에서 진행.

## Consequences

- `_site/` gitignore·untrack 유지가 맞다.
- `docs/`는 `_config.yml` exclude 유지 (문서 허브, 사이트 URL로 노출 안 함).
- CI에 `jekyll build`가 없으면 Pages 설정을 점검한다.
