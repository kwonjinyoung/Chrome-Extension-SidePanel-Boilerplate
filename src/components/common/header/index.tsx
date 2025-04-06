import { useCallback, useEffect } from 'react';

const Header = (): JSX.Element => {
  // 사용자 정보 가져오기
  const getUserInfo = useCallback(() => {
    // 여기에 사용자 정보를 가져오는 로직을 작성합니다.
  }, []);

  // 자동 로그인 체크 함수
  const checkAutoLogin = useCallback(() => {
    // 여기에 자동 로그인 체크 로직을 작성합니다.
  }, []);

  const handleOnLogout = useCallback(() => {
    // 여기에 로그아웃 처리 로직을 작성합니다.
  }, []);

  // 로그인 상태 확인 및 사용자 정보 가져오기
  useEffect(() => {
    // 여기에 로그인 상태 확인 및 사용자 정보 호출 로직을 작성합니다.
  }, []);

  return (
    <header className="flex px-5 py-2.5 justify-between items-center absolute top-0 z-10 bg-white h-[60px] w-full">
      <div className="flex items-center shrink-0">
        <img src="/icon.png" className="w-[40px] h-[40px]" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
