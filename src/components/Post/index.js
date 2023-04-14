import React from 'react';
import propTypes from 'prop-types';

import { PostHeader } from './PostHeader';
import { Rate, Subtitle, Container } from './style';

// as props so aceitam leitura, nao pode ser alterado pelo componente filho
// title = algum valor
export function Post({ id, title, subtitle, likes, read, removed, onRemove }) {
  return (
    <Container>
      <PostHeader
        removed={removed}
        title={title}
        read={read}
        onRemove={onRemove}
        id={id}
      />
      <Subtitle>{subtitle}</Subtitle>
      <Rate> Likes: {likes}</Rate>
    </Container>
  );
}

Post.propTypes = {
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  likes: propTypes.number,
  removed: propTypes.bool,
  read: propTypes.bool.isRequired,
  onRemove: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};
