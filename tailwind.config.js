/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Background: "var(--bg-color)",
        TextColor: "var(--text-color)",
        AccentPrimary: "var(--accent-primary)",
        AccentSecondary: "var(--accent-secondary)",
      },
    },
    fontFamily: {
      Accent: "Accent",
      Roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
  darkMode: 'class',
};
