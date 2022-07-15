module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light_tertiary: "#dfddda",
        light_secondary: "#d0cec9",
        light_primary: "#c9c6c0",
        dark_primary: "#202225",
        dark_secondary: "#2f3136",
        dark_tertiary: "#36393f",
      },
      backgroundImage: {
        "header-day": "url('/src/assets/img/day1.png')",
        /* "header-day":
          "url('https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg')", */
        "header-night": "url('/src/assets/img/night1.png')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
