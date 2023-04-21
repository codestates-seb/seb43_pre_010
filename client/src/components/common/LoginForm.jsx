import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { SignUpHelpIcon, SignUpTalentIcon, GoogleIcon, GithubIcon, FacebookIcon } from "../../assets/Login/LoginSVG";
import PrivacyImg from "../../assets/Login/PrivacyImg.png";
import { SOLogoSvg } from "../../assets/Header/HeaderSVG";

const LoginForm = ({ isSignup }) => {

  return (
    <LoginFormWrapper isSignup={isSignup}>
        { !isSignup && <SOLogoSvg />}
        <SocialLogins isSignup={isSignup}>
          <Button type="google" icon={<GoogleIcon />} text={`${isSignup ? "Sign up" : "Log in"} with Google`} />
          <Button type="github" icon={<GithubIcon />} text={`${isSignup ? "Sign up" : "Log in"} with GitHub`} />
          <Button type="facebook" icon={<FacebookIcon />} text={`${isSignup ? "Sign up" : "Log in"} with Facebook`} />
        </SocialLogins>
      <LoginFormContent>
        <form>
          {
            isSignup && (
              <label htmlFor="name">
                <h4>Display Name</h4>
                <input type="text" id="name" name="name"/>
              </label>
            )
          }
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name="email" id="email"/>
          </label>
          <label htmlFor="password">
            <div className="password-help-text">
              <h4>Password</h4>
              { !isSignup && <h4 className="forgot-text">Forgot password?</h4> }
            </div>
            <input type="password" name="password" id="password" />
            { isSignup && <p className="sub-text passwords-text">Passwords must contain at least eight characters,<br />including at least 1 letter and 1 number.</p>}
          </label>
          { isSignup && <PrivacyContent />}
          {
            isSignup && (

              <label htmlFor="check" className="check-form">
                <div className="check-box">
                  <input type="checkbox" id="check" />
                </div>
                <p>Opt-in to receive occasional product<br />updates, user research invitations, company<br />announcements, and digests.</p>
                <SignUpHelpIcon />
              </label>

            )
          }
            <Button text={isSignup ? "Sign up" : "Log in"} />
            {
              isSignup && (
                <p className="sub-text">
                  By clicking “Sign up”, you agree to our
                  <span> terms of<br />service</span>
                  , <span>privacy policy</span> and <span>cookie policy</span>
                </p>
              )
            }
        </form>
        <p className="bottom-text">
          { isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type="button" >{isSignup ? "Log in" : "Sign up"}</button>
        </p>
        <div className="employer-help ">
          <p>Are you an employer?</p>
          <button type="button" >Sign up on Talent</button>
          <SignUpTalentIcon />
        </div>
      </LoginFormContent>
    </LoginFormWrapper>
  );
};

export default LoginForm;

const LoginFormWrapper = styled.section`
  width: ${({ isSignup }) => isSignup ? "316px" : "278px" };

  .iconLogoGlyphMd {
    margin: 0 auto;
    margin-bottom: 24px;
    cursor: pointer;
  }
`;

const SocialLogins = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ isSignup }) => isSignup ? "316px" : "278px" };
  margin-bottom: 16px;
`;

const PrivacyContent = styled.div`
  background-image: url(${PrivacyImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 267px;
  height: 153px;
  margin: 10px 0px;
  border: 1px solid rgb(227, 230, 232);
  border-radius: 3px;
`

const LoginFormContent = styled.div`
  .password-help-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .forgot-text {
    color: rgb(0, 116, 204);
    font-size: 12px;
    cursor: pointer;
  }
  .forgot-text:hover {
    color: hsl(206, 100%, 52%);
  }
  p {
    font-size: 12px;
  }
  span {
    font-size: 12px;
    color: #007ac6;
  }
  button {
    font-size: 12px;
    color: #0074cc;
    padding: 0px 5px;
  }
  label {
    font-size: 15px;
    font-weight: 600;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
    color: rgb(12, 13, 14);
  }
  form {
    margin-bottom: 24px;
    padding: 22px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
    border-radius: 7px;
  }
  input {
    min-width: 100%;
    padding: 7.8px 9px;
    font-size: 13px;
    border: 1px solid #0000003e;
    border-radius: 3px;
    font-weight: 400;
    margin: 6px 0px 13px 0px;
  }
  input:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px hsla(206, 100%, 40%, .15);
  }
  .sub-text {
    color: rgb(106, 115, 124);
    font-size: 12px;
    font-weight: 400;
    margin-top: 28px;
  }
  .passwords-text {
    margin-top: -10px;
    margin-bottom: 15px;
  }

  .check-form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 15px;
    > p {
      font-size: 12px;
      font-weight: 400;
    }
  }
  .check-box {
    width: 13px;
    height: 13px;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
    margin-right: 4px;
  }
  .iconHelpSm {
    width: 14px;
    height: 14px;
    margin-bottom: 35px;
  }

  .employer-help {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 15px 0px;
  }

  .iconShareSm {
    margin-top: 5px;
  }

  .bottom-text {
    text-align: center;
  }
`;