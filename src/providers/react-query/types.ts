import type { DehydratedState } from '@tanstack/react-query';

export interface QueryProviderProps {
  children: React.ReactNode;
  dehydratedState?: DehydratedState;
}
