import styled from "styled-components";
import { SOLogoSvg } from "../../../assets/Header/HeaderSVG";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <SOLogoSvg />
        <FlexContainer>
          <FooterTitle>STACK OVERFLOW</FooterTitle>
          <ListItem>
            <p>Questions</p>
            <p>Help</p>
          </ListItem>
        </FlexContainer>
        <FlexContainer>
          <FooterTitle>PRODUCTS</FooterTitle>
          <ListItem>
            <p>Teams</p>
            <p>Advertising</p>
            <p>Collectives</p>
            <p>Talent</p>
          </ListItem>
        </FlexContainer>
        <FlexContainer>
          <FooterTitle>COMPANY</FooterTitle>
          <ListItem>
            <p>About</p>
            <p>Press</p>
            <p>Work Here</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
            <p>Cookie Settings</p>
            <p>Cookie Policy</p>
          </ListItem>
        </FlexContainer>
        <FlexContainer>
          <FooterTitle>STACK EXCHANGE NETWORK</FooterTitle>
          <ListItem>
            <p>Technology</p>
            <p>Culture & recreation</p>
            <p>Life & arts</p>
            <p>Science</p>
            <p>Professional</p>
            <p>Business</p>
            <MarginTopText>API</MarginTopText>
            <p>Data</p>
          </ListItem>
        </FlexContainer>
        <CopyLight>
          <SocialList>
            <p>Blog</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Instagram</p>
          </SocialList>
          <CopyrightNotice>
            <p>Site design / logo © 2023 Stack Exchange Inc; user contributions</p>
            <p>licensed under <span>CC BY-SA</span>. rev 2023.4.21.43403</p>
          </CopyrightNotice>
        </CopyLight>
      </FooterContent>
    </FooterWrapper>
  )
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  background-color: rgb(35, 38, 41);
  color: rgb(145, 153, 161);
  font-size: 13px;
  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
  @media screen and (max-width: 650px) {
    .iconLogoGlyphMd {
      display: none;
    }
  }
`;

const FooterContent = styled(FooterWrapper)`
  max-width: 90vw;
  padding: 24px 12px;
  gap:50px;
  @media screen and (max-width: 950px) {
    gap: 25px;
    padding-left: 35px;
    padding-bottom: 0px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  @media screen and (max-width: 950px) {
    position: relative;
    top: -50px;
    left: 70px;
  }
  @media screen and (max-width: 800px) {
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

const FooterTitle = styled.h4`
  cursor: pointer;
  color: #babfc4;
  font-size: 13px;
  font-weight: 700;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
  margin-bottom: 15px;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #9199a1;
  font-size: 13px;
  font-weight: 400;
  gap: 5px;
  p {
    cursor: pointer;
  }
  p:hover {
    color: #9fa6ad;
  }
  @media screen and (max-width: 950px) {
    flex-direction: row;
    gap: 10px;
  }
  @media screen and (max-width: 800px) {
    flex-direction: row;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

const MarginTopText = styled.p`
  margin-top: 15px;
  @media screen and (max-width: 950px) {
    margin-top: 0px;
  }
`;

const CopyLight = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 950px) {
    position: relative;
    top: -30px;
  }
  @media screen and (max-width: 800px) {
    top: 0px;
    margin-bottom: 20px;
  }
`;

const SocialList = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  font-size: 11px;
  text-align: center;
  gap: 10px;
`;

const CopyrightNotice = styled.div`
  font-size: 11px;
  margin-top: 200px;
  span {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 950px) {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;