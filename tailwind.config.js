/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/**/*.{html,js,hbs}"],
    theme: {
      extend: {
        fontFamily: {
          roboto : ['Roboto Slab', 'serif'] // Ensure fonts with spaces have " " surrounding it.
        },
      },
    },
    plugins: [
        require('tailwindcss'),
    ],
  }