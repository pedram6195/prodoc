const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      xxs: "280px",
      xs: "360px",
      ...screens,
    },
    extend: {
      fontFamily: {
        Thin: ["Thin"],
        ExtraLight: ["ExtraLight"],
        Light: ["Light"],
        Medium: ["Medium"],
        SemiBold: ["SemiBold"],
        ExtraBold: ["ExtraBold"],
        UltraBold: ["UltraBold"],
        Black: ["Black"],
        Heavy: ["Heavy"],
        SuperHeavy: ["SuperHeavy"],
        Bold: ["Bold"],
        Regular: ["Regular"],
        EnBlack: ["EnBlack"],
        EnRegular: ["EnRegular"],
        EnBold: ["EnBold"],
        EnExtraBold: ["EnExtraBold"],
        EnExtraLight: ["EnExtraLight"],
        EnHeavy: ["EnHeavy"],
        EnLight: ["EnLight"],
        EnMedium: ["EnMedium"],
        EnSemiBold: ["EnSemiBold"],
        EnSuperHeavy: ["EnSuperHeavy"],
        EnThin: ["EnThin"],
        EnUltraBold: ["EnUltraBold"],
      },
      colors: {
        "greyish-brown": "#4a4a4a",
        "dark-cream": "#f4f4f4",
        Cream: "#fafafa",
        "blue-500": "#273476",
        "blue-400": "#6673b8",
        "blue-300": "#acb1ca",
        "blue-200": "#dcdfef",
        "blue-100": "#f5f6fd",
        "light-blue": "#009ccb",
        "light-green": "#00c585",
        Green: "#109621",
        Red: "#b00020",
        Orange: "#fc8b44",
        "greyish-blue": "#ccd0e7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
