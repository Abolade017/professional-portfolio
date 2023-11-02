/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          'blue': '#0095C3',
          'gray': '#636363',
          'white': '#F8F8F8'
        }
      },
    },
  },
  plugins: [],
}

