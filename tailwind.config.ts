import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F4F1EA",
        ink: "#111111",
        forest: "#173D32",
        rust: "#D86B45",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "clamp-xl": "clamp(3rem, 10vw, 9rem)",
        "clamp-lg": "clamp(2.5rem, 7vw, 6rem)",
        "clamp-md": "clamp(1.75rem, 4vw, 3rem)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
