/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    screens:{
      'sm': '576px',

      'md': '960px',

      'lg': '1440px',
    },
    extend: {
      screens:{
        'xs': '344px',
      },
      fontFamily: {
        dmserif: ['"DM Serif Text', 'sans-serif'],
        quando: ['"Quando"', 'serif'],
        fanwood: ['"Fanwood Text"', 'serif'],  
        hubballi: ['"Hubballi"', 'serif'],  
      }
    }
  },
  plugins: []
}
