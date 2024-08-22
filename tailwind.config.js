/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "768px",
        lg: "1000px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5C3317",
          light: "#BA936A",
        },
        black: "#201001",
        white: "#FFFFFF",
      },

      fontFamily: {
        philosopher: ["Philosopher", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
