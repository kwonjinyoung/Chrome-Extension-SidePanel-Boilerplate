/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 */
import { Button } from '@components/ui/button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ErrorFallbackProps } from './types';

function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps): JSX.Element {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="m-auto bg-white max-w-[452px] min-w-[344px] w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-1 items-center">
          <h3 className="b1_18_semi text-gray-700 text-center">
            오류가 발생했습니다
          </h3>
          <p className="b3_14_reg text-gray-400 text-center">
            잠시 후 다시 시도해 주세요
          </p>
        </div>
        <Button variant="secondary" size={36} onClick={handleOnClick}>
          돌아가기
        </Button>
      </div>
    </div>
  );
}

export { ErrorFallback };
