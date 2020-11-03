import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  height: 100vh;
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// eslint-disable-next-line
export default function Wishlist({ children }) {
  return (
    <>
      <List>{children}</List>
    </>
  );
}
