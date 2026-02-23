import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:     "#F5F4F0",
        white:  "#FFFFFF",
        ink:    "#0A0A0A",
        ink2:   "#1A1A1A",
        muted:  "#888888",
        faint:  "#DADAD6",
        orange: "#FF4D00",
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        mono:    ["IBM Plex Mono", "monospace"],
        body:    ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
