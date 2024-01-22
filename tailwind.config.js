/** @type {import('tailwindcss').Config} */
// const plugin = require('tailwindcss/plugin')
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans'],
        syne: ['Syne'],
      },
      colors: {
        'cyan-presale-theme': '#0CEEAC',
        'purple-presale-theme': '#D528FE',
        'pink-presale-theme': '#ffabfc',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'background': "url('src/assets/utils/background.png')",
      },
    },
  },
  // plugins: [require('flowbite/plugin'), plugin(function ({ addVariant }) {
  //   addVariant('mobile-only', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
  // }),],
};
