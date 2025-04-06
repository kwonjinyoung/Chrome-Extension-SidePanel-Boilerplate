import Header from '@components/common/header';
import { useNavigate } from 'react-router-dom';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <div className="flex flex-col items-center justify-center flex-1 px-4 py-8">
        <div className="max-w-md w-full text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">환영합니다!</h1>
          <p className="text-gray-600 mb-6">
            로그인하시면
            <br />
            다양한 기능을 이용하실 수 있습니다.
          </p>
          <div className="p-6 rounded-lg mb-4">
            <button
              onClick={handleLogin}
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
            >
              로그인
            </button>
          </div>
          <p className="text-sm text-gray-500">
            로그인에 문제가 있으신가요?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              고객센터
            </a>
            에 문의하세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
