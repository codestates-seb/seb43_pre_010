import styled from 'styled-components';
import { IoEarthSharp } from 'react-icons/io5';

const LeftNav = () => {
  return (
    <LeftNavLayout>
      <ol>
        <li className="text-sm mb-4 text-zinc-700">
          <a href="/">Home</a>
        </li>
        <li className="text-xs text-zinc-700">
          <div href="/">PUBLIC</div>
        </li>
        <li className="flex align-center">
          <IoEarthSharp className="flex m-2" />
          <a href="/questions" className="text-sm m-1 text-zinc-700">
            Questions
          </a>
        </li>
      </ol>
    </LeftNavLayout>
  );
};

const LeftNavLayout = styled.nav`
  position: sticky;
  width: 164px;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 8px;
  top: 50px;
  max-height: calc(100vh - 50px);
  flex-shrink: 0;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export default LeftNav;
