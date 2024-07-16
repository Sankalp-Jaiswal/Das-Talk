/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "primary" : '#112B3C',
        "secondary" : '#e0ae07',
        "light" : '#f5cc45'
      },
      animation: {
        'loop-scroll': 'loop-scroll 5s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      } 
    },
    screens: {
      '2xl': {max: '1535px'},

      xl: {max: '1279px'},

      lg: {max: '1023px'},

      md: {max: '767px'},

      sm: {max: '639px'},
    },
  }
  ,
  plugins: [],
};