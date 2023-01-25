import useDeleteTodoQuery from 'pages/Todo/queries/useDeleteTodoQuery';
import useUpdateTodoQuery from 'pages/Todo/queries/useUpdateTodoQuery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';
import { ITodoList } from 'types/todo';

interface ITodoDetailContainerProps {
  detailData?: ITodoList;
}

export default function TodoDetailContainer({
  detailData,
}: ITodoDetailContainerProps) {
  const { mutate: updateTodo } = useUpdateTodoQuery();
  const { mutate: deleteTodo } = useDeleteTodoQuery();
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState({
    title: '',
    content: '',
    id: '',
  });

  const { title, content, id } = editedTodo;

  const formatDate = (date: string) => {
    const formattedDateTime = `${date.split('T')[0]} ${date
      .split('T')[1]
      .slice(0, 5)}`;
    return formattedDateTime;
  };

  const handleInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;

    setEditedTodo({ ...editedTodo, [name]: value });
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const handleEditBtnClick = () => {
    if (editMode) {
      updateTodo(editedTodo);
    }
    toggleEditMode();
  };

  const handleDeleteBtnClick = () => {
    deleteTodo(id);
  };

  useEffect(() => {
    if (!detailData) return;

    setEditedTodo((prev) => ({
      ...prev,
      title: detailData.title,
      content: detailData.content,
      id: detailData.id,
    }));
  }, [detailData]);

  return (
    <Container>
      {detailData === undefined ? (
        <AlarmMessage>왼쪽 리스트의 '상세보기'를 선택해볼까요?</AlarmMessage>
      ) : (
        <>
          {editMode ? (
            <>
              <TitleWrap>
                <Input
                  value={title}
                  name="title"
                  onChange={(e) => handleInput(e)}
                />
                <EditBtn onClick={handleEditBtnClick}>수정완료</EditBtn>
              </TitleWrap>
              <ContentWrap>
                <TextArea
                  value={content}
                  name="content"
                  onChange={(e) => handleInput(e)}
                />
              </ContentWrap>
            </>
          ) : (
            <>
              <TitleWrap>
                <Title>{title}</Title>
                <div>
                  <EditBtn onClick={handleEditBtnClick}>수정</EditBtn>
                  <DeleteBtn onClick={handleDeleteBtnClick}>삭제</DeleteBtn>
                </div>
              </TitleWrap>
              <ContentWrap>
                <Content>{content}</Content>
              </ContentWrap>
            </>
          )}

          <DateWrap>
            <DateText>
              최초 작성일자 : {formatDate(detailData.createdAt)}
            </DateText>
            <DateText>
              마지막 수정일자 : {formatDate(detailData.updatedAt)}
            </DateText>
          </DateWrap>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 60%;
  padding: 40px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ffffff;
`;

const AlarmMessage = styled.div`
  position: absolute;
  ${font(21, 700, 30)}
  color: #815927;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleWrap = styled.div`
  ${flex('space-between', 'center')}
  width: 100%;
`;

const Input = styled.input`
  ${font(24, 700, 30)}
  padding: 10px;
  border: 1px solid #e5ba73;
  border-radius: 10px;
`;

const Title = styled.h1`
  ${font(24, 700, 30)}
  color: #815927;
`;

const DateWrap = styled.div`
  ${flex('space-between', 'center')}
`;

const DateText = styled.div`
  margin-top: 15px;
  color: gray;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 15px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
  border-radius: 5px;
  background-color: #fbe8d2;
`;

const TextArea = styled.textarea`
  ${font(16, 400, 18)};
  width: 100%;
  height: 150px;
  padding: 15px;
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

const EditBtn = styled.button`
  color: white;
  padding: 6px 8px;
  border-radius: 5px;
  background-color: #c1a179;
`;

const DeleteBtn = styled(EditBtn)`
  margin-left: 10px;
`;
