/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kite': {
          blue: '#387ed1',
          'dark-blue': '#1f4e8c',
          green: '#00b386',
          red: '#ff4d4d',
          bg: '#f5f5f5'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}