import styled from 'styled-components';

export const Nav = styled.nav`
  color: #333;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
    font-size: 1.2rem;

    & + a {
      margin-left: 1rem;
    }
  }
`;
