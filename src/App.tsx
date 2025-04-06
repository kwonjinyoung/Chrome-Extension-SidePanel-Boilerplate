import { ErrorFallback } from '@components/error/errorFallback';
import router from '@pages/index';
import { OverlayProvider } from '@providers/overlay';
import { QueryProvider } from '@providers/react-query';
import ThemeProvider from '@providers/theme';
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
