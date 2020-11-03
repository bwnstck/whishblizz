import React from 'react';
import styled from 'styled-components';

const WishTemplate = styled.div`
  background: rgb(0, 213, 255);
  background: radial-gradient(
    circle,
    rgba(0, 213, 255, 1) 0%,
    rgba(0, 110, 255, 0.8925945378151261) 35%,
    rgba(156, 0, 255, 1) 100%
  );
  color: white;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
`;

export default function Wish() {
  return <WishTemplate>Iam a Wish</WishTemplate>;
}
