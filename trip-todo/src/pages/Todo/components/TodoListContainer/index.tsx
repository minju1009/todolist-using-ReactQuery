import useGetTodosQuery from 'pages/Todo/queries/useGetTodosQuery';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import TodoList from './TodoList';

const DAY_ARRAY = ['일', '월', '화', '수', '목', '금', '토'];

interface ITodoListContainerProps {
  handleSelectedId: (id: string) => void;
}

export default function TodoListContainer({
  handleSelectedId,
}: ITodoListContainerProps) {
  const today = useRef(new Date());
  const title = `${
    today.current.getMonth() + 1
  }월 ${today.current.getDate()}일 ${DAY_ARRAY[today.current.getDay()]}요일`;
  const year = today.current.getFullYear();

  const { data: todoList } = useGetTodosQuery();

  return (
    <Container>
      <TitleWrap>
        <div>
          <Title>{title}</Title>
          <SubTitle>{year}</SubTitle>
        </div>
        <Counter>{todoList?.length}개의 할 일</Counter>
      </TitleWrap>
      <TodoList handleSelectedId={handleSelectedId} />
    </Container>
  );
}

const Container = styled.div`
  padding: 40px;
  overflow: hidden;
  width: 33vw;
`;

const TitleWrap = styled.div`
  ${flex('space-between', 'center')}
`;

const Title = styled.h1`
  ${font(24, 700, 30)}
  color: #c58940;
`;

const SubTitle = styled.h3`
  ${font(14, 400, 16)}
  margin: 12px 0 30px;
  color: #c58940;
`;

const Counter = styled.div`
  ${font(14, 400, 16)}
  color: #c58940;
`;
