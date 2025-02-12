/** @type {import('postcss-load-config').Config} */
const config = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
