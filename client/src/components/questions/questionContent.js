import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestion } from "../../api/api";

const QuestionContent = () => {
  const [question, setQuestion] = useState(null);
  const { questionId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestion(questionId);
      setQuestion(data);
      console.log(data);
    };
    fetchData();
  }, [questionId]);

  // Axios 로딩 관련 문제 고민
  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{question.title}</h1>
      <p>{question.content}</p>
      <h2>Answers:</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id}>
            <p>{answer.content}</p> - Upvotes: {answer.upvotes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionContent;
