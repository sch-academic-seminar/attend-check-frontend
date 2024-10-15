import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#BF622F",
        alert: "#FF0000",
        success: "#20CF3C",
        gray000: "#FFFFFF",
        gray005: "#F2F2F2",
        gray010: "#E6E5E5",
        gray020: "#CDCCCC",
        gray040: "#9B9999",
        gray060: "#686666",
        gray080: "#363333",
        gray090: "#1D1A1A",
        gray100: "#040000",
      },
    },
  },
  plugins: [],
};
export default config;
