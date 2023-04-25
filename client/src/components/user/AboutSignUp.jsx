import styled from "styled-components";
import { GetUnstuckIcon, UnlockIcon, TagsIcon, BadgesIcon } from "../../assets/Login/SignUpSVG";

const AboutSignUp = () => {
  return (
    <AboutSignUpTextContainer>
      <h1>Join the Stack Overflow community</h1>
    <AboutSignUpTextContent>
      <div className="flex-row">
        <GetUnstuckIcon />
        <p>Get unstuck — ask a question</p>
      </div>
      <div className="flex-row">
        <UnlockIcon />
        <p>Unlock new privileges like voting and commenting</p>
      </div>
      <div className="flex-row">
        <TagsIcon />
        <p>Save your favorite questions, answers, watch tags, and more</p>
      </div>
      <div className="flex-row">
        <BadgesIcon />
        <p>Earn reputation and badges</p>
      </div>
    </AboutSignUpTextContent>
      <SubText>Collaborate and share knowledge with a private group for FREE.</SubText>
      <SubText>Get Stack Overflow for Teams free for up to 50 users.</SubText>
    </AboutSignUpTextContainer>
  );
};

export default AboutSignUp;

const AboutSignUpTextContainer = styled.div`
  width: 423px;
  min-width: 422px;
  margin-right: 48px;
  margin-bottom: 128px;

  h1 {
    font-size: 27px;
    font-weight: 400;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
    color: rgb(35, 38, 41);
  };

  > :last-child {
    color: rgb(0, 116, 204);
    cursor: pointer;
  }
`;

const AboutSignUpTextContent = styled.div`
  font-size: 15px;
  .flex-row {
    display: flex;
    flex-direction: row;
    gap:10px;
    margin: 20px 0px;
  };

  .tags {
    margin-top: 5px;
  }
`;

const SubText = styled.p`
  font-size: 13px;
  color: rgb(106, 115, 124);
`;