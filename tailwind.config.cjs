/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201c",
        muted: "#5d6b62",
        paper: "#f7f4ec",
        surface: "#fffdf7",
        forest: "#1f513f",
        mint: "#b7e5cf",
        coral: "#e8684a",
        gold: "#d8a63d",
        sky: "#9fc8e8"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(31, 81, 63, 0.14)",
        nav: "0 16px 50px rgba(23, 32, 28, 0.08)",
        action: "0 16px 40px rgba(23, 32, 28, 0.22)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif"
        ],
        serif: ["Georgia", "\"Times New Roman\"", "serif"]
      }
    }
  },
  plugins: []
};
