import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AccountHelpText = ({ helpText, btnText }) => {

  const navigate = useNavigate();
  const currentText = btnText === "Log in";

  const handleRouteClick = () => {
    if (currentText) {
      navigate("/auth/login");
    } else {
      navigate("/auth/signup");
    }
  };

  return (
    <AccountHelpTextWrapper>
      <p>{helpText}</p>
      <button 
        type="button"
        onClick={handleRouteClick} 
      >
        {btnText}
      </button>
    </AccountHelpTextWrapper>
  );
};

export default AccountHelpText;

const AccountHelpTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;