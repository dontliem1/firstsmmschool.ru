const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    mode: "all",
    content: ["./**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '10vw'
      }
    },
    extend: {
      colors: colors,
    },
    screens: {
      'sm': '40em',
      'md': '48em',
      'lg': '64em',
      'xl': '80em',
      '2xl': '96em'
    }
  }
};
