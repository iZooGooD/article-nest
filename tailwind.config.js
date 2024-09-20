/** @type {import('tailwindcss').Config} */
export default {
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
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}