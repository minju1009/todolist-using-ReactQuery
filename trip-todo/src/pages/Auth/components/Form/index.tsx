import styled from 'styled-components';

import { font } from 'styles/fonts';
import Input from 'pages/Auth/components/Input';
import React, { useEffect, useState } from 'react';

import { validateEmail, validatePassword } from 'utiils/regExp';
import useSignupQuery from 'pages/Auth/queries/useSignupQuery';
import useLoginQuery from 'pages/Auth/queries/useLoginQuery';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const navigate = useNavigate();
  const [mode, setMode] = useState('로그인');
  const loginMode = mode === '로그인';
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState<string>('');

  const {
    mutate: signup,
    isError: signupError,
    isSuccess: signupSuccess,
  } = useSignupQuery(setErrorText);

  const {
    mutate: login,
    isError: loginError,
    isSuccess: loginSuccess,
  } = useLoginQuery(setErrorText);

  const { email, password } = userInfo;

  const initializeUserInfo = () => {
    setUserInfo((prev) => ({ ...prev, email: '', password: '' }));
    setIsError(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setIsError(false);
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirmBtnClick = () => {
    if (loginMode) {
      login({ email, password });
      return;
    }

    signup({ email, password });
  };

  const handleModeChange = () => {
    loginMode ? setMode('회원가입') : setMode('로그인');
    initializeUserInfo();
  };

  useEffect(() => {
    if (signupError || loginError) {
      setIsError(true);
    }
  }, [signupError, loginError]);

  useEffect(() => {
    if (signupSuccess) {
      setMode('로그인');
    }
  }, [signupSuccess]);

  useEffect(() => {
    if (loginSuccess) {
      navigate('/todo');
    }
  }, [loginSuccess]);

  return (
    <Container>
      <Title>
        {loginMode ? '다시 오신 것을 환영합니다.' : '회원가입 먼저 해볼까요?'}
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
        placeholder="비밀번호를 입력해 주세요"
        type="password"
        isError={isError}
        name="password"
        value={password}
        subText={errorText}
        onChangeInput={handleInput}
      />
      <ConfirmButton
        disabled={!validateEmail(email) || !validatePassword(password)}
        onClick={handleConfirmBtnClick}
      >
        {loginMode ? '로그인' : '확인'}
      </ConfirmButton>
      <ModeChangerBtn onClick={handleModeChange}>
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

const ConfirmButton = styled.button`
  display: block;
  margin: 50px auto 0;
  width: 420px;
  ${font(16, 700, 18)};
  color: white;
  padding: 15px;
  border-radius: 10px;
  background-color: #c58940;

  :disabled {
    background-color: #c1a179;
  }
`;

const ModeChangerBtn = styled.button`
  ${font(14, 400, 16)}
  display: block;
  margin: 20px auto;
  color: #c58940;
`;
