import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
      },
      fontFamily: {
        serif: ['Crimson Pro', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeIn': 'fadeIn 1s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
    },
  },
  plugins: [],
};
export default config;
