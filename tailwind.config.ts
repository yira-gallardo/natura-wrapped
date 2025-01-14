import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B060E3",
        secondary: "#E963D2",
        accent: "#F35866",
        warning: "#FD5F54",
        highlight: "#FCD96C",
        highlightBg: "#e0c15b",
        background: "#e8e7f7",
      },
    },
  },
  plugins: [],
} satisfies Config;
