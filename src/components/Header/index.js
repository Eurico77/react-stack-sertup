import React from 'react';

import { Container } from './styles';
import { useHistory } from 'react-router-dom';

export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();
  // function handleNavigateToHome() {
  //   history.push('/');
  // }

  return (
    <Container>
      <h1>Ultimas Postagens</h1>
      <button type='button' onClick={onToggleTheme}>
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button type='button' onClick={() => history.push('/')}>
        Navegar
      </button>
    </Container>
  );
}
