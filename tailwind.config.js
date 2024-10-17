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
      accent: '#F4C550',
      accentLight: '#FFDC86',
      background: '#FBE9BA',
      gray: '#121417B2',
      lightGray: '#8A8A89',
      grayBGN: '#F8F8F8',
      green: '#38CD3E',

      theme1: {
        //yellow
        accent: '#F4C550',
        background: '#FBE9BA',
      },
      theme2: {
        //green
        accent: '#9FBAAE',
        background: '#CBDED3',
      },
      theme3: {
        //blue
        accent: '#9FB7CE',
        background: '#BFD6EA',
      },
      theme4: {
        //pink
        accent: '#E0A39A',
        background: '#F2C0BD',
      },
      theme5: {
        //red
        accent: '#F0AA8D',
        background: '#F3C8BA',
      },
    },
  },
};

export const plugins = [
  function ({ addComponents }) {
    addComponents({
      '.teachers-container': {
        width: '100%',
        paddingLeft: '10px',
        paddingRight: '10px',
        '@screen md': {
          paddingLeft: '32px',
          paddingRight: '32px',
        },
        '@screen lg': {
          paddingLeft: '128px',
          paddingRight: '128px',
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
