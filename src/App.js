import React, { useState, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState('light');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <Layout onToggleTheme={handleToggleTheme} selectedTheme={theme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
