import styled from "styled-components";
import {RiArrowUpSFill, RiArrowDownSFill} from 'react-icons/ri';

const QuestionAnswer = ({ answers }) => {
  return (
    <div>
      <br />
      <br />
      <div className="text-xl font-medium">{answers.length} Answers</div>
      
        {answers.map((answer) => (
            <AnswerLayout>
                <div className="flex flex-row py-6">
                    <div className="flex flex-col pr-8">
                        <button className="m-0.5"><RiArrowUpSFill className="w-9 h-9"/></button>
                        <div className="text-center">{answer.upvotes}</div>
                        <button className="m-0.5"><RiArrowDownSFill className="w-9 h-9"/></button>
                    </div>
                    <div className="w-full">
                    <p>{answer.content}</p>
                    <div className="flex flex-row justify-between pt-20">
                            <a className="text-slate-700">edit</a>
                            <div className="flex flex-row items-center w-48 h-11 bg-sky-100 rounded-sm mt-1 mb-1 px-1.5">
                            <div className="w-8 h-8 bg-lime-700 text-white text-center p-1 rounded-sm">H</div>
                            <a className="pl-2">User</a>
                            </div>
                        </div>
                    </div>
                </div>
            </AnswerLayout>
        ))}
    </div>
  );
};

const AnswerLayout = styled.div`
    border-bottom: 1px solid hsl(210,8%,90%);
`

export default QuestionAnswer;
