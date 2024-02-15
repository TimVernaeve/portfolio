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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'body': ['Manrope', 'system-ui']
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
