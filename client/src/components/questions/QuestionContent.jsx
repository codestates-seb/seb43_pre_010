import {RiArrowUpSFill, RiArrowDownSFill} from 'react-icons/ri';
 
const QuestionContent = ({ content }) => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="flex flex-col pr-8">
          <button className="m-0.5"><RiArrowUpSFill className="w-9 h-9"/></button>
          <div className="text-center">0</div>
          <button className="m-0.5"><RiArrowDownSFill className="w-9 h-9"/></button>

        </div>
        <div>
          <p>{content}</p>
          <div className="flex flex-row justify-between pt-20">
            <a className="text-slate-700">edit</a>
            <div className="flex flex-row items-center w-48 h-11 bg-sky-100 rounded-sm mt-1 mb-1 px-1.5">
              <div className="w-8 h-8 bg-lime-700 text-white text-center p-1 rounded-sm">H</div>
              <a className="pl-2">User</a>
            </div>
          </div>
        </div>
    </div>
      <br />
      <br />
    </div>
  );
};

export default QuestionContent;
