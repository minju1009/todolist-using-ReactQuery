import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import Input from 'pages/Auth/components/Input';
import React, { useState } from 'react';
import { isJSDocNameReference } from 'typescript';
import { validateEmail, validatePassword } from 'utiils/regExp';

interface IFormPropTypes {
  mode: string;
}

export default function Form({ mode }: IFormPropTypes) {
  const loginMode = mode === '로그인';
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);

  const { email, password } = userInfo;
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsError(false);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleBtnClick = () => {
    if (!validateEmail(email) || !validatePassword(password)) {
      setIsError(true);
      return;
    }

    if (loginMode) {
      return;
    }
  };

  return (
    <Container>
      <Title>
        {loginMode ? '다시 오신 것을 환영합니다' : '회원가입 먼저 해볼까요?'}
      </Title>
      <SubTitle>세부 사항을 입력해주세요.</SubTitle>
      <Input
        autoFocus
        title="로그인"
        placeholder="이메일을 입력해 주세요"
        name="email"
        value={email}
        onChangeInput={handleInput}
      />
      <Input
        title="패스워드"
        placeholder="이메일을 입력해 주세요"
        type="password"
        isError={isError}
        name="password"
        value={password}
        subText="이메일과 비밀번호를 확인해주세요."
        onChangeInput={handleInput}
      />
      <Button onClick={handleBtnClick}>{loginMode ? '로그인' : '확인'}</Button>
      <ModeChangerBtn>
        {loginMode ? '아직 계정이 없으신가요?  회원가입' : '로그인하러 가기'}
      </ModeChangerBtn>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  margin: 100px auto 0;
  padding: 60px 40px 0;
  text-align: center;
`;

const Title = styled.h1`
  ${font(24, 700, 30)}
  color: #C58940;
`;

const SubTitle = styled.h3`
  ${font(14, 400, 16)}
  margin : 12px 0 30px;
  color: #c58940;
`;

const Button = styled.button`
  display: block;
  margin: 50px auto 0;
  width: 420px;
  ${font(16, 700, 18)};
  color: white;
  padding: 15px;
  border-radius: 10px;
  background-color: #c58940;
`;

const ModeChangerBtn = styled.button`
  ${font(14, 400, 16)}
  display: block;
  margin: 20px auto;
  color: #c58940;
`;
