/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    screens: {
      sm: '375px',
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
      background: '#FBE9BA',
      gray: '#121417B2',
      grayBGN: '#F8F8F8',

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
export const plugins = [];
