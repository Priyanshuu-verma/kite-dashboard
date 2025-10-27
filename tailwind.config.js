module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kite-blue': '#387ed1',
        'kite-dark-blue': '#1f4e8c',
        'kite-green': '#00b386',
        'kite-red': '#ff4d4d',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}