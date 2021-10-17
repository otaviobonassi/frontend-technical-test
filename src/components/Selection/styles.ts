import styled from 'styled-components';

interface SelectionButtonProps{
  isActive: boolean;
}

export const SelectionButton = styled.button.attrs({ type: 'button' })<SelectionButtonProps>`
  flex-grow: 1;
  flex-basis: 10vw;
  max-width: 30vw;
  background: ${(props) => props.isActive ? '#77dd77' : '#FFF'};
  transition: filter 0.1s;
  border: ${(props) => props.isActive ? '1px solid #77dd00' : '1px solid #676767' };

  &:hover {
    filter: brightness(0.8);
  }

  p {
    margin: 0.4rem 0;
    color: #131516;
  }
`