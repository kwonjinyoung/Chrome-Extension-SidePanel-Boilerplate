# UI 컴포넌트 기획서

이 기획서는 Chrome Extension Sidepanel 애플리케이션의 UI 컴포넌트 구조, 설계 원칙 및 관리에 대한 기획서입니다.
완료된 이슈는 ✅, 아직인 경우 ❌ 아이콘을 사용 합니다.

[✅] 컴포넌트 폴더 구조 분석 완료
[❌] 각 컴포넌트 상세 명세 작성
[❌] 컴포넌트 디자인 시스템 정의
[❌] 컴포넌트 테스트 코드 작성

[연관 기획서]
 - [:Parent:] /기획/프로젝트_메인기획.md
 - [:Rel:] /기획/라우팅_기획.md (Layout 컴포넌트 연관)
 - [:Rel:] /기획/테마_기획.md (Theme Provider 연관, 추후 생성 예정)

[연관 폴더와 파일]
 - src/components/
 - src/components/common/ (공통 레이아웃 및 구조 컴포넌트)
    - src/components/common/layout/index.tsx
    - src/components/common/layout/styles.ts
    - src/components/common/header/index.tsx
    - src/components/common/footer/index.tsx
 - src/components/ui/ (재사용 가능한 기본 UI 요소)
    - src/components/ui/button/index.tsx
 - src/components/error/ (에러 관련 컴포넌트)
    - src/components/error/errorFallback/index.tsx
    - src/components/error/errorFallback/types.ts
 - src/helpers/cn/index.ts (클래스 이름 관리 유틸리티)
 - tailwind.config.js
 - postcss.config.js

[핵심 주제]
 - [✅] **컴포넌트 구조:**
    - `components/common`: 페이지 레이아웃, 헤더, 푸터 등 애플리케이션 전반의 구조를 잡는 컴포넌트.
    - `components/ui`: 버튼, 인풋, 모달 등 재사용 가능한 기본 UI 빌딩 블록. 원자적(atomic) 디자인 패턴 요소에 해당될 수 있음.
    - `components/error`: 에러 처리 관련 UI 컴포넌트 (예: ErrorBoundary Fallback).
 - [✅] **스타일링:** Tailwind CSS 기반, `clsx` 및 `tailwind-merge` 활용, 필요시 `styled-components` 사용 가능성 있음 (`styles.ts` 파일 존재).
 - [✅] **유틸리티:** `cn` 헬퍼 함수를 사용하여 조건부 및 병합된 클래스 이름 관리.
 - [❌] **디자인 시스템:** 일관된 디자인 언어 및 컴포넌트 라이브러리 구축 필요.
 - [❌] **접근성 (Accessibility):** 웹 접근성 표준 준수 필요.
 - [❌] **테스트:** 각 컴포넌트의 시각적 요소 및 기능에 대한 테스트 (Storybook, 유닛 테스트 등) 필요.

[Tasks]
 - [✅] `src/components/` 폴더 구조 분석 완료.
 - [✅] UI 컴포넌트 기획서 초안 작성 완료.
 - [❌] `common` 컴포넌트 (Layout, Header, Footer) 상세 기능 및 props 명세 작성.
 - [❌] `ui` 컴포넌트 (Button 등) 상세 기능, props, variants 명세 작성.
 - [❌] 새로운 UI 컴포넌트 추가 시 기획서 업데이트 및 디자인 시스템 반영.
 - [❌] 컴포넌트별 테스트 코드 작성 계획 수립 및 실행.
 - [❌] 웹 접근성 가이드라인 준수 여부 검토 및 개선.
 - [❌] 디자인 시스템 문서화 (Storybook 도입 고려).

## 1. 컴포넌트 구조 및 분류

- **`src/components/common/`**: 애플리케이션의 전체적인 구조와 레이아웃을 담당하는 컴포넌트들을 위치시킵니다. 페이지 컴포넌트에서 주로 사용됩니다.
    - `Layout`: 헤더, 메인 콘텐츠 영역, 푸터를 포함하는 기본 페이지 레이아웃.
    - `Header`: 애플리케이션 상단에 위치하는 헤더 영역. 로고, 네비게이션, 사용자 정보 등이 포함될 수 있습니다.
    - `Footer`: 애플리케이션 하단에 위치하는 푸터 영역. 저작권 정보, 추가 링크 등이 포함될 수 있습니다.
- **`src/components/ui/`**: 재사용 가능한 기본적인 UI 요소들을 위치시킵니다. 디자인 시스템의 기본 단위가 됩니다.
    - `Button`: 다양한 스타일과 기능을 가진 버튼 컴포넌트. (`class-variance-authority` 활용 가능성)
    - (향후 추가될 컴포넌트: Input, Modal, Dropdown, Checkbox 등)
- **`src/components/error/`**: 에러 발생 시 사용자에게 보여줄 UI 컴포넌트들을 위치시킵니다.
    - `ErrorFallback`: `react-error-boundary`와 함께 사용될 에러 대체 UI.

## 2. 스타일링 전략

- **주요 기술:** Tailwind CSS를 기본으로 사용하여 유틸리티 클래스 기반의 스타일링을 수행합니다.
- **클래스 관리:** `clsx`와 `tailwind-merge`를 `cn` 헬퍼 함수로 결합하여 조건부 클래스 적용 및 클래스 충돌 방지를 효율적으로 관리합니다.
- **커스텀 스타일:** 복잡하거나 동적인 스타일링이 필요한 경우 `styled-components` 또는 CSS Modules (`.module.css`) 사용을 고려할 수 있습니다 (`styles.ts` 파일 존재 확인됨).
- **테마:** `providers/theme/` 와 연계하여 테마(색상, 폰트 등)를 적용할 수 있도록 설계합니다.

## 3. 향후 계획

- **컴포넌트 상세 명세:** 각 컴포넌트의 props, 기능, 사용 예시 등을 명확하게 문서화합니다.
- **디자인 시스템 구축:** 일관된 디자인 가이드라인을 정의하고, 이를 기반으로 UI 컴포넌트를 확장 및 관리합니다. Storybook 도입을 적극 검토하여 컴포넌트 개발 및 테스트 환경을 개선합니다.
- **테스트 커버리지 확보:** 주요 컴포넌트에 대한 유닛 테스트 및 시각적 회귀 테스트를 작성하여 안정성을 높입니다.
- **접근성 개선:** 모든 컴포넌트가 웹 접근성 표준(WCAG)을 준수하도록 검토하고 필요한 부분을 개선합니다.