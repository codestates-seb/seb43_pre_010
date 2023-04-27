import { RiArrowUpSFill, RiArrowDownSFill } from 'react-icons/ri';
import RightNav from '../common/RightNav';

const QuestionContent = ({ question }) => (
  <div className="mb-16">
    <div className="flex flex-row">
      <div className="flex flex-col pr-8">
        <button type="button" className="m-0.5">
          <RiArrowUpSFill className="w-9 h-9" />
        </button>
        <div className="text-center">{question.scoreCount}</div>
        <button type="button" className="m-0.5">
          <RiArrowDownSFill className="w-9 h-9" />
        </button>
      </div>
      <div className="w-full">
        <div className="flex w-full justify-between">
          <div> {question.content}</div>

          <RightNav />
        </div>
        <div className="flex flex-row justify-between pt-10">
          <a href="/" className="text-slate-700">
            edit
          </a>
          <div className="flex flex-row items-center w-48 h-11 bg-sky-100 rounded-sm mt-1 mb-1 px-1.5">
            <div className="w-8 h-8 bg-lime-700 text-white text-center p-1 rounded-sm">
              {question.name.slice(0, 1)}
            </div>
            <div className="pl-2">{question.name}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuestionContent;
