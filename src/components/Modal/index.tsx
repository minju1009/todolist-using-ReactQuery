import { ReactNode } from 'react';
import styled from 'styled-components';

interface IModalPropTypes {
  children: ReactNode;
}

export default function Modal({ children }: IModalPropTypes) {
  return (
    <ModalOverLay>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverLay>
  );
}

const ModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background-color: #faf8f1;
  padding: 50px;
  border: 1px solid #e5ba73;
  border-radius: 10px;
`;
