import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        accent: {
          pink: "#f472b6",
          purple: "#a78bfa",
          teal: "#2dd4bf",
          blue: "#60a5fa",
          green: "#34d399",
          peach: "#fb7185",
          lavender: "#c084fc",
          mint: "#6ee7b7",
          rose: "#fda4af",
          sky: "#7dd3fc",
          cream: "#fef3c7",
          lilac: "#e9d5ff",
        },
        warm: {
          50: "#fef7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
        },
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "soft-lg": "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        elegant: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "elegant-lg": "0 10px 40px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;



