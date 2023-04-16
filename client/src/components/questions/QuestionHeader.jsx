import styled from "styled-components";

const QuestionHeader = ({ title }) => {
  return (
    <QuestionsHeaderLayout>
      <HeaderH1>{title}</HeaderH1>
      <AskButton href="/questions/ask">Ask Question</AskButton>
    </QuestionsHeaderLayout>
  );
};

const QuestionsHeaderLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const HeaderH1 = styled.h1`
  overflow-wrap: break-word;
  font-size: 1.7rem;
  line-height: 1.3;
  vertical-align: baseline;
  margin-bottom: 8px;
  flex: 1 auto;
`;

const AskButton = styled.a`
  display: inline-block;
  background-color: hsl(206, 100%, 52%);
  color: hsl(0, 0%, 100%);
  white-space: nowrap;
  font-size: 13px;
  line-height: 1.4;
  padding: 0.8em;
  text-align: center;
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, 0.4);
  border: 1px solid;
  border-radius: 3px;
  max-height: 40px;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

export default QuestionHeader;
