import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';

export default function Addpage() {
  return (
    <Container>
      <Link to="/">
        <input type="text" name="" id="" placeholder="Enter your Name" />

        <input type="text" name="" id="" placeholder="enter wish" />
        <Button round navigation>
          <span role="img" aria-label="blubb">
            🌈
          </span>
        </Button>
      </Link>
    </Container>
  );
}
