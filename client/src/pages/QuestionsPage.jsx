import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestion } from "../api/api";
import QuestionContent from "../components/questions/QuestionContent";
import QuestionAnswer from "../components/questions/QuestionAnswer";
import QuestionHeader from "../components/questions/QuestionHeader";
import QuestionAnswerInput from "../components/questions/QuestionAnswerInput";

const Questions = () => {
  const [question, setQuestion] = useState(null);
  const { questionId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestion(questionId);
      setQuestion(data);
    };
    fetchData();
  }, [questionId]);

  // Axios 로딩 관련 문제 고민
  if (!question) {
    return <div>Loading...</div>;
  }
  return (
    <MainContainer>
      <QuestionContainer>
        <QuestionHeader title={question.title} />
        <QuestionHeaderDate>
          <div className="mr-4 mb-2">
            <span className="mr-2 text-sm text-slate-500">Asked</span>
            <time className="text-sm">today</time>
          </div>
          <div className="mr-4 mb-2">
            <span className="mr-2 text-sm text-slate-500">Modified</span>
            <span className="text-sm">today</span>
          </div>
          <div className="mr-4 mb-2">
            <span className="mr-2 text-sm text-slate-500">Viewed</span>
            <span className="text-sm">2 times</span>
          </div>
        </QuestionHeaderDate>
        <QuestionContent content={question.content} />
        <QuestionAnswer answers={question.answers}/>
        <QuestionAnswerInput/>
      </QuestionContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex: 1 0 auto;
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

export default Questions;
