import styled from "styled-components";
import AboutSignUp from "../components/user/AboutSignUp";
import HeaderBar from "../components/common/header/HeaderBar";
import SignUpForm from "../components/user/SignUpForm";
import { LoginPageWrapper } from "./LoginPage";

const SignUpPage = () => {
  return (
    <div>
      <HeaderBar />
      <SignUpPageWrapper>
        <SignUpContent>
          <AboutSignUp />
          <SignUpForm />
        </SignUpContent>
      </SignUpPageWrapper>
    </div>
  )
};

export default SignUpPage;

const SignUpPageWrapper = styled(LoginPageWrapper)`
  height: 100%;
`;

const SignUpContent = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  padding: calc(24px * 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;