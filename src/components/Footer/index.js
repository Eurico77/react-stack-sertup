import React from 'react';

import { Container } from './styles';

export default function Footer({ onToggleTheme }) {
  return (
    <Container>
      <span>Eurico dev. Todos os direitos reservados.</span>
      <button type='button' onClick={onToggleTheme}>
        🌞
      </button>
    </Container>
  );
}
