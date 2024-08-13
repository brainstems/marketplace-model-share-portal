import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "320px",
        "2xs": "400px",
        sm: "500px",
        "2sm": "600px",
        md: "768px",
        lg: "1080px",
        '2lg': "1200px",
        xl: "1440px",
        "2xl": "1500px",
        "3xl": "1650px",
      },
    },
  },
  plugins: [],
};
export default config;
