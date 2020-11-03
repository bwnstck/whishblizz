import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import GlobalStyle from './GlobalStyle';

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;

  header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  header img {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    header img {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

const UL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;

  & > * {
    margin: 1rem;
  }
`;
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <UL>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/programm">Programm</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </UL>
        <Switch>
          <Route path="/programm">Programm</Route>
          <Route path="/calendar">Calendar</Route>
          <Route path="/about">About</Route>
          <Route path="/">Home</Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
