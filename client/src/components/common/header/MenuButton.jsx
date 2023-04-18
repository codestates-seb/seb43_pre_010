import styled from "styled-components";

const MenuButton = ({ onClick, isSelected }) => {
  return (
    <StyledMenuButton onClick={onClick} isSelected={isSelected}>
      <span />
    </StyledMenuButton>
  );
};

export default MenuButton;

const StyledMenuButton = styled.div`
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
  };

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
  };

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
  };

  &:hover {
    background-color: rgb(226, 226, 226);
  };
`;