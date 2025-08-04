/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-fg)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
      },
    },
  },
  plugins: [],
};
