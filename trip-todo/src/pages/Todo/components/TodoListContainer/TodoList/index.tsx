import styled from 'styled-components';

import Checkbox from './Checkbox';
import Modal from 'components/Modal';
import Input from 'pages/Auth/components/Input';

import useGetTodosQuery from 'pages/Todo/queries/useGetTodosQuery';
import useCreateTodoQuery from 'pages/Todo/queries/useCreateTodoQuery';

import { font } from 'styles/fonts';
import { flex } from 'styles/flex';
import React, { useState } from 'react';

export default function TodoList() {
  const { data: todoList } = useGetTodosQuery();
  const { mutate: createTodo } = useCreateTodoQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodo, setNewTodo] = useState({
    title: '',
    content: '',
  });

  const { title, content } = newTodo;

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setNewTodo({ ...newTodo, [name]: value });
  };

  const resetNewTodo = () => {
    setNewTodo({ title: '', content: '' });
  };

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    resetNewTodo();
  };

  const handleConfirmBtnClick = () => {
    if (!title || !content) {
      alert('제목과 내용을 작성해주세요.');
      return;
    }

    createTodo(newTodo);
    toggleModal();
  };

  const handleCancelBtnClick = () => {
    toggleModal();
  };

  return (
    <div>
      <AddTodoBtn onClick={toggleModal}>할 일 추가하기</AddTodoBtn>
      <TodoListWrap>
        {todoList?.map(({ id, title }) => (
          <ListWrap key={id}>
            <Checkbox text={title} />
            <DetailBtn>상세보기</DetailBtn>
          </ListWrap>
        ))}
        {isModalOpen && (
          <Modal>
            <NewTodoModalContainer>
              <Title>새로운 할 일</Title>
              <Input
                title="제목"
                name="title"
                onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleInput(e);
                }}
                placeholder="새롭게 할 일은 무엇인가요?"
                backgroundColor="white"
              />
              <TextAreaTitle>세부내용</TextAreaTitle>
              <Content
                placeholder="내용을 입력해 주세요."
                name="content"
                autoComplete="off"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  handleInput(e);
                }}
              />
            </NewTodoModalContainer>
            <ButtonContainer>
              <ConfirmBtn onClick={handleConfirmBtnClick}>확인</ConfirmBtn>
              <CancelBtn onClick={handleCancelBtnClick}>취소</CancelBtn>
            </ButtonContainer>
          </Modal>
        )}
      </TodoListWrap>
    </div>
  );
}

const TodoListWrap = styled.div`
  padding: 10px;
  height: 60vh;
  overflow-y: auto;
`;

const AddTodoBtn = styled.button`
  margin-bottom: 10px;
  padding: 10px;
  background-color: #c58940;
  border-radius: 5px;
  color: white;
`;

const ListWrap = styled.div`
  ${flex('space-between', 'center')}
  margin-top: 15px;
`;

const DetailBtn = styled.button`
  color: white;
  padding: 6px 8px;
  border-radius: 5px;
  background-color: #c1a179;
`;

const NewTodoModalContainer = styled.div`
  text-align: center;
  width: 500px;
`;

const Title = styled.h1`
  margin-bottom: 15px;
  ${font(24, 700, 30)}
  color: #C58940;
`;

const Content = styled.textarea`
  ${font(16, 400, 18)};
  width: 100%;
  height: 150px;
  padding: 15px;
  color: #c58940;
  border: 1px solid #e5ba73;
  border-radius: 10px;
  resize: none;
  font-family: 'NanumSquare';

  ::placeholder {
    ${font(14, 400, 18)};
    color: #e5ba73;
  }

  &:focus {
    outline: none;
  }
`;

const TextAreaTitle = styled.div`
  ${font(14, 700, 16)};
  text-align: start;
  margin-bottom: 10px;
  color: #e5ba73;
`;

const ButtonContainer = styled.div`
  ${flex('center', '')}
  gap: 10px;
`;

const ConfirmBtn = styled.button`
  ${font(16, 700, 18)};
  display: block;
  width: 50%;
  margin: 50px auto 0;
  color: white;
  padding: 15px;
  border-radius: 10px;
  background-color: #c58940;
`;

const CancelBtn = styled(ConfirmBtn)``;
