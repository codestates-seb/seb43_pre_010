import { useState } from "react";
import styled, { css } from "styled-components";
import HeaderBar from "../components/common/header/HeaderBar";
import Button from "../components/common/Button";
import LoginForm from "../components/common/LoginForm";
import { SOLogoSvg } from "../assets/Header/HeaderSVG";
import { GoogleIcon, GithubIcon, FacebookIcon } from "../assets/Login/LoginSVG";

const LoginPage = () => {

  const [ isSignup, setIsSignup ] = useState(true);

  return (
  <>
    <HeaderBar />
    <LoginPageWrapper>
      <LoginContent>
        <SOLogoSvg />
        <SocialLogins>
          <Button type="google" icon={<GoogleIcon />} text={`${isSignup ? "Sign up" : "Log in"} with Google`} />
          <Button type="github" icon={<GithubIcon />} text={`${isSignup ? "Sign up" : "Log in"} with GitHub`} />
          <Button type="facebook" icon={<FacebookIcon />} text={`${isSignup ? "Sign up" : "Log in"} with Facebook`} />
        </SocialLogins>
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
`;

const LoginContent = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  background-color: transparent;
  padding: calc(24px * 1);
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);
  flex-direction: column;

  .iconLogoGlyphMd {
    margin-bottom: 24px;
    cursor: pointer;
  }
`;

const SocialLogins = styled.div`
  display: flex;
  flex-direction: column;
  width: 278px;
  margin-bottom: 16px;
`;