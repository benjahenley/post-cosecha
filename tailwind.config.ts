import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
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
      filter: {
        "white-to-transparent": "brightness(0) invert(1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInLeftBounce: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "60%": { opacity: "1", transform: "translateX(10px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marqueeSmall: "marquee 25s linear infinite",
        fadeIn: "fadeIn 1s ease-out",
        fadeUp: "fadeUp 1s ease-in",
        fadeDown: "fadeDown 1s ease-out",
        fadeLeft: "fadeLeft 1s ease-out",
        fadeRight: "fadeRight 1s ease-out",
        fadeInLeftBounce: "fadeInLeftBounce 0.8s ease-out forwards",
        slideUp: "slideUp 0.6s ease-out forwards",
      },
    },
  },
};
export default config;
