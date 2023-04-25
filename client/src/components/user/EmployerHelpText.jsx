import styled from "styled-components";
import { SignUpTalentIcon } from "../../assets/Login/LoginSVG";

const EmployerHelpText = () => {
  return (
    <EmployerHelpTextWrapper>
      <p>Are you an employer?</p>
      <button type="button" >Sign up on Talent</button>
      <SignUpTalentIcon />
    </EmployerHelpTextWrapper>
  );
};

export default EmployerHelpText;

const EmployerHelpTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 15px 0px;
`