/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 */
interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export type { ErrorFallbackProps };
