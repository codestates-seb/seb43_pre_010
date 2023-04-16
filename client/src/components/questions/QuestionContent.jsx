const QuestionContent = ({ content, answers }) => {
  console.log(answers);
  return (
    <div>
      <p>{content}</p>
      <br />
      <br />
      <h2>Answers:</h2>
      <ul>
        {answers.map((answer) => (
          <li key={answer.id}>
            <p>{answer.content}</p> - Upvotes: {answer.upvotes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionContent;
