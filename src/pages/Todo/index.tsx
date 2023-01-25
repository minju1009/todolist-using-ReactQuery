import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';
import TodoDetailContainer from './components/TodoDetailContainer';
import TodoListContainer from './components/TodoListContainer';
import useGetTodoByIdQuery from './queries/useGetTodoByIdQuery';
import useGetTodosQuery from './queries/useGetTodosQuery';

export default function Todo() {
  const { data: todoList } = useGetTodosQuery();
  const [selectedId, setSelectedId] = useState('');
  const { data: detailData } = useGetTodoByIdQuery(selectedId);

  const handleSelectedId = (id: string) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (!todoList) return;
    setSelectedId(todoList[0]?.id);
  }, [todoList]);

  return (
    <Wrapper>
      <TodoListContainer handleSelectedId={handleSelectedId} />
      <TodoDetailContainer detailData={detailData} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flex('space-between', '')}
  width: 100vw;
  height: 100vh;
  padding: 50px;
  overflow: hidden;
  background-color: #faf8f1;
`;
