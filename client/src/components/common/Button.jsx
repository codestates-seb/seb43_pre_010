import styled, { css } from "styled-components";

const Button = ({ type, icon, text }) => {
  return (
    <LoginButton type={type}>
      { icon }
      <p>{text}</p>
    </LoginButton>
  )
}

export default Button;

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