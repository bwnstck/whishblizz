import styled from 'styled-components/macro';

const Button = styled.button`
  border-radius: ${(props) => (props.navigation ? '50%' : '5%')};
  font-size: 2.5rem;
  line-height: 0.8;
  color: var(--primary-color);

  border: none;
  padding: 0.5rem 0.75rem;
  position: ${(props) => props.navigation && 'absolute'};
  bottom: ${(props) => props.navigation && '50px'};
  right: ${(props) => props.navigation && '50px'};
`;

export default Button;
