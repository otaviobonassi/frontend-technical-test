import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 3vw;
  min-height: 60px;
  background: #FFF;
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  width:90vw;
  display: flex;
  justify-content: flex-end;
`

export const HamburgerMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5vw;
  
  &:hover {
    cursor: pointer;
    background: #dadddb;
    border-radius: 0.5vw;
  }

  img {
    width: 40px;
  }
`