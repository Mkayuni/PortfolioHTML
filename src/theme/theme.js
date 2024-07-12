import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ff3333',
    },
  },
  typography: {
    h2: {
      fontFamily: 'Arial Black, sans-serif',
    },
    body1: {
      fontFamily: 'Georgia, serif',
    },
  },
});

export default theme;
