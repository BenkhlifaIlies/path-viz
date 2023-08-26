import { useState } from 'react';
import styled from 'styled-components';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SubComponentProps {
  children: React.ReactNode;
}

const Modal = ({ title, children, setOpenModal }: ModalProps) => {
  const [display, setDisplay] = useState<boolean>(true);
  const handleClose = () => {
    setDisplay(false);
    setTimeout(() => setOpenModal(false), 200);
  };
  return (
    <>
      <Backdrop onClick={handleClose} />
      <ModalWrapper>
        <ModalContent $display={String(display)}>
          <div className="nodal-header">
            <ModalHeader>
              <Title>{title}</Title>
              <CloseBtn onClick={handleClose}>X</CloseBtn>
            </ModalHeader>
          </div>
          {children}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

const ModalBody = ({ children }: SubComponentProps) => (
  <div className="nodal-body">{children}</div>
);
Modal.Body = ModalBody;

const ModalFooter = ({ children }: SubComponentProps) => (
  <div className="nodal-footer">{children}</div>
);
Modal.Footer = ModalFooter;

export default Modal;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
`;
const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalContent = styled.div<{ $display?: string }>`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 1rem;
  z-index: 30;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  animation: ${props =>
    props.$display === 'true'
      ? ' 0.3s linear fadeIn 1'
      : ' 0.2s linear fadeOut 1'};
  @keyframes fadeIn {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-6rem);
    }
    100% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-6rem);
    }
  }
  @media only screen and (min-width: 768px) {
    max-width: 500px;
    min-width: 350px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray97);
  --bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;
const Title = styled.h4`
  margin: 0;
  font-size: calc(1.275rem + 0.3vw);
  font-weight: 500;
  text-transform: capitalize;
`;
const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
