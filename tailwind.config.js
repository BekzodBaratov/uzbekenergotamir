const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#FCFCFD",
        "green-primary": "#1EB53A",
        "black-primary": "#1F1F1F",
        "blue-primary": "#079DDB",
        "secondary-color": "#5B5A60",
        "secondary-color2": "#7E868E",
        "secondary-color3": "#11263A",
        "primary-color": "#1E1E1E",
        "border-color": "#EBEBEB",
        "input-fill": "#FBFBFB",
        "input-focus": "#FFC727",
        "btn-primary": "#FBEA74",
        "footer-fill": "#1F262D",
        "footer-text": "#cccccc",
      },
      backgroundImage: {
        yellowish: "linear-gradient(92.63deg, #F3C140 0%, #FBEA74 53.27%, #F6D251 116.73%)",
        bluer: "linear-gradient(95.77deg, #707980 -46.87%, #707980 146.46%)",
        bgAbout: "url('/src/assets/images/about/about_bg.webp')",
        bgAbout2: "url('/src/assets/images/about/bg2.webp')",
        bgContact: "url('/src/assets/images/contact/contact_bg.webp')",
      },
      fontFamily: {
        gilory: ["Gilroy", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
