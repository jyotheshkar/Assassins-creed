/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        create: [ "Charm", "cursive"]
      }
    },
  },
  plugins: [
require('tailwind-scrollbar-hide')
  ],
}
