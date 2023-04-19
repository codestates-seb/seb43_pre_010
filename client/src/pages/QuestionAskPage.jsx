import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import AskBackground from '../assets/AskBackground.svg';

const QuestionAsk = () => {
  const { questionId } = useParams();
  return (
    <AskPageContainer>
      <AskHeaderContainer>
        <h1 className="text-3xl font-semibold">Ask a public Question</h1>
      </AskHeaderContainer>
    </AskPageContainer>
  );
};

const AskPageContainer = styled.div`
  width: 100%;
  max-width: 1264px;
  padding: 24px;
  min-height: 750px;
  overflow: visible;
`;

const AskHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 1100px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1050px) {
    height: 130px;
    background-image: url(${AskBackground});
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`;

export default QuestionAsk;
