module.exports = {
  mode: "jit",
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
      spacing: {
        // px単位
        ...[...Array(120)].reduce((m, _, i) => {
          m[`${i}px`] = `${i}px`;
          return m;
        }, {}),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
