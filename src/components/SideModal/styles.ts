import styled from "styled-components";

export const BackgroundContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  display: flex;
  justify-content: end;
`

export const ModalContent = styled.div`
  background: #FFF;
  width: 70vw;
  max-width: 520px;
  height: 100%;
  padding: 10px;
  animation: showModal 0.4s ease-out;

  @keyframes showModal {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0);
    }
  }
`

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`

export const CancelButton = styled.button`
  background: #FFF;
  width: 30px;
  padding: 0;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: #dadddb;
    border-radius: 50%;
  }

  img {
    width: 100%;
  }
`

export const ModalMain = styled.div`
  width: 85%;
  margin: 0 auto;
`