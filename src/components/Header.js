import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { Button } from './Button';
import { ThemeContext } from '../components/contexts/ThemeContext';

// as props so aceitam leitura, nao pode ser alterado diretamente
export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <header>
        <h1>{title}</h1>
        <Button onClick={onToggleTheme}>Mudar tema</Button>
        {children}
      </header>
      <hr />
      <br />
    </>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
Header.defaultProps = {
  title: 'Blog do Eurico',
};
