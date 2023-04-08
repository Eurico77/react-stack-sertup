import React from 'react';
import propTypes from 'prop-types';

// as props so aceitam leitura, nao pode ser alterado
export function Header({ title, children }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        {children}
      </header>
    </>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

Header.defaultProps = {
  title: 'Blog do Eurico',
};
