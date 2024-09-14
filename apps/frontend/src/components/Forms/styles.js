import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  @media (max-width: 500px) {
  background: #fff;
    top: 0;
    left: 0;
    transform: none;
}
`;

export const ModalContent = styled.div`
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  margin: 0 auto;
  width: 70%;
  max-height: 80vh;
  height: auto;
  justify-content: center;
  align-items: center;
  overflow-y: auto;

 @media (max-width: 500px) {
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  }

  .titulo{
    color: black;
    font-size: 20px;
    padding: 10px;
    margin: 0%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  color: black;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
