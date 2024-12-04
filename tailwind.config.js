/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "16.41px"],
        base: ["16px", "18.75px"],
        md: ["24px", "28.13px"],
        lg: ["32px", "37.5px"],
      },
      colors: {
        primary: "#432361",
        secondary: "#783EAD",
        accent: "#9B51E0",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#E0E0E0",
        dark: "#4F4F4F",
      },
      fontFamily: {
        gilroyRegular: ["gilroy-regular", "sans-serif"],
        gilroyMedium: ["gilroy-medium", "sans-serif"],
        gilroySemiBold: ["gilroy-semibold", "sans-serif"],
        gilroyBold: ["gilroy-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
