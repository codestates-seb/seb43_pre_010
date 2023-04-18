import styled from "styled-components";
import HeaderLogo from "../../assets/Header/HeaderLogo.jpg";
import { AchievementsSvg, CommunitySvg, GlassesSvg, HelpSvg, MailSvg, MessageSvg, SOIconSvg, SOLogoSvg } from "../../assets/Header/HeaderSVG";

const Navbar = () => {
  return (
    <div>
      <img src={HeaderLogo} alt="logo"/>
      <AchievementsSvg />
      <CommunitySvg />
      <GlassesSvg />
      <HelpSvg />
      <MailSvg />
      <MessageSvg />
      <SOIconSvg />
      <SOLogoSvg />
    </div>
  )
}

export default Navbar;