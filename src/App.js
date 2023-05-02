import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  console.log('app');

  const currentTheme = useMemo(() => {
    console.log('useeMemo');
    return themes[theme] || themes.light;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    console.log('useefect');
  }, [theme]);

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('theme', theme);
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
