/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        dark: '#0f172a'
      },
      screens: {
        '2xl':'1320px'
      },
      fontFamily: {
        'Poppins': ['Poppins']
      }
    },
  },
  plugins: [],
}

