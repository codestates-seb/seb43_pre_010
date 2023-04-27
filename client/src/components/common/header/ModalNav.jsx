import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { IoEarthSharp } from 'react-icons/io5';

const ModalNav = () => {

  const location = useLocation();

  return (
    <ModalLayout>
      <FlexItems type={location.pathname === '/' ? 'selected' : ''}>
        <Link to='/' className="nav-items">
          Home
        </Link>
      </FlexItems>
      <NavTitle>
        PUBLIC
      </NavTitle>
      <FlexItems type={location.pathname === '/questions' ? 'selected' : ''}>
        <IoEarthSharp width="18" height="18" fill="#525960"/>
        <Link to='/questions' className="nav-items">
          Questions
        </Link>
      </FlexItems>
      <SubItems type={
        location.pathname === '/auth/login' ||  location.pathname === '/auth/signup' 
          ? 'selected' : ''
        }
      >
        <Link to={location.pathname} className="nav-items">
          Users
        </Link>
      </SubItems>
    </ModalLayout>
  );
}

export default ModalNav;

const ModalLayout = styled.div`
  position: fixed;
  top: 50px;
  left: 0px;
  width: 240px;
  padding-top: 24px;
  padding-bottom: 12px;
  display: none;
  flex-direction: column;
  justify-content: left;
  z-index: 9999;
  background-color: #fff;
  border: 1px solid hsl(210, 8%, 85%);
  box-shadow: 0px 1px 5px #00000033;
  @media screen and (max-width: 650px) {
    display: flex;
  }
  .nav-items { 
    color: #525960;
    font-size: 13px;
  }
`;

const NavTitle = styled.h4`
  padding-left: 10px;
  color: #6a737c;
  font-size: 11px;
`;

const selectedStyle = css`
  .nav-items { 
    color: #0c0d0e;
    font-size: 13px;
    font-weight: 700;
  }
  background-color: #e4e4e4;
  border-right: 3px solid #e67206;
`;

const defaultStyle = css`
  .nav-items { 
    color: #525960;
    font-size: 13px;
    font-weight: 400;
  }
`;

const FlexItems = styled.li`
  padding-left: 15px;
  padding: 5px 0px 5px 10px;
  list-style: none;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 10px;
  z-index: 9999;
  ${( { type } ) => {
    switch (type) {
      case 'selected' :
        return selectedStyle;
      default :
        return defaultStyle;
    }
  }}
`;

const SubItems = styled(FlexItems)`
  position: relative;
  top: -15px;
  padding-left: 37px;
  margin-bottom: 0px;
`;