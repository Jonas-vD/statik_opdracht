module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        korolev: ["korolev", "sans-serif"],
      },
    },
    colors: {
      primary: "#f16856",
      secondary1: "#f7b9a8",
      secondary2: "#ebbb5b",
      secondary3: "#88cab9",
      text: "#000000",
      white: "#ffffff",
    },
    screens: {
      mobile: "576px",
      tablet: "768px",
      laptop: "1200px",
      desktop: "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
