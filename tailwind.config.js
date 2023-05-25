module.exports = {
  important: true,
  content: ['./src/modules/**/*.{js,ts,jsx,tsx}', './src/common/**/*.{js,ts,jsx,tsx}'],
  media: false,
  theme: {
    extend: {
      colors: {
        'bd-colors': '#F8C9CB',
        'color-active': 'rgba(252, 134, 134, 0.1)',
        'bd-colors2': 'rgba(0, 0, 0, 0.15)',
        primary: '#fc7679',
        'primary-strong': '#cb6669',
        'primary-strong-100': '#FE9699',
        'primary-light-100': '#FCEAEA',
        pink: {
          DEFAULT: '#FE9699',
        },
        gray: {
          DEFAULT: '#dddddd',
          darker: '#555555',
        },
        orange: {
          DEFAULT: '#FCAD0E',
        },
        black: {
          lighter: '#4D4D4D',
          'lighter-1': '#777777',
        },
      },
      boxShadow: {
        'cus-sndl': '0 12px 201px 0 rgba(0,0,0,.06)',
      },
      height: {
        50: '50px',
      },
      fontFamily: {
        sf_pro: ['SF Pro Display'],
        noto_sans: ['Noto Sans'],
      },
    },
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
  },
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
};
