import styled from 'styled-components';

export const MarketSelections = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.2rem 0;
  border-bottom: 2px solid #5b5b5b;

  p {
    margin: 0 0 1.2rem;
  }
`

export const DeleteButton = styled.button`
  background: #47535e;
  color: #FFF;

  &:hover {
    filter: brightness(1.2);
    color: #000;
  }
`