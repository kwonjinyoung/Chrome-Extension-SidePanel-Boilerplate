/**
 * 관련 기획서:
 * - /기획/상태관리_기획.md
 * - /기획/프로젝트_메인기획.md
 */
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import type { QueryProviderProps } from './types';

export function QueryProvider(props: QueryProviderProps): JSX.Element {
  const { children, dehydratedState } = props;
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            throwOnError: true,
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 1, // 1분 이내에는 캐시된 결과를 사용
          },
          mutations: {
            throwOnError: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
