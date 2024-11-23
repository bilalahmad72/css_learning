/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.{html,js}", "./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whiteTransparent: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [],
};
