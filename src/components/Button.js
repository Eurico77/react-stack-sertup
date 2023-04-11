import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../components/contexts/ThemeContext';

export function Button({ onClick, children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        backgroundColor: theme === 'dark' ? '#000' : '#fff',
        color: theme === 'dark' ? '#fff' : '#000',
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
};
