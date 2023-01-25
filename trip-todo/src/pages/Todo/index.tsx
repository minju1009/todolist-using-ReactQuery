import React from 'react';
import styled from 'styled-components';
import TodoDetailContainer from './components/TodoDetailContainer';
import TodoListContainer from './components/TodoListContainer';

export default function Todo() {
  return (
    <Wrapper>
      <TodoListContainer />
      <TodoDetailContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 40px;
  overflow: hidden;
  background-color: #faf8f1;
  gap: 100px;
`;
