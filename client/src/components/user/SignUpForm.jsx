/* eslint-disable no-alert */
/* eslint-disable no-shadow */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import axios from "axios";
import Button from "../common/Button";
import AccountHelpText from "./AccountHelpText";
import EmployerHelpText from "./EmployerHelpText";
import { SignUpHelpIcon } from "../../assets/Login/LoginSVG";
import PrivacyImg from "../../assets/Login/PrivacyImg.png";
import SocialForm from "./SocialForm";

const SignUpForm = () => {

  const navigate = useNavigate();

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const nameRegex = /^[a-zA-Z0-9가-힣]{2,20}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name" :
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;      
    }
  };

  const handleSubmit = async () => {
    try {
      console.log("서버에 요청");

      if (!emailRegex.test(email)) {
        alert("이메일 형식이 올바르지 않습니다.");
        return;
      }
      if (!nameRegex.test(name)) {
        alert("닉네임은 2~20자의 한글, 영문, 숫자만 사용 가능합니다.");
        return;
      }
      if (!passwordRegex.test(password)) {
        alert("비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 모두 포함해야 합니다.");
        return;
      }

      const formData = {
        email,
        password,
        name,
      };

      const URL = `http://ec2-43-201-77-252.ap-northeast-2.compute.amazonaws.com:8080`;

      const response = await axios.post(`${URL}/users/auth/signup`, {
        email : formData.email,
        password : formData.password,
        name : formData.name,
      });

      const { accessToken } = response.data;

      if (!accessToken) {
        console.log("로그인 실패");
        return;
      }
      alert("회원가입이 완료되었습니다.");
      navigate("/auth/login");

    } catch (err) {
      if (err.response && err.response.status === 409) {
        alert("이미 존재하는 회원입니다.");
        setEmail("");
        setName("");
        setPassword("");
      }
      console.log(err);
    }
  };

  return(
    <SignUpFormWrapper>
      <SocialForm currentPageText="Sign up" />
      <SignUpFormContent>
        <SignUpInputForm>
          <Label htmlFor="name">
            <h4>Display Name</h4>
            <SignUpInput 
              type="text" 
              id="name" 
              name="name"
              value={name}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="email">
            <h4>Email</h4>
            <SignUpInput 
              type="email" 
              name="email" 
              id="email"
              value={email}
              onChange={handleInputChange}
            />
          </Label>
          <Label htmlFor="password">
            <h4>Password</h4>
            <SignUpInput 
              type="password" 
              name="password" 
              id="password"
              value={password}
              onChange={handleInputChange} 
            />
            <SubText type="password">Passwords must contain at least eight characters,<br />including at least 1 letter and 1 number.</SubText>
          </Label>
          <PrivacyContent />
          <CheckingForm htmlFor="check">
            <CheckBoxContent>
              <SignUpInput type="checkbox" id="check" />
            </CheckBoxContent>
            <p>Opt-in to receive occasional product<br />updates, user research invitations, company<br />announcements, and digests.</p>
            <SignUpHelpIcon />
          </CheckingForm>
          <Button 
            text="Sign up"
            onClick={handleSubmit}
          />
          <SubText>
            By clicking “Sign up”, you agree to our
            <span> terms of<br />service</span>
            , <span>privacy policy</span> and <span>cookie policy</span>
          </SubText>
        </SignUpInputForm>
        <AccountHelpText helpText="Already have an account?" btnText="Log in" />
        <EmployerHelpText />
      </SignUpFormContent>
    </SignUpFormWrapper>
  );
};

export default SignUpForm;

const SignUpFormWrapper = styled.div`
  width: 316px;
`;

const SignUpFormContent = styled.div`
  font-size: 12px;
  span {
    color: #007ac6;
  }
  button {
    color: #0074cc;
    padding: 0px 5px;
  }
  .iconHelpSm {
    margin-bottom: 35px;
  }
  .iconShareSm {
    margin-top: 5px;
  }
`;

const SignUpInputForm = styled.div`
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

const SignUpInput = styled.input`
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

const PasswordsHelpTextStyle = css`
  margin-top: -10px;
  margin-bottom: 15px;
`;

const SubText = styled.p`
  color: rgb(106, 115, 124);
  font-size: 12px;
  font-weight: 400;
  margin-top: 28px;
  ${({ type }) => {
    switch (type) {
      case "password":
        return PasswordsHelpTextStyle;
      default:
        return "";
    }
  }}
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

const CheckingForm = styled(Label)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 400;
`;

const CheckBoxContent = styled.div`
  width: 13px;
  height: 13px;
  display: flex;
  align-items: center;
  padding-bottom: 30px;
  margin-right: 4px;
`;