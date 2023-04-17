import styled from 'styled-components';
import { IoPencil } from 'react-icons/io5';
import { SlSpeech } from 'react-icons/sl';
import { DiStackoverflow } from 'react-icons/di';

const RightNav = () => (
  <RightNavLayout>
    <ul className="block">
      <TitleLi>The Overflow Blog</TitleLi>
      <ContentLi>
        <IoPencil className="w-4 h-3.5 my-1 mr-1.5" />
        <a href="/">The philosopher who believes in Web Assembly</a>
      </ContentLi>
      <ContentLi>
        <IoPencil className="w-4 h-3.5 my-1 mr-1.5" />
        <a href="/">Community is the future of AI</a>
      </ContentLi>
      <TitleLi>Featured on Meta</TitleLi>
      <ContentLi>
        <SlSpeech className="w-6 h-3.5 my-1 mr-1.5" />
        <a href="/">Improving the copy in the close modal and post notices - 2023 edition</a>
      </ContentLi>
      <ContentLi>
        <IoPencil className="w-4 h-3.5 my-1 mr-1.5" />
        <a className="w-full" href="/">
          Temporary policy: ChatGPT is banned
        </a>
      </ContentLi>
      <ContentLi>
        <IoPencil className="w-4 h-3.5 my-1 mr-1.5" />
        <a className="w-full" href="/">
          The [protection] tag is being burninated
        </a>
      </ContentLi>
      <ContentLi>
        <IoPencil className="w-4 h-3.5 my-1 mr-1.5" />
        <a className="w-full" href="/">
          Content Discovery initiative 4/13 update: Related questions using a Machine...
        </a>
      </ContentLi>
    </ul>
  </RightNavLayout>
);

const RightNavLayout = styled.div`
  min-width: 300px;
  background-color: hsl(47, 87%, 94%);
  border: 1px solid hsl(47, 65%, 84%);
  font-size: 13px;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const TitleLi = styled.li`
  display: flex;
  color: hsl(210, 8%, 25%);
  font-size: 12px;
  font-weight: bold;
  border-top: 1px solid hsl(210, 8%, 90%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  background-color: hsl(47, 83%, 91%);
  border-color: hsl(47, 65%, 84%);
  padding: 12px 15px 12px 15px;
`;

const ContentLi = styled.li`
  display: flex;
  margin: 12px 0;
  padding: 0 16px;
`;

export default RightNav;
