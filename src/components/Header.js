import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './header.css'; // Import the CSS file
import { useTheme as useAppTheme } from '../contexts/ThemeContext';

const Header = ({ toggleSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const { theme: appTheme, toggleTheme } = useAppTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = (sectionName) => {
    toggleSection(sectionName);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={handleMenuToggle}
          style={{ marginRight: '0.5cm' }}
        >
          {menuOpen ? <CloseIcon sx={{ color: theme.palette.mode === 'light' ? '#000' : '#fff' }} /> : <MenuIcon sx={{ color: theme.palette.mode === 'light' ? '#000' : '#fff' }} />}
        </IconButton>
        <Typography className="header-signature">
          Kayuni Moses
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={toggleTheme} sx={{ ml: 1 }}>
          {appTheme === 'dark' ? <Brightness7Icon sx={{ fontSize: 30, color: '#ffeb3b' }} /> : <Brightness4Icon sx={{ fontSize: 30, color: '#ffeb3b' }} />}
        </IconButton>
      </Toolbar>
      {menuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '64px', // Adjust based on the height of your AppBar
            left: 0,
            width: '100%',
            height: isSmallScreen || isTabletScreen ? 'calc(100vh - 64px)' : 'auto', // Adjust for small screens and tablets
            bgcolor: 'background.paper',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start', // Align items to the top
            padding: '20px 0',
            paddingTop: '64px', // Add padding to move items down
            transition: 'height 0.3s ease',
            overflow: 'hidden', // Prevent scrolling
          }}
          className="menu-container"
        >
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <Typography
              key={section}
              className="menu-item"
              onClick={() => handleMenuItemClick(section)}
              sx={{ cursor: 'pointer', my: 1 }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Typography>
          ))}
          <Typography
            className="menu-item"
            onClick={() => window.open('https://github.com/Mkayuni', '_blank')}
            sx={{ cursor: 'pointer', my: 1 }}
          >
            GitHub
          </Typography>
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
