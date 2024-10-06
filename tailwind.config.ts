import { tree } from "next/dist/build/templates/app-page";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        bg: "background-color",
        text: "color",
      },
      colors: {
        "sky-yellow": "#F8F9E8",
        "leaf-green": "#A2D149",
        "dark-green": "#38761D",
        "soil-brown": "#2A2A2A",
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "#FFFFFF",
        lightGray: "#F7F7F7",
        Gray: "#D4D4D4",
        mediumGray: "#B0B0B0",
        darkGray: "#333333",
        primary: "#dc394e",
        secondary: "#4B9CD3",
      },
      fontFamily: {
        sans: ["var(--font-general-sans)", "sans-serif"],
        clash: ["var(--font-clash-display)", "sans-serif"],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marqueeSmall: "marquee 8s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
