import styled from "styled-components";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

// 새로고침시 UI가 정상적으로 표시되지 않는 문제 발생 중...
const QuestionAnswerInput = () => {
    return (
        <>
            <div className="text-xl font-medium py-6">Your Answer</div>
            <Editor
            height="300px"
            />
            <SubmitButton>Post Your Answer</SubmitButton>
        </>

    )
};

const SubmitButton = styled.button`
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
  margin-top: 5px;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

export default QuestionAnswerInput;