import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import Button from "./Button";
import { AchievementsSvg, CommunitySvg, GlassesSvg, HelpSvg, MailSvg, MessageSvg, SOIconSvg, SOLogoSvg } from "../../assets/Header/HeaderSVG";

const Navbar = () => {

  const User = null;

  return (
    <NavbarWrapper>
      <div className="navbar">
        <Link to='/' className="nav-items nav-logo">
          <HeaberLogo/>
        </Link>
        <Link to='/' className="nav-items nav-btn">About</Link>
        <Link to='/' className="nav-items nav-btn">Products</Link>
        <Link to='/' className="nav-items nav-btn">For Teams</Link>
        <form>
          <input type="text" placeholder="Search..." />
          <GlassesSvg />
        </form>
        { User === null ? 
        <Link to='/Auth' className="nav-items nav-links">Log in</Link> :
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

const HeaberLogo = styled.div`
    background-image: url(https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27);
    width: 150px;
    height: 30px;
    background-position: 0 -500px;
    display: inline-block;
    text-align: -9999em;
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
    padding: 5px 25px;
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
    padding: 10px 20px;
  }

  .navbar form {
    flex-grow: 1;
    position: relative;
    padding: 0 calc(8px * 1);
    display: flex;
    align-items: center;
  }

  .navbar form input {
    min-width: 100%;
    margin: 0 0 0 5px;
    padding: 8px 10px 8px 32px;
    font-size: 13px;
    border: 1px solid #0000003e;
    border-radius: 3px;
  }

  .navbar form .iconSearch {
    position: absolute;
    left: 25px;
    top: 10px;
    fill: rgb(131, 140, 149);
  }

  .nav-links {
    padding: 7px 13px;
    border: 1px solid hsl(205,47%,42%);
    border-radius: 3px;
    background-color: #e7f8fe;
    cursor: pointer;
    color: hsl(205,47%,42%);
  }

  .nav-links:hover {
    background-color: #d3e4eb;
  }
`;