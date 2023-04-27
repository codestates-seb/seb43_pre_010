import styled from 'styled-components';
import axios from 'axios';
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import AskBackground from '../assets/AskBackground.svg';
import HeaderBar from '../components/common/header/HeaderBar';

const QuestionAskPage = () => {
  const [content, setContent] = useState('');
  const { questionId } = useParams();
  const [title, setTitle] = useState('');

  const postAsk = () => {
    axios
      .post('http://ec2-43-201-77-252.ap-northeast-2.compute.amazonaws.com:8080/questions', {
        // 로그인 중인 userId 값 redux에서 가져와서 넣어야 함
        title,
        content,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AskBackGroundColor>
      <HeaderBar />
      <AskPageContainer>
        <AskHeaderContainer>
          <h1 className="text-3xl font-semibold">Ask a public Question</h1>
        </AskHeaderContainer>
        <QuestionBox>
          <h2 className="text-xl font-normal mb-3">Writing a good question</h2>
          <p>
            You’re ready to <a href="https://stackoverflow.com/help/how-to-ask">ask</a> a{' '}
            <a href="https://stackoverflow.com/help/on-topic">programming-related question</a> and
            this form will help guide you through the process.
          </p>
          <p className="mb-4">
            Looking to ask a non-programming question? See{' '}
            <a href="https://stackexchange.com/sites#technology-traffic">the topics here</a> to find
            a relevant site.
          </p>
          <h5 className="mb-2">Steps</h5>
          <ul>
            <li className="text-sm list-disc ml-8">Summarize your problem in a one-line title.</li>
            <li className="text-sm list-disc ml-8">Describe your problem in more detail.</li>
            <li className="text-sm list-disc ml-8">
              Describe what you tried and what you expected to happen.
            </li>
            <li className="text-sm list-disc ml-8">
              Add &#x201C;tags&#x201D; which help surface your question to members of the community.
            </li>
            <li className="text-sm list-disc ml-8">
              Review your question and post it to the site.
            </li>
          </ul>
        </QuestionBox>
        <InputBox>
          <div className="flex flex-col">
            <div className="font-semibold">Title</div>
            <div className="text-xs mb-2">
              Be specific and imagine you’re asking a question to another person.
            </div>
            <TitleInput
              id="title"
              type="text"
              maxLength={300}
              value={title}
              onChange={setTitle}
              placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            />
          </div>
        </InputBox>
        <InputBox>
          <div className="flex flex-col">
            <div className="font-semibold">What are the details of your problem?</div>
            <div className="text-xs mb-2">
              Introduce the problem and expand on what you put in the title. Minimum 20 characters.
            </div>
            <div data-color-mode="light">
              <MDEditor height={300} preview="edit" value={content} onChange={setContent} />
            </div>
          </div>
        </InputBox>
        <AskButton onClick={postAsk}>Ask Question</AskButton>
      </AskPageContainer>
    </AskBackGroundColor>
  );
};

const AskBackGroundColor = styled.div`
  background-color: rgb(248, 249, 249);
`;

const AskPageContainer = styled.div`
  width: 100%;
  max-width: 1264px;
  padding: 24px;
  min-height: 750px;
  overflow: visible;
  margin: 0 auto;
`;

const AskHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (min-width: 1050px) {
    height: 130px;
    background-image: url(${AskBackground});
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`;

const QuestionBox = styled.div`
  width: 100%;
  padding: 24px;
  background-color: rgb(235, 244, 251);
  border: 1px solid rgb(166, 206, 237);
  margin-bottom: 14px;
`;

const InputBox = styled.div`
  background-color: white;
  padding: 24px;
  text-align: left;
  border: 1px solid rgb(228, 229, 231);
  margin-bottom: 20px;
`;

const TitleInput = styled.input`
  border: 1px solid hsl(210, 8%, 75%);
  border-radius: 3px;
  padding: 7px;
  font-size: 12px;
`;

const AskButton = styled.button`
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
  cursor: pointer;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

export default QuestionAskPage;
