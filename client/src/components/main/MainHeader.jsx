import styled from 'styled-components';

const MainnHeader = ({ title }) => {
  return (
    <MainHeaderLayout>
      <MainH1>Top Questions</MainH1>
      <AskButton href="/questions/ask">Ask Question</AskButton>
    </MainHeaderLayout>
  );
};

const MainHeaderLayout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  border-bottom: 1px solid hsl(210, 8%, 90%);
  padding-bottom: 30px;
`;

const MainH1 = styled.h1`
  overflow-wrap: break-word;
  font-size: 1.7rem;
  line-height: 1.3;
  vertical-align: baseline;
  flex: 1 auto;
  padding-top: 24px;
  padding-left: 24px;
`;

const AskButton = styled.a`
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
  margin-top: 24px;

  &:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;

export default MainnHeader;
