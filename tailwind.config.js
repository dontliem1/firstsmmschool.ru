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
    },
    extend: {
      colors: colors,
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
