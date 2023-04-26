import styled from "styled-components";
import HeaderBar from "../components/common/header/HeaderBar";
import LoginForm from "../components/user/LoginForm";

const LoginPage = () => {
  
  return (
  <>
    <HeaderBar />
    <LoginPageWrapper >
      <LoginContent>
        <LoginForm />
      </LoginContent>
    </LoginPageWrapper>
  </>
  )
};

export default LoginPage;

export const LoginPageWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(241, 242, 243);
  position: relative;
  flex-direction: row;
  align-items: center;
  background-attachment: scroll;
  height: calc(100vh - 50px);
  min-height: 600px;
`;

export const LoginContent = styled.div`
  width: 100%;
  max-width: 1264px;
  margin: 0;
  padding: calc(24px * 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;