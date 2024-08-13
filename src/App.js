import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './App.css';
import './styles.css';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [section, setSection] = useState('home');
  const { theme: appTheme, toggleTheme } = useTheme();

  // Create the MUI theme, ensuring text colors stay consistent
  const muiTheme = createTheme({
    palette: {
      mode: appTheme === 'dark' ? 'dark' : 'light',
      primary: {
        main: '#007bff',
      },
      secondary: {
        main: '#ff3333',
      },
      text: {
        primary: '#2c3e50', // Keep text color dark in both light and dark modes
      },
    },
    typography: {
      h2: {
        fontFamily: 'Arial Black, sans-serif',
        color: '#2c3e50', // Keep heading text color consistent
      },
      body1: {
        fontFamily: 'Georgia, serif',
        color: '#2c3e50', // Keep body text color consistent
      },
    },
  });

  const toggleSection = (sectionName) => {
    setSection(sectionName);
  };

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div className={`App ${appTheme}`}>
        <Header toggleSection={toggleSection} />
        <IconButton
          onClick={toggleTheme}
          style={{ position: 'fixed', top: 10, right: 10, zIndex: 1000 }}
        >
          {appTheme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
        {section === 'home' && <Home />}
        {section === 'about' && <About />}
        {section === 'projects' && <Projects />}
        {section === 'contact' && <Contact />}
        <Footer />
      </div>
    </MuiThemeProvider>
  );
}

const WrappedApp = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default WrappedApp;
