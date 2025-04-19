/**
 * 관련 기획서:
 * - /기획/라우팅_기획.md
 * - /기획/프로젝트_메인기획.md
 * - /기획/UI컴포넌트_기획.md
 * - /기획/사이드패널_URL_기획.md
 */
import { useEffect, useState } from 'react';

function HomePage(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const targetUrl =
    'http://bfc7adb7399190aa84ff30c25400175df.asuscomm.com:2692';

  // iframe 로딩 상태 처리
  const handleIframeLoad = (): void => {
    setIsLoading(false);
  };

  const handleIframeError = (): void => {
    setIsLoading(false);
    setHasError(true);
  };

  // 컴포넌트 마운트 시 로딩 상태 시뮬레이션
  useEffect(() => {
    const timer = setTimeout(() => {
      // 5초 후에도 로딩이 완료되지 않으면 오류로 간주
      if (isLoading) {
        setIsLoading(false);
        setHasError(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <div className="h-full w-full flex flex-col">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4" />
            <p className="text-indigo-800 font-medium">로딩 중...</p>
          </div>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 z-10">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
            <h3 className="text-xl font-bold text-red-700 mb-3">연결 오류</h3>
            <p className="text-gray-700 mb-4">
              {targetUrl}에 연결할 수 없습니다. 다음을 확인해 주세요:
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
              <li>인터넷 연결 상태</li>
              <li>URL이 올바른지 여부</li>
              <li>서버가 실행 중인지 여부</li>
            </ul>
            <button
              type="button"
              onClick={(): void => window.location.reload()}
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
            >
              새로고침
            </button>
          </div>
        </div>
      )}

      <iframe
        src={targetUrl}
        className="flex-grow w-full border-none"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        title="External Content"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
}

export default HomePage;
