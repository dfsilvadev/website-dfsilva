'use client';

const defaultTheme = {
  grid: {
    sm: '54rem',
    md: '72rem',
    lg: '96rem',
    xlg: '114rem',
    xxlg: '132rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500
    },
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.4rem',
      xxlarge: '4.8rem',
      huge: '0.56em'
    }
  },
  colors: {
    white: '#FFF',
    black: {
      main: '#040506'
    },
    text: {
      heading: '#23292e',
      main: '#606060'
    },
    primary: {
      main: '#524BF2',
      dark: '#040506'
    },
    purple: {
      main: '#3A3051',
      500: '#AE95EF',
      700: '#CD62C5',
      800: '#3A3051'
    },
    gray: {
      50: '#F5F5F5',
      100: '#F2F2F2',
      200: '#C7CFD9',
      700: '#383838'
    },
    green: {
      main: '#43F0C7'
    },
    gradient: {
      base: 'rgb(207,235,255)',
      linear:
        'linear-gradient(90deg, rgba(82,75,242,1) 5%, rgba(221,81,131,1) 30%, rgba(207,235,255,1) 100%);'
    }
  },
  layers: {
    base: 10,
    menu: 30,
    overlay: 20,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const;

export default defaultTheme;
