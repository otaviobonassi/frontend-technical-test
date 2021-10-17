import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid #8791a0;
  margin-bottom: 3vh;
`

export const Section = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #676767;

  &:last-child {
    border-bottom: none;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #676767;

  h2 {
    margin: 5vw;
  }
`