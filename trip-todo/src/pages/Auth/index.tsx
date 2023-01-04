import { useState } from 'react';
import styled from 'styled-components';

import Form from './components/Form';

import { flex } from 'styles/flex';

import { font } from 'styles/fonts';

export default function Auth() {
  const [mode, setMode] = useState('회원가입');
  return (
    <Wrapper>
      <LeftContainer>
        <LogoContainer>
          <img alt="logo" src="./images/ic-logo.png" />
          <p>TripTodo</p>
        </LogoContainer>
        <FormContainer>
          <Form mode={mode} />
        </FormContainer>
      </LeftContainer>
      <RightContainer>
        <img alt="main-background" src="/images/il-main-background.jpeg" />
      </RightContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 40px;
  background-color: #faf8f1;
`;

const RightContainer = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const LogoContainer = styled.div`
  ${flex('', 'center')}
  ${font(18, 900, 24)}
  height: 30px;
  color: #c58940;
  gap: 10px;

  p {
    letter-spacing: 10px;
  }
`;

const FormContainer = styled.div`
  position: relative;
`;
