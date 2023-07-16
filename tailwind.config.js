/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/**/*.{html,js,hbs}"],
    theme: {
      extend: {},
    },
    plugins: [
        require('tailwindcss'),
    ],
  }