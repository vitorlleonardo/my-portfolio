/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/build/*.{html,js}", "./src/build/js/*.{html,js}", './index.html',],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}