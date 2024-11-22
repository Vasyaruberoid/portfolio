import { useState } from "react";
import styled from "styled-components";

type ModalPropsType = {
  title: string;
  decription: string;
  name: string;
};

function Modal(props: ModalPropsType) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <div>
      <BtnName onClick={openModal}>{props.name}</BtnName>

      {isOpen && (
        <ModalContainer onClick={handleBackgroundClick}>
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>&times;</ModalCloseButton>
            <h2>{props.title}</h2>
            <p>{props.decription}</p>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

const BtnName = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: black;
`;

export default Modal;
