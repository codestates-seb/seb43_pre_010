import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";
import { AchievementsSvg, CommunitySvg, GlassesSvg, HelpSvg, MailSvg, MessageSvg, SOIconSvg, SOLogoSvg } from "../../assets/Header/HeaderSVG";


const Navbar = () => {

  const [ isSelected, setIsSelected ] = useState(false);
  const [ isOpenedHint, setIsOpenedHint ] = useState(false);
  const User = null;

  const handleMenuBtnClick = () => {
    setIsSelected(!isSelected);
  }

  return (
    <NavbarWrapper isSelected={isSelected}>
      <div className="navbar">
        <div className="menu-btn" onClick={handleMenuBtnClick}>
          <span />
        </div>
        <Link to='/' className="nav-items nav-logo">
          <HeaberLogo/>
        </Link>
        <Link to='/' className="nav-items nav-btn">About</Link>
        <Link to='/' className="nav-items nav-btn">Products</Link>
        <Link to='/' className="nav-items nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder="Search..." onClick={() => setIsOpenedHint(true)} onBlur={() => setIsOpenedHint(false)}/>
          <GlassesSvg />
          {
            isOpenedHint ?
            <div>
              <SearchHintArrow />
              <SearchHintModal>
                <div className="search-hint-text">
                  <div className="flex-item">
                    <div className="margin-bot">
                      <span>[tag]</span>
                      <span>search within a tag</span>
                    </div>
                    <div className="margin-bot">
                      <span>user:1234</span>
                      <span>search by author</span>
                    </div>
                    <div className="margin-bot">
                      <span>&quot;words here&quot;</span>
                      <span>exact phrase</span>
                    </div>
                    <div className="margin-bot">
                      <span>collective:&quot;Name&quot;</span>
                      <span>collective content</span>
                    </div>
                  </div>
                  <div className="flex-item">
                    <div className="margin-bot">
                      <span>answers:0</span>
                      <span>unanswered questions</span>
                    </div>
                    <div className="margin-bot">
                      <span>score:3</span>
                      <span>posts with a 3+ score</span>
                    </div>
                    <div className="margin-bot">
                      <span>is:question</span>
                      <span>type of post</span>
                    </div>
                    <div className="margin-bot">
                      <span>isaccepted:yes</span>
                      <span>search within status</span>
                    </div>
                  </div>
                </div>
                <SearchHintBtnWrapper>
                  <Link to='/Auth' className="nav-items nav-links ask-btn help-links">Ask a question</Link>
                  <Link to='/Auth' className="help-links">Search help</Link>
                </SearchHintBtnWrapper>
              </SearchHintModal>
            </div>
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
      </div>
    </NavbarWrapper>
  )
}

export default Navbar;

const SearchHintModal = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate3d(0px, 42.5px, 0px);
  width: 640px;
  min-width: 420px;
  height: 190px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 2px 6px 0px, rgba(0, 0, 0, 0.09) 0px 3px 8px 0px;
  color: rgb(12, 13, 14);
  display: block;
  font-size: 13px;
  font-stretch: 100%;
  font-weight: 400;
  transform: matrix(1, 0, 0, 1, 0, 42.5);
  z-index: 5;
  top: 1px;

  .search-hint-text {
    box-sizing: border-box;
    display: flex;
    color: hsl(210, 8%, 25%);
    padding: calc(12px * 1);
    height: 130px;
  }

  .flex-item {
    flex-basis: 100%;
    display: block;
    span {
      padding-right: 5px;
      padding-bottom: 20px;
    }

    span:first-child {
      color: hsl(210, 8%, 5%);
      font-weight: 400;
      font-size: 13px;
      font-family: ui-monospace,"Cascadia Mono","Segoe UI Mono","Liberation Mono",Menlo,Monaco,Consolas,monospace;
    }

    span:nth-child(2) {
      color: hsl(210, 8%, 45%);
    }
  }

  .margin-bot {
    margin-bottom: 10px;
  }
`;

const SearchHintArrow = styled.div`
  position: absolute;
  left: 0px;
  transform: translate3d(328px, 0px, 0px);
  display: block;
  height: calc(12px * 1);
  width: calc(12px * 1);
  z-index: 9999;
  bottom: unset;
  color: hsl(0, 0%, 100%);
  background-color: hsl(0, 0%, 100%);
  top: 39px;
  left: 50%;
  transform: rotate(45deg);
  box-shadow: -1px -1px 1px 0 hsla(0,0%,0%,0.12);
`;

const SearchHintBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-top: 5px;

  .ask-btn {
    font-size: 11px !important;
    margin: 5px 0px 0px 0px !important;
    padding: 6px !important;
    margin-left: 10px !important;
  }

  .help-links {
    margin: 16px;
    color: hsl(206, 100%, 40%);
    font-size: 11px;
  }
`;

const HeaberLogo = styled.div`
    background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
    width: 150px;
    height: 30px;
    background-position: 0 -500px;
    display: inline-block;
    text-align: -9999em;
    margin-top: 5px;
`;

const NavbarWrapper = styled.nav`
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

  .menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    width: 48px;
    height: 47px;

    > span {
      display: inline-block;
      height: 2px;
      width: 16px;
      margin: 3px 16px;
      position: relative;
      top: 0;
      background-color: ${({ isSelected }) => isSelected ? "transparent" : "hsl(210, 8%, 35%)" };

    }

    span:before {
      position: absolute;
      content: '';
      left: 0;
      top: -5px;
      transition: top, transform;
      transition-duration: .1s;
      transition-timing-function: ease-in-out;
      display: inline-block;
      height: 2px;
      width: 16px;
      background-color: hsl(210, 8%, 35%);
      transform: ${({ isSelected }) => isSelected ? "rotate(-45deg)" : "none" };
      top: ${({ isSelected }) => isSelected ? "0px" : "-5px" };

    }

    span:after {
      position: absolute;
      content: '';
      left: 0;
      top: -10px;
      transition: top, transform;
      transition-duration: .1s;
      transition-timing-function: ease-in-out;
      display: inline-block;
      height: 2px;
      width: 16px;
      background-color: hsl(210, 8%, 35%);
      transform: ${({ isSelected }) => isSelected ? "rotate(45deg)" : "none" };
      top: ${({ isSelected }) => isSelected ? "0px" : "5px" };
    }
  }

  .menu-btn:hover {
    background-color: rgb(226, 226, 226);
  }
`;