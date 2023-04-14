import styled from "styled-components";
import TemporaryLeftSideBar from "../components/common/TemporaryLeftSideBar";
import QuestionContent from "../components/questions/QuestionContent";
import QuestionHeader from "../components/questions/QuestionHeader";

const Questions = () => {
  return (
    <MainContainer>
      <TemporaryLeftSideBar />
      <QuestionContainer>
        {/* <QuestionHeader /> */}
        <QuestionHeaderDate>
          <div className="flex--item ws-nowrap mr16 mb8 ">
            <span class="fc-light mr2 ">Asked</span>
            <time>today</time>
          </div>
          <div class="flex--item ws-nowrap mr16 mb8">
            <span class="fc-light mr2">Modified</span>
            <a href="?lastactivity" class="s-link s-link__inherit" title="2023-04-12 05:12:59Z">
              today
            </a>
          </div>
          <div class="flex--item ws-nowrap mb8" title="Viewed 2 times">
            <span class="fc-light mr2">Viewed</span>2 times
          </div>
        </QuestionHeaderDate>
        <QuestionContent />
      </QuestionContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  flex: 1 0 auto;
`;

const QuestionContainer = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  border-radius: 0;
  border-left: 1px solid hsl(210, 8%, 85%);
  padding: 24px;
  margin: 0 auto;
  text-align: left;
`;

const QuestionHeaderDate = styled.div`
  display: flex;
  padding-bottom: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
  border-bottom: 1px solid hsl(210, 8%, 90%);
`;

export default Questions;
