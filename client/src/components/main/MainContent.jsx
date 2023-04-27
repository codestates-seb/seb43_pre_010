import styled from 'styled-components';

const MainContent = ({ questions }) => {
  const { data } = questions;
  console.log(data);

  function timeStampChange(time) {
    return time.replace('T', ' ').substring(0, 19);
  }

  return (
    <>
      {data.map((question) => (
        <MainContentLayout key={question.questionId}>
          <QuestionSummary>
            <ul className="mr-4">
              <li className="whitespace-nowrap text-right text-sm">{question.scoreCount} votes</li>
              <li className="whitespace-nowrap text-right text-sm text-slate-700">
                {question.answers.length} answer
              </li>
              <li className="whitespace-nowrap text-right text-sm text-slate-700">
                {question.viewCount} views
              </li>
            </ul>
          </QuestionSummary>
          <QuestionTitle>
            <a href={`/questions/${question.questionId}`}> {question.title}</a>
            <div className="flex grow self-end items-end ">
              <div className="w-5 h-5 bg-lime-700 text-xs text-white text-center leading-5 rounded-sm">
                {question.name.slice(0, 1)}
              </div>
              <span className="text-sm mx-2">{question.name}</span>
              <span className="text-xs ">{timeStampChange(question.createdAt)}</span>
            </div>
          </QuestionTitle>
        </MainContentLayout>
      ))}
    </>
  );
};

const MainContentLayout = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

const QuestionSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default MainContent;
