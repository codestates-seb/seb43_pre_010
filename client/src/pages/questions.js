import styled from "styled-components";
import TemporaryLeftSideBar from "../components/common/TemporaryLeftSideBar";
import QuestionContent from "../components/questions/questionContent";

const Questions = () => {
  return (
    <QuestionContainer>
      <TemporaryLeftSideBar />
      <QuestionContent />
    </QuestionContainer>
  );
};

const QuestionContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  border-radius: 0;
  border: 1px solid hsl(210, 8%, 85%);
  border-top-width: 0;
  border-bottom-width: 0;
  border-left-width: 1px;
  border-right-width: 0;
  padding: 24px;
  margin: 0 auto;
`;

export default Questions;
