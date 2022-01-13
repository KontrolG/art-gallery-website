module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Big Shoulders Display", "sans-serif"]
    },
    extend: {
      backgroundColor: {
        white: "#FBFAF8",
        black: "#151515",
        emphasis: "#D5966B"
      },
      colors: {
        white: "#EFEFEF",
        black: "#151515",
        "black-lighten": "#6D6C6A",
        emphasis: "#D5966B"
      }
    }
  }
};
