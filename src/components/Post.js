import React from 'react';
import { PostHeader } from './PostHeader';
import propTypes from 'prop-types';

// as props so aceitam leitura, nao pode ser alterado pelo componente filho
// title = algum valor
export function Post({ id, title, subtitle, likes, read, onRemove }) {
  return (
    <>
      <PostHeader title={title} read={read} onRemove={onRemove} id={id} />
      <article>
        Likes: {likes} <br />
        <br />
        <small>{subtitle}</small>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  likes: propTypes.number.isRequired,
  read: propTypes.bool.isRequired,
  onRemove: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};
