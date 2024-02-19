/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'firstColor': '#ffe6e6',
        'secondColor': '#625050',
        'thirdColor': '#4d4dff',
        'fourthColor': '#23395c'
      }
    },
  },
  plugins: [],
}

