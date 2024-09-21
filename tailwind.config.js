/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#232145',
        'purple-light': '#1B1834',
        'purple-faded': '#a5aacf',
        'pink-dark': '#F41775',
        'grey-light': '#a5aacf',
        'grey-dark': '#181818',
        'neutral-dark': '#130F25',
        'neutral-light': '#F4F7FA',
        'black-faded': '#222222',
        'brand': '#FF1675'
        
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}