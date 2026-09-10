# ADR 0001 — 미디어 저장 (초안, 사용자 확인 전)

- Status: proposed
- Date: 2026-09-10

## Context

Jekyll 정적 사이트. 소규모 팀. 상품·선사 이미지가 늘 예정. 영상은 자체 호스팅 부담이 큼.

## Decision (제안)

1. **영상**: YouTube(기본) 임베드. 필요 시 Vimeo. 레포·오브젝트 스토리지에 원본 영상 두지 않음.
2. **이미지 원본/웹 배포 파일**: **Cloudflare R2** (+ 공개 버킷 또는 커스텀 도메인 CDN).
3. **온더플라이 리사이즈가 급하면**: Cloudflare Images 또는 Cloudinary를 R2 앞에 추가 (1단계는 R2만으로도 가능).
4. **레포**: `assets/`에는 파비콘·로고 등 소량만. 상품 사진은 URL 참조.
5. **스테이징**: 제작 중 임시본은 Google Drive / 로컬. 확정분만 R2.

## Consequences

- git 비대화 방지, Claude↔개발팀 핸드오프는 문서·코드 중심.
- R2 계정·버킷·공개 URL 규칙(`images.cruise.co.kr/...` 등)은 착수 시 설정.
- 대안: Cloudinary 올인원(변환 편함, 트래픽 과금 주의).

## Not decided yet

배포 플랫폼(Pages/CF Pages/Netlify), 색상 토큰, 문의 백엔드.
