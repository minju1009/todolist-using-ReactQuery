import styled from 'styled-components';
import { flex } from 'styles/flex';
import { font } from 'styles/fonts';

export default function TodoDetailContainer() {
  return (
    <Container>
      <TitleWrap>
        <Title>제목</Title>
        <div>
          <UpdateBtn>수정</UpdateBtn>
          <DeleteBtn>삭제</DeleteBtn>
        </div>
      </TitleWrap>
      <Content>작성내용</Content>
      <DetailWrap>
        <DetailText>최초 작성일자 : 2022-11-20</DetailText>
        <DetailText>마지막 수정일자 : 2022-11-20</DetailText>
      </DetailWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  padding: 40px;
  overflow: hidden;
  border-radius: 10px;
  background-color: #ffffff;
`;

const TitleWrap = styled.div`
  ${flex('space-between', 'center')}
`;

const Title = styled.h1`
  ${font(24, 700, 30)}
  color: #815927;
`;

const DetailWrap = styled.div`
  ${flex('space-between', 'center')}
`;

const DetailText = styled.div`
  margin-top: 15px;
  color: gray;
`;

const Content = styled.div`
  width: 100%;
  min-height: 200px;
  margin-top: 15px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fbe8d2;
`;

const UpdateBtn = styled.button`
  color: white;
  padding: 6px 8px;
  border-radius: 5px;
  background-color: #c1a179;
`;

const DeleteBtn = styled(UpdateBtn)`
  margin-left: 10px;
`;
