/**
 * 관련 기획서:
 * - /기획/ChromeAPI_기획.md
 */
// https://developer.chrome.com/docs/extensions/reference/api/tabs

const isLocalDevelopment = !chrome?.tabs;

/**
 * 특정 URL을 새 탭에서 열기
 * @param url
 */
export const openUrlInNewTab = (url: string): void => {
  if (isLocalDevelopment) {
    window.open(url);
  } else {
    chrome.tabs.create({ url });
  }
};

/**
 * 현재 탭의 url 가져오기
 * @param callback
 */
export function getCurrentTabUrl(cb: (url: string) => void): void {
  if (isLocalDevelopment) {
    const url = window.location.href;
    cb(url);
  } else {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      if (activeTab?.url) cb(activeTab?.url || '');
      else cb('');
    });
  }
}
