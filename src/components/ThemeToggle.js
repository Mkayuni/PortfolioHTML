// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Switch } from '@mui/material';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      color="default"
    />
  );
};

export default ThemeToggle;
