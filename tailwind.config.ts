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
        brand: {
          50: '#effaf3',
          100: '#d8f2e0',
          200: '#b3e4c3',
          300: '#80cf9d',
          400: '#4cb375',
          500: '#22a05a',
          600: '#168047',
          700: '#11653a',
          800: '#0e5030',
          900: '#0b3f27',
        },
        ink: {
          50: '#f7f8f9',
          100: '#eceef1',
          200: '#d5d9df',
          300: '#b1b8c2',
          400: '#7c8694',
          500: '#5a6473',
          600: '#434b58',
          700: '#363c47',
          800: '#1f242c',
          900: '#12161c',
        },
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
