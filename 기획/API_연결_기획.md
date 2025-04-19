이 기획서는 외부 API 연결에 대한 기획서입니다.
완료된 이슈는 ✅, 아직인 경우 ❌ 아이콘을 사용 합니다.
[✅] API 서비스 구현
[✅] API URL 설정
[✅] axios 설정
[❌] API 호출 및 데이터 관리

[연관 기획서]
 - [:Parent:] /기획/프로젝트_메인기획.md
 - [:Rel:] /기획/ChromeAPI_기획.md

[연관 폴더와 파일]
 - src/providers/api/index.ts
 - .env
 - webpack.config.js

[핵심 주제]
 - [✅] API 연결 설정: API 서버 주소 및 포트 설정
 - [✅] Axios 기반 통신 인터페이스 구현
 - [✅] 인증 토큰 처리: 요청 헤더에 인증 토큰 포함
 - [✅] 오류 처리: API 응답 오류 처리 방식
 - [❌] 데이터 캐싱: react-query 활용한 데이터 캐싱

[Tasks]
 - [✅] API 서버 주소 .env 파일 설정: bfc7adb7399190aa84ff30c25400175df.asuscomm.com:2692
 - [✅] webpack 설정에 API 서버 프록시 추가
 - [✅] axios 인스턴스 생성 및 기본 설정 적용
 - [✅] 요청/응답 인터셉터 구현
 - [✅] API 서비스 객체 구현 (GET, POST, PUT, DELETE 메서드)
 - [❌] 데이터 요청 훅 구현
 - [❌] react-query와 통합
 - [❌] 로그인/인증 API 연동 