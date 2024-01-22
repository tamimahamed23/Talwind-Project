/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {

      screens: {
        'xs': '467px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}

