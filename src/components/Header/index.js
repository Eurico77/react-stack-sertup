import React, { useContext } from 'react';
import propTypes from 'prop-types';

import { ThemeContext } from '../../contexts/ThemeContext';
import { Button } from '../Button';
// as props so aceitam leitura, nao pode ser alterado diretamente
export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div
    // estilosInline
    // style={{
    //   fontFamily: 'sans-serif',
    //   backgroundColor: '#7159c1',
    //   color: '#fff',
    //   padding: '10px',
    //   display: 'flex',
    //   justifyContent: 'space-between',
    // }}
    >
      <header>
        <h1>{title}</h1>
        <Button onClick={onToggleTheme}> Mudar tema</Button>
        {children}
      </header>
      <br />
      <hr />
    </div>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};
Header.defaultProps = {
  title: 'Blog do Eurico',
};
