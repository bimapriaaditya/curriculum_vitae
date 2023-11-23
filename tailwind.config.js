/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '868px',
          lg: '924px',
          xl: '1080px',
          '2xl': '1336px',
        },
      }
    },
  },
  plugins: [],
}