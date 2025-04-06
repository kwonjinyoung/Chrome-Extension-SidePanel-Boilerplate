// https://tailwindcss.com/docs/theme
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      // 커스텀 변수 정의
      variables: {
        "--vh": "100%",
        "--radius": "0.5rem",
      },
    },
  },
  plugins: [],
};
