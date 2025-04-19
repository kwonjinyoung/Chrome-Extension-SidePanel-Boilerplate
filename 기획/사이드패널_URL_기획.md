이 기획서는 크롬 익스텐션 사이드 패널에 특정 URL을 표시하는 기능에 대한 기획서입니다.
완료된 이슈는 ✅, 아직인 경우 ❌ 아이콘을 사용 합니다.
[✅] 크롬 사이드 패널에 특정 URL 표시 기능 구현

[연관 기획서]
 - [:Parent:] /기획/프로젝트_메인기획.md
 - [:Rel:] /기획/ChromeAPI_기획.md
 - [:Rel:] /기획/라우팅_기획.md

[연관 폴더와 파일]
 - src/pages/home/index.tsx
 - src/pages/index.tsx
 - public/manifest.json
 - public/background.js

[핵심 주제]
 - [✅] 사이드 패널에 iframe으로 특정 URL(bfc7adb7399190aa84ff30c25400175df.asuscomm.com:2692) 표시
 - [✅] 사이드 패널이 자동으로 열리도록 설정
 - [✅] URL 로딩 오류 처리

[Tasks]
 - [✅] 홈 페이지 컴포넌트에 iframe 추가하여 특정 URL 표시
 - [✅] 라우팅 설정에서 홈 페이지가 기본 페이지로 표시되도록 수정
 - [✅] iframe 스타일 조정으로 전체 화면에 적절히 표시
 - [✅] 네트워크 오류 발생 시 사용자에게 알림 제공 