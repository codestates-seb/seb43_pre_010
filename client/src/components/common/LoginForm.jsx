import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { SignUpHelpIcon, SignUpTalentIcon } from "../../assets/Login/LoginSVG";

const LoginForm = ({ isSignup }) => {

  return (
    <LoginFormWrapper>
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
            <h4>Password</h4>
            <h4>forgot password?</h4>
            <input type="password" name="password" id="password" />
            { isSignup && <p>Passwords must contain at least eight characters,<br />including at least 1 letter and 1 number.</p>}
          </label>
          {
            isSignup && (
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                <p>Opt-in to receive occasional product<br />updates, user research invitations, company<br />announcements, and digests.</p>
                <SignUpHelpIcon />
              </label>
            )
          }
            <Button text={isSignup ? "Sign up" : "Log in"} />
            {
              isSignup && (
                <p>
                  By clicking “Sign up”, you agree to our
                  <span>terms of<br />service</span>
                  , <span>privacy policy</span> and <span>cookie policy</span>
                </p>
              )
            }
        </form>
        <p>
          { isSignup ? "Already have an account?" : "Don't have an account?"}
          <button type="button" >{isSignup ? "Log in" : "Sign up"}</button>
        </p>
        <p>Are you an employer?</p>
        <button type="button" >Sign up on Talent</button>
        <SignUpTalentIcon />
      </LoginFormContent>
    </LoginFormWrapper>
  );
};

export default LoginForm;

const LoginFormWrapper = styled.section`
  
`;

const LoginFormContent = styled.div`
  
`;

