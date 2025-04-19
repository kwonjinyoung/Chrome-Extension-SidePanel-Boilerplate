import { ErrorFallback } from '@components/error/errorFallback';
import router from '@pages/index';
import { OverlayProvider } from '@providers/overlay';
import { QueryProvider } from '@providers/react-query';
import ThemeProvider from '@providers/theme';
/**
 * 관련 기획서:
 * - /기획/프로젝트_메인기획.md
 * - /기획/라우팅_기획.md
 * - /기획/상태관리_기획.md
 */
import { ErrorBoundary } from 'react-error-boundary';
import { RouterProvider } from 'react-router-dom';

const dehydratedState =
  (window as any).__REACT_QUERY_DEHYDRATED_STATE__ ?? undefined;

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <OverlayProvider>
          <QueryProvider dehydratedState={dehydratedState}>
            <RouterProvider router={router} />
          </QueryProvider>
        </OverlayProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
