/**
 * 관련 기획서:
 * - /기획/라우팅_기획.md
 * - /기획/프로젝트_메인기획.md
 * - /기획/UI컴포넌트_기획.md
 */
import Footer from '@components/common/footer';
import Header from '@components/common/header';

function HomePage(): JSX.Element {
  return (
    <div className="h-full pt-[60px] pb-[80px] relative bg-gradient-to-b from-blue-50 to-indigo-100">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 md:py-12">
        <section className="mb-8 md:mb-12 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-5 md:p-8 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-indigo-800 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              환영합니다
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              저희 애플리케이션에 오신 것을 환영합니다. 혁신적인 기술과 세련된
              디자인으로 최고의 사용자 경험을 제공합니다. 지금 바로 다양한
              기능을 경험해보세요!
            </p>
          </div>
        </section>

        <section className="mb-8 md:mb-12 grid grid-cols-1 gap-4 md:gap-8">
          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-4 md:p-6 shadow-lg text-white transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 flex items-center">
              <span className="mr-2">✨</span> 주요 기능
            </h3>
            <ul className="space-y-1 md:space-y-3">
              <li className="flex items-center text-sm md:text-base">
                <span className="mr-2 text-yellow-300">➤</span> 반응형 디자인
              </li>
              <li className="flex items-center text-sm md:text-base">
                <span className="mr-2 text-yellow-300">➤</span> 모던 UI 컴포넌트
              </li>
              <li className="flex items-center text-sm md:text-base">
                <span className="mr-2 text-yellow-300">➤</span> 최적화된 성능
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-xl p-4 md:p-6 shadow-lg text-white transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 flex items-center">
              <span className="mr-2">🚀</span> 특별 혜택
            </h3>
            <ul className="flex flex-col space-y-2 md:space-y-3">
              <li className="flex items-center px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs md:text-base">
                <span className="mr-1 text-yellow-300">➤</span> 첫 가입 시 30일
                무료
              </li>
              <li className="flex items-center px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs md:text-base">
                <span className="mr-1 text-yellow-300">➤</span> 프리미엄 콘텐츠
                접근
              </li>
              <li className="flex items-center px-2 py-1 bg-white bg-opacity-20 rounded-full text-xs md:text-base">
                <span className="mr-1 text-yellow-300">➤</span> 맞춤형 서비스
                제공
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-4 md:p-6 shadow-lg text-white transform hover:rotate-1 hover:scale-105 transition-all duration-300">
            <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 flex items-center">
              <span className="mr-2">🔒</span> 보안 및 안정성
            </h3>
            <ul className="space-y-1 md:space-y-3">
              <li className="flex items-center text-sm md:text-base">
                <span className="mr-2 text-yellow-300">➤</span> 고급 암호화 기술
              </li>
              <li className="flex items-center text-sm md:text-base">
                <span className="mr-2 text-yellow-300">➤</span> 99.9% 업타임
                보장
              </li>
              <li className="flex items-center text-sm md:text-base">
                <span className="mr-2 text-yellow-300">➤</span> 실시간 백업
                시스템
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8 md:mb-12 bg-white rounded-2xl shadow-xl p-5 md:p-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-yellow-300 rounded-full -mr-8 md:-mr-16 -mt-8 md:-mt-16 opacity-20" />
          <div className="absolute bottom-0 left-0 w-24 md:w-48 h-24 md:h-48 bg-blue-300 rounded-full -ml-6 md:-ml-12 -mb-6 md:-mb-12 opacity-20" />

          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-800 relative z-10">
            고객 후기
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="italic text-gray-600 text-sm md:text-base">
                "이 애플리케이션은 제 업무 효율성을 200% 향상시켰습니다. 정말
                놀라운 경험입니다!"
              </p>
              <p className="font-semibold mt-2 text-indigo-800 text-sm md:text-base">
                김민수 - 개발자
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-pink-500">
              <p className="italic text-gray-600 text-sm md:text-base">
                "사용하기 쉽고 직관적인 인터페이스가 정말 마음에 듭니다. 강력
                추천합니다!"
              </p>
              <p className="font-semibold mt-2 text-pink-800 text-sm md:text-base">
                이지연 - 디자이너
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-6 md:p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            지금 시작하세요
          </h2>
          <p className="text-base md:text-xl text-indigo-100 mb-6 md:mb-8">
            특별한 혜택과 함께 지금 바로 가입하고 프리미엄 경험을 누려보세요. 첫
            30일 무료 체험 기회를 놓치지 마세요!
          </p>
          <div className="flex flex-col gap-3 justify-center">
            <button
              type="button"
              className="px-6 py-3 md:px-8 md:py-4 bg-yellow-400 text-indigo-900 rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-yellow-300 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              무료 체험 시작하기
            </button>
            <button
              type="button"
              className="px-6 py-3 md:px-8 md:py-4 bg-white bg-opacity-20 text-white rounded-full text-lg md:text-xl font-bold shadow-lg hover:bg-opacity-30 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              자세히 알아보기
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
