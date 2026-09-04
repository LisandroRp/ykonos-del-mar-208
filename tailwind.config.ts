import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f4f3f0",
        paperWarm: "#f3f1ed",
        ink: "#202020",
        muted: "#77746e",
        line: "#efede9"
      },
      boxShadow: {
        card: "0 3px 14px rgba(0,0,0,.045)",
        feature: "0 9px 30px rgba(0,0,0,.10)"
      }
    }
  },
  plugins: []
};

export default config;
