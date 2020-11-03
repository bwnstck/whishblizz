import styled from 'styled-components/macro';

const ButtonTemplate = styled.button`
  border-radius: 50%;
  font-size: 2.5rem;
  line-height: 0.8;
  color: var(--primary-color);

  border: none;
  padding: 0.5rem 0.75rem;
  position: ${(props) => (props.absolute ? 'absolute' : 'relative')};
  bottom: ${(props) => (props.absolute ? '50px' : null)};
  right: ${(props) => (props.absolute ? '50px' : null)};
`;

export default ButtonTemplate;
