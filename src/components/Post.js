import React from 'react';
import propTypes from 'prop-types';

// as props so aceitam leitura, nao pode ser alterado
export function Post({ title, subtitle, likes }) {
  console.log(likes, title, subtitle);
  return (
    <>
      <article>
        Likes: {likes} <br />
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
};
