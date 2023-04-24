import styled from "styled-components";

const Avatar = () => {
  return (
    <UserProfileWrapper>
      <UserProfile>H</UserProfile>
    </UserProfileWrapper>
  )
}

export default Avatar;

const UserProfileWrapper = styled.div`
  width: 40px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  :hover {
    background-color: rgb(226, 226, 226);
  }
`;

const UserProfile = styled.div`
  width: 24px;
  height: 24px;
  background-color: green;
  border-radius: 3px;
  text-align: center;
  font-size: 14px;
  color: #fff;
`