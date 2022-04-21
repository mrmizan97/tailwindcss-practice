const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html,js}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: "#f5f5f5",
        DEFAULT:"#f6f6",
        dark:"#a5a5a5",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    screens: {
      sm: "540px",
      lg: "1000px",
      "4k": "2560px",
    },

    extend: {
      fontFamily: {
        sans: ["Robot", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
