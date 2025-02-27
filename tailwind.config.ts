
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#2A2A3580",
        input: "#2A2A3580",
        ring: "#30CD8F",
        background: "#17171F80",
        foreground: "#DAE5F0",
        primary: {
          DEFAULT: "#30CD8F",
          foreground: "#17171F",
        },
        secondary: {
          DEFAULT: "#222230",
          foreground: "#DAE5F0",
        },
        accent: {
          DEFAULT: "#30CD8F",
          foreground: "#17171F",
        },
        muted: {
          DEFAULT: "#222230",
          foreground: "#9DA2BD",
        },
        destructive: {
          DEFAULT: "#FF5A5A",
          foreground: "#DAE5F0",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-150px * 8))",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
