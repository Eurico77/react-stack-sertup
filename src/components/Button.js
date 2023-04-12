import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../components/contexts/ThemeContext';

export function Button({ onClick, children, className }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={className}
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
  className: propTypes.string,
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
};
