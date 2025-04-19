/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 * - /기획/상태관리_기획.md
 */
import { OverlayProvider as TossOverlayProvider } from '@toss/use-overlay';
import type { OverlayProviderProps } from './types';

export function OverlayProvider(props: OverlayProviderProps): JSX.Element {
  const { children } = props;

  return <TossOverlayProvider>{children}</TossOverlayProvider>;
}

export default OverlayProvider;
