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
        "blue-100": "#F2FBFF",
        "blue-200": "#D9F2FF",
        "purple-100": "#F6F2FF",
        "purple-200": "#E5D9FF",
        "orange-100": "#FFF9F2",
        "orange-200": "#FFECD9",
        "green-100": "#F4FFF2",
        "green-200": "#DFFFD9",
        "pink-100": "#FFF2F2",
        "pink-200": "#FFD9D9",
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
