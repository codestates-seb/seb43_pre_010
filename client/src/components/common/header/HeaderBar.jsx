import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import SearchModal from "./SearchModal";
import Avatar from "../Avatar";
import Button from "../Button";
import { AchievementsSvg, CommunitySvg, GlassesSvg, HelpSvg, MailSvg, MessageSvg, SOIconSvg, SOLogoSvg } from "../../../assets/Header/HeaderSVG";

const HeaderBar = () => {

  const [ isSelected, setIsSelected ] = useState(false);
  const [ isOpenedHint, setIsOpenedHint ] = useState(false);
  const User = null;

  const handleMenuBtnClick = () => {
    setIsSelected(!isSelected);
  }

  return (
    <HeaderWrapper>
      <nav className="navbar">
        <MenuButton onClick={handleMenuBtnClick} isSelected={isSelected} />
        <Link to='/' className="nav-items nav-logo"><HeaberLogo/></Link>
        <Link to='/' className="nav-items nav-btn">About</Link>
        <Link to='/' className="nav-items nav-btn">Products</Link>
        <Link to='/' className="nav-items nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder="Search..." onClick={() => setIsOpenedHint(true)} onBlur={() => setIsOpenedHint(false)}/>
          <GlassesSvg />
          {
            isOpenedHint ? <SearchModal />
            : null
          }
        </form>
        { User === null ?
        <>
        <Link to='/Auth' className="nav-items nav-links">Log in</Link> 
        <Link to='/Auth' className="nav-items nav-links sign-btn">Sign up</Link>
        </>
        :
        <Link to='/' className="">
          <Avatar>M</Avatar>
          <Button>Log out</Button>
        </Link>
      }
      </nav>
    </HeaderWrapper>
  )
}

export default HeaderBar;

const HeaberLogo = styled.div`
  background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
  width: 150px;
  height: 30px;
  background-position: 0 -500px;
  display: inline-block;
  text-align: -9999em;
  margin-top: 5px;
`;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  min-height: 50px;
  width: 100%;
  margin: 0% auto;
  border-top: 3px solid #ef8236;
  box-shadow: 0px 1px 5px #00000033;
  position: fixed;
  z-index: 5;
  top: 0%;
  left: 0%;
  background-color: #f8f9f9;

  .nav-logo {
    padding: 0 calc(8px * 1);
    height: 47px;
  }

  .nav-items {
    margin: 0px 3px;
    font-size: small;
    font-weight: 500;
    text-decoration: none;
    color: rgb(69, 69, 69);
    transition: 0.2s;
  }

  .nav-items:hover {
    background-color: rgb(226, 226, 226);
  }

  .navbar {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s;
    width: 97.2307692rem;
    max-width: 65%;
    margin: 0 auto;
  }

  .nav-btn {
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 12px;
    line-height: 50%;
  }

  .navbar form {
    flex-grow: 1;
    position: relative;
    padding: 0 calc(8px * 1);
    padding-left: 0;
    display: flex;
    align-items: center;
  }

  .navbar form input {
    min-width: 100%;
    margin: 0 0 0 5px;
    padding: 7px 10px 7px 32px;
    font-size: 13px;
    border: 1px solid #0000003e;
    border-radius: 3px;
  }

  .navbar form input:focus {
    outline: none;
    border-color: hsl(206, 90%, 69.5%);
    box-shadow: 0 0 0 4px hsla(206, 100%, 40%, .15);
  }

  .navbar form .iconSearch {
    position: absolute;
    left: 15px;
    top: 10px;
    fill: rgb(131, 140, 149);
  }

  .nav-links {
    padding: 7px 13px;
    border: 1px solid hsl(205,47%,42%);
    border-radius: 3px;
    background-color: hsl(205, 46%, 92%);
    cursor: pointer;
    color: hsl(205,47%,42%);
    box-shadow: rgba(255, 255, 255, 0.698) 0px 1px 0px 0px inset;
  }

  .nav-links:hover {
    background-color: hsl(205, 57%, 81%);
  }

  .sign-btn {
    padding-left: 10px;
    padding-right: 10px;
    background-color: hsl(206, 100%, 52%);
    color: rgb(255, 255, 255);
    box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  }

  .sign-btn:hover {
    background-color: hsl(206, 100%, 40%);
  }
`;