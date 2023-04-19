/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      prompt: ["Prompt, sans-serif"],
      lato: ["Lato, sans-serif"],
    },
    extend: {
      colors: {
        portfolio: {
          background: "#1B1B1B",
          main: "#145051",
          sec: "#30004A",
          subtle: "#1C1C1E",
          main: {
            subtle: "#339799",
          },
          black: {
            text: "#989899",
          },
          white: {
            text: "#8A8A8E",
          },
        },
      },
    },
  },
  plugins: [],
};
