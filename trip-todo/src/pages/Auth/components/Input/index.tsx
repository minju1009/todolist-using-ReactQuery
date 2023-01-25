import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { flex } from 'styles/flex';
import { font } from 'styles/fonts';

interface IInputPropTypes extends HTMLAttributes<HTMLInputElement> {
  autoFocus?: boolean;
  isError?: boolean;
  subText?: string;
  title?: string;
  type?: string;
  value?: string;
  name?: string;
  placeholder?: string;
  backgroundColor?: string;
  onChangeInput: Function;
}

function Input({
  autoFocus,
  isError,
  subText,
  title,
  type,
  value,
  onChangeInput,
  name,
  placeholder,
  backgroundColor,
}: IInputPropTypes) {
  return (
    <Container>
      <InputText isError={isError}>{title}</InputText>
      <InputWrapper>
        <InputField
          autoFocus={autoFocus}
          isError={isError}
          name={name}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChangeInput(e)}
          autoComplete="off"
          backgroundColor={backgroundColor}
        />
        {isError && <InputSubText isError={isError}>{subText}</InputSubText>}
      </InputWrapper>
    </Container>
  );
}

export default Input;

interface IInputStyleProps extends HTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  backgroundColor?: string;
}

const Container = styled.div``;

const InputWrapper = styled.div<IInputStyleProps>`
  ${flex('center', 'center', 'row')};
  position: relative;
  margin-bottom: 30px;
  border: 1px solid #e5ba73;
  border-radius: 10px;
`;

const InputText = styled.div<IInputStyleProps>`
  ${font(14, 700, 16)};
  text-align: start;
  margin-bottom: 10px;
  color: #e5ba73;
`;

const InputField = styled.input<IInputStyleProps>`
  ${font(16, 400, 18)};
  width: 100%;
  padding: 15px;
  color: #c58940;
  border-radius: 10px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};

  ${({ isError }) =>
    isError &&
    css`
      color: #ea3313;
    `};

  ${({ type }) =>
    type === 'password' &&
    css`
      font-family: sans-serif;
    `};

  ::placeholder {
    ${font(14, 400, 18)};
    color: #e5ba73;
  }
`;

const InputSubText = styled.div<IInputStyleProps>`
  ${font(12, 400, 14)};
  position: absolute;
  bottom: -24px;
  left: 12px;
  color: #999999;

  ${({ isError }) =>
    isError &&
    css`
      color: #ea3313;
    `};
`;
