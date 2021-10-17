import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;

  img {
    width: 30%;
  }

  h1 {
    font-size: 1rem;

    @media screen and (min-width: 630px) {
      font-size: 2rem;
    }
  }
  
`