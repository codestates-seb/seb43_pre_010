import styled, { css } from "styled-components";
import HeaderBar from "../components/common/header/HeaderBar";
import { SOLogoSvg } from "../assets/Header/HeaderSVG";
import { GoogleIcon, GithubIcon, FacebookIcon } from "../assets/Login/LoginSVG";

const LoginPage = () => {
  return (
  <>
    <HeaderBar />
    <LoginPageWrapper>
      <LoginContent>
        <SOLogoSvg />
        <SocialLogins>
          <LoginButton type="google" >
            <GoogleIcon />
            <p>Log in with Google</p>
          </LoginButton>
          <LoginButton type="github" >
            <GithubIcon />
            <p>Log in with GitHub</p>
          </LoginButton>
          <LoginButton type="facebook" >
            <FacebookIcon />
            <p>Log in with Facebook</p>
          </LoginButton>
        </SocialLogins>
        폼
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

const defaultStyle = css`
  background-color: #0a95ff;
  color: #ffffff;
`;

const googleBtnStyle = css`
  background-color: #ffffff;
  color: #3b4045;
`;

const gitHubBtnStyle = css`
  background-color: #2f3337;
  color: #ffffff;  
`;

const facebookBtnStyle = css`
  background-color: #385499;
  color: #ffffff;  
`;

const LoginButton = styled.button`
  width: 100%;
  height: 37.78px;
  background-color: aqua;
  margin: 4px 0px;
  border-radius: 5px;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(214, 217, 220);

  ${( { type } ) => {
    switch (type) {
      case 'google' :
        return googleBtnStyle;
      case 'github' :
        return gitHubBtnStyle;
      case 'facebook' :
        return facebookBtnStyle;
      default :
        return defaultStyle;
    }
  }}

  > p {
    margin-left: 5px;
    line-height: 50%;
  }
`;