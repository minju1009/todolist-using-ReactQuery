import React from 'react';
import styled from 'styled-components';
import TodoListContainer from './components/TodoListContainer';
import TodoList from './components/TodoList';

export default function Todo() {
  return (
    <Wrapper>
      <TodoListContainer />
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
`;
