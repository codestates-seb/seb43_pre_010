import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getQuestionDetail } from '../api/api';
import LeftNav from '../components/common/LeftNav';
import QuestionContent from '../components/questions/QuestionContent';
import QuestionAnswer from '../components/questions/QuestionAnswer';
import QuestionHeader from '../components/questions/QuestionHeader';
import QuestionAnswerInput from '../components/questions/QuestionAnswerInput';
import HeaderBar from '../components/common/header/HeaderBar';
import Footer from '../components/common/footer/Footer';

const QuestionsPage = () => {
  const [question, setQuestion] = useState(null);
  const { questionId } = useParams();
  console.log(question);

  function timeStampChange(time) {
    return time.replace('T', ' ').substring(0, 19);
  }

  useEffect(() => {
    const fetchData = async () => {
      const returnValue = await getQuestionDetail(questionId);
      setQuestion(returnValue.data);
    };
    fetchData();
  }, []);

  // Axios 로딩 관련 문제 고민
  if (!question) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <MainContainer>
        <HeaderBar />
        <LeftNav />
        <QuestionContainer>
          <QuestionHeader title={question.title} />
          <QuestionHeaderDate>
            <div className="mr-4 mb-2">
              <span className="mr-2 text-sm text-slate-500">Asked</span>
              <time className="text-sm">{timeStampChange(question.createdAt)}</time>
            </div>
            <div className="mr-4 mb-2">
              <span className="mr-2 text-sm text-slate-500">Modified</span>
              <span className="text-sm">{timeStampChange(question.modifiedAt)}</span>
            </div>
            <div className="mr-4 mb-2">
              <span className="mr-2 text-sm text-slate-500">Viewed</span>
              <span className="text-sm">{question.viewCount} times</span>
            </div>
          </QuestionHeaderDate>
          <QuestionContent question={question} />
          <QuestionAnswer answers={question.answers} />
          <QuestionAnswerInput />
        </QuestionContainer>
      </MainContainer>
      <Footer />
    </div>
  );
};

const MainContainer = styled.div`
  max-width: 1264px;
  width: 100%;
  display: flex;
  margin: 0 auto;
`;

const QuestionContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  border-radius: 0;
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px;
  margin: 0 auto;
  text-align: left;
`;

const QuestionHeaderDate = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

export default QuestionsPage;
