import React from 'react';
import propTypes from 'prop-types';

// as props so aceitam leitura, nao pode ser alterado
export function Post({ title, subtitle, ...props }) {
  console.log(props, title, subtitle);
  return (
    <>
      <article>
        <strong>{title}</strong>
        <br />
        <small>{subtitle}</small>
      </article>
      <br />
      Likes: {props.likes}
    </>
  );
}

Post.propTypes = {
  likes: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
};
