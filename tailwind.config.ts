import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B8956A',
        secondary: '#E4C5A0',
        accent: '#D4A574',
        surface: '#F7F2ED',
      },
    },
  },
  plugins: [],
};

export default config;