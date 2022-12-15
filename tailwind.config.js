module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./icons/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#606A75",
        gray: "#9FA8B1",
        active: "#2C7CED",
        "primary-dark": "#3A3F46",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Poppins", "serif"],
    },
  },
  plugins: [],
};
