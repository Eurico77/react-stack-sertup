import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { ThemeContext } from '../App';

export function Button({ onClick, children }) {
  const theme = useContext(ThemeContext);

  return <button onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
};
