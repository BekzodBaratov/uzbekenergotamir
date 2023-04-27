const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#FCFCFD",
        "blue-primary": "#1EB53A",
        "black-primary": "#1F1F1F",
        "secondary-color": "#5B5A60",
        "primary-color": "#1E1E1E",
      },
      backgroundImage: {
        yellowish: "linear-gradient(92.63deg, #F3C140 0%, #FBEA74 53.27%, #F6D251 116.73%)",
        bluer: "linear-gradient(95.77deg, #067AF2 -46.87%, #07ABCF 146.46%)",
      },
      fontFamily: {
        gilory: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
