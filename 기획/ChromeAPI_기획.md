# Chrome API 연동 기획서

이 기획서는 Chrome Extension Sidepanel 애플리케이션과 Chrome API 간의 연동 방식, 사용 중인 API, 추상화 전략 및 향후 활용 계획에 대한 기획서입니다.
완료된 이슈는 ✅, 아직인 경우 ❌ 아이콘을 사용 합니다.

[✅] Manifest 설정 분석 완료
[✅] Background 스크립트 분석 완료
[✅] Storage API 래퍼 분석 완료
[✅] Tabs API 래퍼 분석 완료
[❌] API 연동 관련 테스트 코드 작성
[❌] 추가 API 활용 방안 구체화

[연관 기획서]
 - [:Parent:] /기획/프로젝트_메인기획.md

[연관 폴더와 파일]
 - public/manifest.json
 - public/background.js
 - src/providers/chrome/storage.ts
 - src/providers/chrome/storage.keys.ts (키 정의 파일, 현재 내용은 비어있을 수 있음)
 - src/providers/chrome/tabs.ts

[핵심 주제]
 - [✅] **Manifest 설정 (`manifest.json`):**
    - `manifest_version: 3`
    - `permissions: ["sidePanel"]` (사이드 패널 사용 권한 요청)
    - `background: { "service_worker": "background.js" }` (백그라운드 스크립트 지정)
    - `action: { "default_title": "Open Side Panel" }` (확장 프로그램 아이콘 설정)
    - `side_panel: { "default_path": "index.html" }` (사이드 패널에 로드될 기본 페이지 지정)
 - [✅] **백그라운드 스크립트 (`background.js`):**
    - `chrome.action.onClicked`: 확장 프로그램 아이콘 클릭 이벤트 리스너.
    - `chrome.sidePanel.open`: 클릭 시 현재 탭에 사이드 패널을 여는 기능 구현.
 - [✅] **Storage API (`src/providers/chrome/storage.ts`):**
    - `chrome.storage.local` API 사용.
    - 로컬 개발 환경(`localStorage`)과 확장 환경(`chrome.storage.local`) 간 호환성을 위한 래퍼 함수 제공 (`getFromStorage`, `setToStorage`, `removeFromStorage`, `clearStorage`).
    - 데이터 저장, 조회, 삭제, 전체 삭제 기능 추상화.
 - [✅] **Tabs API (`src/providers/chrome/tabs.ts`):**
    - `chrome.tabs.create`: 새 탭에서 URL 열기 기능 추상화 (`openUrlInNewTab`).
    - `chrome.tabs.query`: 현재 활성 탭의 URL 가져오기 기능 추상화 (`getCurrentTabUrl`).
    - 로컬 개발 환경(`window.open`, `window.location.href`) 호환성 제공.
 - [❌] **메시지 패싱:** 현재 `chrome.runtime.sendMessage` 또는 `chrome.tabs.sendMessage` 사용 흔적 없음. 필요시 백그라운드, 콘텐츠 스크립트, 사이드 패널 간 통신을 위해 구현 필요.
 - [❌] **콘텐츠 스크립트:** 현재 `manifest.json`에 정의된 콘텐츠 스크립트 없음. 웹 페이지와 직접 상호작용이 필요할 경우 추가 필요.
 - [❌] **테스트:** Chrome API 연동 부분에 대한 테스트 전략 부재. Mocking 등을 활용한 테스트 필요.

[Tasks]
 - [✅] `manifest.json`, `background.js`, `storage.ts`, `tabs.ts` 분석 완료.
 - [✅] Chrome API 연동 기획서 초안 작성 완료.
 - [❌] `storage.keys.ts`에 사용될 스토리지 키 상수 정의.
 - [❌] 필요한 경우 메시지 패싱 시스템 설계 및 구현.
 - [❌] 필요한 경우 콘텐츠 스크립트 설계 및 구현.
 - [❌] Chrome API Mock 라이브러리 등을 활용하여 API 연동 로직 테스트 코드 작성.
 - [❌] 활용 가능한 다른 Chrome API (예: `chrome.runtime`, `chrome.windows`, `chrome.scripting`) 검토 및 필요시 연동 계획 수립.

## 1. API 연동 개요

본 프로젝트는 Chrome 확장 프로그램의 기능을 구현하기 위해 다음과 같은 Chrome API를 활용합니다. API 직접 호출 대신, `src/providers/chrome/` 디렉토리 내에 래퍼(wrapper) 함수를 두어 로컬 개발 환경과의 호환성을 확보하고 API 사용을 추상화합니다.

## 2. 사용 중인 API 및 추상화

- **`chrome.action`**: 확장 프로그램 아이콘 클릭 이벤트를 감지하여 사이드 패널을 엽니다 (`background.js`).
- **`chrome.sidePanel`**: 확장 프로그램 아이콘 클릭 시 사이드 패널을 엽니다 (`background.js`). `manifest.json`에서 기본 경로를 설정합니다.
- **`chrome.storage.local`**: 확장 프로그램의 로컬 데이터를 저장하고 관리합니다. `storage.ts`에서 CRUD 및 clear 기능을 제공하는 래퍼 함수로 추상화되어 있습니다.
- **`chrome.tabs`**: 새 탭 열기, 현재 탭 정보 조회 등의 기능을 수행합니다. `tabs.ts`에서 필요한 기능을 래퍼 함수로 추상화하여 제공합니다.

## 3. 로컬 개발 환경 호환성

`storage.ts`와 `tabs.ts`의 래퍼 함수들은 `chrome` 객체의 존재 여부를 확인하여, `chrome` 객체가 없는 로컬 개발 환경에서는 각각 `localStorage`와 `window` 객체의 관련 메서드를 대신 사용하도록 구현되어 있습니다. 이를 통해 브라우저 환경에서도 기본적인 기능 테스트가 가능합니다.

## 4. 향후 계획 및 고려 사항

- **메시지 패싱:** 사이드 패널 UI, 백그라운드 스크립트, (필요시) 콘텐츠 스크립트 간의 데이터 교환이나 명령 전달이 필요할 경우 `chrome.runtime.sendMessage` 및 `chrome.runtime.onMessage`를 이용한 메시지 시스템을 구축해야 합니다.
- **콘텐츠 스크립트:** 현재 보고 있는 웹 페이지의 DOM에 접근하거나 상호작용해야 하는 기능이 필요하다면, `manifest.json`에 콘텐츠 스크립트를 등록하고 관련 로직을 구현해야 합니다.
- **추가 API 활용:** 프로젝트 기능 확장에 따라 `chrome.windows` (창 관리), `chrome.scripting` (스크립트 주입), `chrome.identity` (사용자 인증) 등 다른 Chrome API의 활용을 검토할 수 있습니다.
- **테스트:** Chrome API는 일반적인 브라우저 환경에서 사용할 수 없으므로, 테스트 시에는 Mocking이 필수적입니다. `jest-chrome`과 같은 라이브러리 사용을 고려하여 API 호출 부분을 테스트할 수 있는 환경을 구축해야 합니다.