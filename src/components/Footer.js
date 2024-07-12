// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './footer.css';

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        textAlign: 'center',
        borderTop: 'none',
      }}
    >
      <Box className="footer-content">
        <a href="https://www.linkedin.com/in/moses-kayuni-7915709b/" target="_blank" rel="noopener noreferrer">
          <img src="/images/linkd1.png" alt="LinkedIn" width="30" height="30" style={{ margin: '0 10px' }} />
        </a>
        <a href="https://github.com/Mkayuni" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            style={{ margin: '0 10px', fill: isDarkMode ? '#fff' : '#000' }}
          >
            <path d="M12 0C5.372 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.599.111.793-.26.793-.578v-2.243c-3.338.726-4.042-1.41-4.042-1.41-.546-1.389-1.334-1.759-1.334-1.759-1.089-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.305 3.492.998.109-.775.419-1.305.762-1.606-2.665-.305-5.467-1.334-5.467-5.933 0-1.311.469-2.383 1.236-3.225-.124-.305-.535-1.531.117-3.192 0 0 1.007-.322 3.301 1.23.957-.266 1.984-.399 3.005-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.661.242 2.887.118 3.192.77.842 1.236 1.914 1.236 3.225 0 4.609-2.805 5.625-5.476 5.921.43.372.814 1.103.814 2.222v3.293c0 .319.193.694.8.576C20.566 21.795 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </Box>
      <Typography variant="body2" className="copyright" sx={{ color: isDarkMode ? '#fff' : '#000' }}>
        &copy; 2024 Kayuni Moses D. All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
