/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1440px',
    },
    container: {
      center: true,
      screens: {
        sm: '288px',
        md: '704px',
        lg: '1312px',
      },
    },
    colors: {
      text: '#121417',
      gray: '#121417B2',
      lightGray: '#8A8A89',
      grayBGN: '#F8F8F8',
      green: '#38CD3E',
      accent: 'var(--accent-color)',
      background: 'var(--background-color)',
    },
  },
};

export const plugins = [
  function ({ addComponents }) {
    addComponents({
      '.teachers-container': {
        width: '100%',
        minHeight: '100vh',
        padding: '24px 10px 16px',
        backgroundColor: '#f8f8f8',
        '@screen md': {
          padding: '44px 32px 16px',
        },
        '@screen lg': {
          padding: '44px 128px 16px',
        },
      },
      '.radio-input': {
        display: 'none',
      },
      '.radio-indicator': {
        marginRight: '8px',
        width: '20px',
        height: '20px',
        border: '2px solid rgba(4, 4, 5, 0.2)',
        borderRadius: '50%',
        backgroundColor: '#fff',
      },
      '.radio-input:checked + .radio-indicator': {
        backgroundColor: '#f4c550',
        borderColor: '#f4c550',
        boxShadow: 'inset 0 0 0 3px #ffffff',
      },
    });
  },
];
