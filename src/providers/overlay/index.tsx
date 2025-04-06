import { OverlayProvider as TossOverlayProvider } from '@toss/use-overlay';
import type { OverlayProviderProps } from './types';

export function OverlayProvider(props: OverlayProviderProps): JSX.Element {
  const { children } = props;

  return <TossOverlayProvider>{children}</TossOverlayProvider>;
}

export default OverlayProvider;
