import { useState } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';

interface ICheckboxPropTypes {
  text: string;
}

export default function Checkbox({ text }: ICheckboxPropTypes) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <StyledLabel htmlFor={text}>
      <StyledInput
        type="checkbox"
        id={text}
        name={text}
        onChange={handleCheckboxClick}
      />
      <StyledText isChecked={isChecked}>{text}</StyledText>
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  ${flex('', 'center')}
`;

const StyledInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #c1a179;
  border-radius: 4px;

  &:checked {
    border-color: transparent;
    background-color: #c1a179;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
  }
`;

const StyledText = styled.p<{ isChecked: boolean }>`
  margin-left: 10px;
  text-decoration: ${({ isChecked }) => isChecked && 'line-through'};
`;
