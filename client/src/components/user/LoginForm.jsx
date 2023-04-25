/* eslint-disable no-alert */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "../common/Button";
import { SOLogoSvg } from "../../assets/Header/HeaderSVG";
import SocialForm from "./SocialForm";
import EmployerHelpText from "./EmployerHelpText";
import AccountHelpText from "./AccountHelpText";

const LoginForm = () => {

  const navigate = useNavigate();

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const [ cookies, setCookie ] = useCookies(['jwt']);

  const handleSubmit = async () => {
    try {

      const formData = {
        email,
        password,
      };

      const response = await axios.post("http://localhost:8000/auth/login", {
        email : formData.email,
        password : formData.password,
      });

      const { accessToken, expiredTimestamp } = response.data;

      if (!accessToken) {
        console.log("로그인 실패");
        return;
      }

      setCookie('jwt', accessToken, { path: '/', expires: new Date(expiredTimestamp) });
      
      if (cookies) {
        navigate("/");
      }

    } catch (err) {
      alert("일치하는 회원정보가 없습니다.");
      setEmail("");
      setPassword("");
      console.log(err);
    }
  };

  return (
    <LoginFormWrapper >
        <SOLogoSvg />
        <SocialForm currentPageText="Log in" />
      <LoginFormContent>
        <LoginInputForm>
          <Label htmlFor="email">
            <h4>Email</h4>
            <LoginInput 
              type="email" 
              name="email" 
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label htmlFor="password">
            <HelpTextWrapper>
              <h4>Password</h4>
              <h4>Forgot password?</h4>
            </HelpTextWrapper>
            <LoginInput 
              type="password" 
              name="password" 
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Label>
            <Button 
              text="Log in"
              onClick={handleSubmit} 
            />
        </LoginInputForm>
        <AccountHelpText helpText="Don't have an account?" btnText="Sign up" />
        <EmployerHelpText />
      </LoginFormContent>
    </LoginFormWrapper>
  );
};

export default LoginForm;

const LoginFormWrapper = styled.section`
  width: 278px;
  font-size: 12px;

  .iconLogoGlyphMd {
    margin: 0 auto;
    margin-bottom: 24px;
    cursor: pointer;
  }
  .iconShareSm {
    margin-top: 5px;
  }
`;

const LoginInputForm = styled.div`
  margin-bottom: 24px;
  padding: 22px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 10px 24px 0px, rgba(0, 0, 0, 0.05) 0px 20px 48px 0px, rgba(0, 0, 0, 0.1) 0px 1px 4px 0px;
  border-radius: 7px;
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
  color: rgb(12, 13, 14);  
`;

const LoginInput = styled.input`
  min-width: 100%;
  padding: 7.8px 9px;
  font-size: 13px;
  border: 1px solid #0000003e;
  border-radius: 3px;
  font-weight: 400;
  margin: 6px 0px 13px 0px;
  &:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px hsla(206, 100%, 40%, .15);
  }
`;

const HelpTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  h4:last-child {
    color: rgb(0, 116, 204);
    font-size: 12px;
    cursor: pointer;
    &:hover {
      color: hsl(206, 100%, 52%);
    }
  }
`;

export const LoginFormContent = styled.div`
  span {
    color: #007ac6;
  }
  button {
    color: #0074cc;
    padding: 0px 5px;
  }
`;