import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  ${(props) => css`
    opacity: ${props.removed ? 0.5 : 1};
    color: ${props.removed ? '#f00' : '#000'};
  `}
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 12px;
`;
