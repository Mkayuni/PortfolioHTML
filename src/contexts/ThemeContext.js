import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeConfig = createTheme({
    palette: {
      mode: theme, // Automatically switches between light and dark mode
      primary: {
        main: '#007bff',
      },
      secondary: {
        main: '#ff3333',
      },
      text: {
        primary: theme === 'dark' ? '#2c3e50' : '#2c3e50', // Keep text color consistent
      },
    },
    typography: {
      h2: {
        fontFamily: 'Arial Black, sans-serif',
        color: '#2c3e50', // Ensure the heading color stays the same
      },
      body1: {
        fontFamily: 'Georgia, serif',
        color: '#2c3e50', // Ensure the body text color stays the same
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={themeConfig}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
