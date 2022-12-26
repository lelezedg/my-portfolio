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
        active: "#2C7CED",
        "primary-dark": "#3A3F46",
        "blue-100": "#F2FBFF",
        "blue-200": "#D9F2FF",
        "blue-300": "#BFE9FF",
        "blue-400": "#1E6186",
        "purple-100": "#F6F2FF",
        "purple-200": "#E5D9FF",
        "orange-100": "#FFF9F2",
        "orange-200": "#FFECD9",
        "green-100": "#F4FFF2",
        "green-200": "#DFFFD9",
        "green-300": "#C9FFBF",
        "green-400": "#28861E",
        "pink-100": "#FFF2F2",
        "pink-200": "#FFD9D9",
        "gray-100": "#E3E5E8",
        "gray-200": "#9FA8B1",
        "gray-300": "#606A75",
        "gray-400": "#3A3F46",
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
