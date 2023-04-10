import React from 'react';
import propTypes from 'prop-types';

export function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
};
