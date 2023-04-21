import { useState } from "react";
import styled, { css } from "styled-components";
import HeaderBar from "../components/common/header/HeaderBar";
import LoginForm from "../components/common/LoginForm";
import AboutSignUp from "../components/AboutSignUp";

const LoginPage = () => {

  const [ isSignup, setIsSignup ] = useState(true);

  return (
  <>
    <HeaderBar />
    <LoginPageWrapper isSignup={isSignup}>
      <LoginContent>
        { isSignup && <AboutSignUp />}
        <LoginForm isSignup={isSignup} />
      </LoginContent>
    </LoginPageWrapper>
  </>
  )
};

export default LoginPage;

const LoginPageWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(241, 242, 243);
  position: relative;
  flex-direction: row;
  align-items: center;
  background-attachment: scroll;
  height: ${({ isSignup }) => isSignup ? "100%" : "calc(100vh - 50px)" };
  min-height: ${({ isSignup }) => !isSignup && "600px" };
`;

const LoginContent = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  padding: calc(24px * 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;