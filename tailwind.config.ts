import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        'img': '31.25rem',
      },
      dropShadow: {
        'img': '16px 16px 12px rgba(143, 30, 98, 0.5)'
      },
      colors: {
        'off-black': '#111111',
      },
      animation: {
        'pulse-light': 'pulse-light 2s infinite'
      },
      screens: {
        "3xl": "1920px",
      }
    },
    fontSize: {
      'xs': ['0.75rem', '1.2'],
      's': ['1rem', '1.2'],
      'm': ['1.5rem', '1.2'],
      'mx': ['2rem', '1.2'],
      'l': ['2.25rem', '1.2'],
      'xl': ['2.5rem', '1.2'],
      'xxl': ['4rem', '1.2'],
      'display': ['8rem', '1.2']
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
