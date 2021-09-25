module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: "#332f2e",
        white: "#ffffff",
        gray: "#9e9e9f",
        bgGray: "#f4f4f4",
        red: "#c40f14",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
