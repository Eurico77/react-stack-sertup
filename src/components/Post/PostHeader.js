import React from 'react';
import propTypes from 'prop-types';
import { Button } from '../Button';

export function PostHeader({ id, title, read, onRemove }) {
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={() => onRemove(id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  read: propTypes.bool,
  onRemove: propTypes.func.isRequired,
};
