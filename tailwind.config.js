import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
import { forms } from 'tailwindcss';

export const mode = 'jit';
export const purge = ['./src/**/*.{js,ts,jsx,tsx}'];
export const darkMode = false;
export const theme = {
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  extend: {
    colors: {
      grape: '#FBC743',
      primary: '#FBC743',
      secondary: '#FBC743',
      tertiary: '#99a0a3',
      navy: '#131F32',
    },
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
    animation: {
      vote: 'vote 1s ease-in-out',
    },
    keyframes: {
      vote: {
        '0%, 100%': {
          transform: 'rotate(0deg)',
        },
        '25%': {
          transform: 'rotate(-30deg)',
        },
        '75%': {
          transform: 'rotate(30deg)',
        },
      },
    },
  },
};
export const variants = {};
export const plugins = [forms];
