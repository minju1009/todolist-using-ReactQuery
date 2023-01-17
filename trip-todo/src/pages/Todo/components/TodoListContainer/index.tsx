import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import TodoList from '../TodoList';

const DAY_ARRAY = ['일', '월', '화', '수', '목', '금', '토'];

export default function TodoListContainer() {
  const [today, setToday] = useState(new Date());
  const title = `${today.getMonth() + 1}월 ${today.getDate()}일 ${
    DAY_ARRAY[today.getDay()]
  }요일`;
  const year = today.getFullYear();

  return (
    <Container>
      <TitleWrap>
        <div>
          <Title>{title}</Title>
          <SubTitle>{year}</SubTitle>
        </div>
        <Counter>개의 할 일</Counter>
      </TitleWrap>
      <TodoList />
    </Container>
  );
}

const Container = styled.div`
  width: 30%;
  padding: 40px;
  overflow: hidden;
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

const ListContainer = styled.div`
  border: 1px solid #c58940;
`;
