import styled from "styled-components";
import Button from "../common/Button";
import { GoogleIcon, GithubIcon, FacebookIcon } from "../../assets/Login/LoginSVG";

const SocialForm = ({ currentPageText }) => {

  const isSignup = currentPageText === "Sign up";

  return (
    <SocialFormWrapper isSignup={isSignup}>
      <Button type="google" icon={<GoogleIcon />} text={`${currentPageText} with Google`} />
      <Button type="github" icon={<GithubIcon />} text={`${currentPageText} with GitHub`} />
      <Button type="facebook" icon={<FacebookIcon />} text={`${currentPageText} with Facebook`} />
    </SocialFormWrapper>
  )
};

export default SocialForm;

const SocialFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ isSignup }) => isSignup ? "316px" : "278px" };
  margin-bottom: 16px;
`;
