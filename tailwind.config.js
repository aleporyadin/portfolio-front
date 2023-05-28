module.exports = {
  darkMode: "media",
  plugins: [], // or 'media' or 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    colors: {
      black: {
        10: "var(--color-black-10)",
        20: "var(--color-black-20)",
        30: "var(--color-black-30)",
        40: "var(--color-black-40)",
        50: "var(--color-black-50)"
      },
      blue: {
        10: "var(--color-blue-10)",
        20: "var(--color-blue-20)",
        30: "var(--color-blue-30)",
        40: "var(--color-blue-40)"
      },
      gray: {
        10: "var(--color-gray-10)",
        20: "var(--color-gray-20)",
        30: "var(--color-gray-30)",
        40: "var(--color-gray-40)",
        50: "var(--color-gray-50)",
        60: "var(--color-gray-60)",
        70: "var(--color-gray-70)",
        80: "var(--color-gray-80)",
        90: "var(--color-gray-90)",
        100: "var(--color-gray-100)"
      },
      green: "var(--color-green)",
      link: "#38bdf8",
      maroon: {
        10: "var(--color-maroon-10)",
        20: "var(--color-maroon-20)"
      },
      primary: {
        10: "var(--color-primary-10)",
        20: "var(--color-primary-20)"
      },
      purple: {
        10: "var(--color-purple-10)",
        20: "var(--color-purple-20)"
      },
      red: "var(--color-red)",
      secondary: {
        10: "var(--color-secondary-10)",
        20: "var(--color-secondary-20)",
        30: "var(--color-secondary-30)",
        40: "var(--color-secondary-40)",
        50: "var(--color-secondary-50)",
        60: "var(--color-secondary-60)",
        70: "var(--color-secondary-70)"
      },

      sky: {
        400: "var(--color-sky-400)"
      },
      white: "var(--color-white)"
    },
    extend: {},
    fontFamily: {
      DMSerif: ["DM Serif Display", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      body: ["Barlow", "sans-serif"],
      display: ["Barlow", "sans-serif"]
    },
    fontSize: {
      base: ["14px", "21px"],
      lg: ["16px", "28px"],
      sm: ["12px", "15px"],
      xl: ["18px", "32px"],
      xl2: ["20px", "34px"],
      xl3: ["22px", "36px"],
      xl4: ["24px", "38px"],
      xl5: ["26px", "40px"],
      xl6: ["28px", "40px"],
      xl7: ["45px", "50px"],
      xl8: ["50px", "25px"],
      xs: ["10px", "12px"]
    },
  },
  variants: {
    extend: {}
  },
};
