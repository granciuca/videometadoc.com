/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-gray": "#f2f2f2",
        "light-gray-1": "rgba(242, 242, 242, 0.6)",
        "light-gray-2": "#cccccc",
        "darken-gray": "#999999",
        "blue-1": "#1a8cff",
        "orange-1": "#ff8c1a",
        "blue-light": "#3399ff",
        "black-blue": "#2B3442",
        golden: "#ffaa00",
        link: "#3399ff",
        "link-light": "#66b3ff",
        "green-1": "#339966",
        "green-2": "#009933",
        "darken-blue": "#00264d",
        "dark-transparent": "rgba(0, 0, 0, 0.4)",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
    fontSize: {
      sm: "14px",
      mobile: "16px",
      desktop: "18px",
      xl: "25px",
      "2xl": "35px",
      "3xl": "45px",
      "4xl": "55px",
      "5xl": "65px",
    },
    lineHeight: {
      sm: "19px",
      mobile: "25px",
      desktop: "27.5px",
      "2xl": "45px",
      "3xl": "55px",
      "4xl": "65px",
      "5xl": "80px",
    },
    screens: {
      "2xl": { max: "1400px" },

      xl: { max: "1250px" },

      lg: { max: "1100px" },

      "2md": { max: "890px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      xs: { max: "484px" },

      xxs: { max: "374px" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
