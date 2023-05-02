import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.light;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    // fetch('https://api.github.com/users/eurico77').then((response) =>
    //   response.json().then((data) => console.log(data))
    // );
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
