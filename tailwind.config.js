const { screens } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      iphone5: { min: "300px", max: "374px" },
      galaxyS5: { min: "360px", max: "374px" },
      "custom-h-full": { raw: "(min-height: 700px)" },
      ...screens,
      "3xl": "1920px",
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
      fontSize: {
        Ten: "0.625rem",
        Fourteen: "0.875rem",
        Eight: "0.5rem",
        Twenty: "1.25rem",
      },
      colors: {
        "Greyish-brown": "#4a4a4a",
        "Dark-cream": "#f4f4f4",
        Cream: "#fafafa",
        "Blue-700": "#273476",
        "Blue-600": "#6673b8",
        "Blue-500": "#acb1ca",
        "Blue-400": "#ccd0e7",
        "Blue-300": "#dcdfef",
        "Blue-200": "#e5e7f3",
        "Blue-100": "#f5f6fd",
        "Light-blue": "#009ccb",
        "Light-green": "#00c585",
        Green: "#109621",
        Red: "#b00020",
        Orange: "#fc8b44",
      },
      spacing: {
        Eighteen: "1.125rem",
        Fourteen: "0.875rem",
        TwentyTwo: "1.375rem",
      },
      zIndex: {
        "-10": "-10",
        60: "60",
      },
      boxShadow: {
        Primary: "0 3px 6px 0 rgba(0, 0, 0, 0.27)",
        "Blue-400": "0 0 8px 0 rgba(204, 208, 231, 0.7)",
        "landing-first": "-16px 3px 6px 0 rgba(26, 36, 63, 0.1)",
        "landing-second": "16px 3px 6px 0 rgba(0, 0, 0, 0.1)",
        pricing: "0 3px 6px 0 rgba(39, 52, 118, 0.48)",
        navigation: "0 3px 6px 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        collapse: {
          "0%": {
            height: "0",
          },
          "100%": {
            height: "100%",
          },
        },
      },
      animation: {
        collapse: "collapse 1s linear",
      },
      backgroundImage: {
        hero: "url('/images/landing-hero.png')",
        features: "url('/images/features-background.png')",
        plans: "url('/images/plans-background.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
