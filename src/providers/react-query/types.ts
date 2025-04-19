/**
 * 관련 기획서:
 * - /기획/상태관리_기획.md
 * - /기획/프로젝트_메인기획.md
 */
import type { DehydratedState } from '@tanstack/react-query';

export interface QueryProviderProps {
  children: React.ReactNode;
  dehydratedState?: DehydratedState;
}
