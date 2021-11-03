import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0;
  background-color: white;
  h1 {
    margin-left: 2rem;
  }
`;
const LogoBox = styled.div`
  width: 80px;
  height: 100%;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f6f4d2;
  background-color: #d4e09b;
`;
const ButtonContainer = styled.div`
  margin-left: auto;
`;
const Button = styled.button`
  border-radius: 5px;
  background-color: #d4e09b;
  color: #6d735c;
  height: 50px;
  border: none;
  padding: 1rem;
  font-style: italic;
  &:hover {
    background-color: #6d735c;
    color: #d4e09b;
  }
  transition: 0.5s;
  cursor: pointer;
`;
const HelloBox = styled.div`
  width: 205px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 1rem;
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: #a6acbe;
  }
`;
const Icon = styled.div`
  width: 20px;
  border-radius: 50%;
  background-color: #d4e09b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-left: 0.5rem;
`;
const today = new Date().toLocaleDateString("ko-KR", {
  timezone: "Asia/Seoul",
});

const Header = () => {
  return (
    <HeaderContainer>
      <LogoBox>L</LogoBox>
      <h1>Lot(t)o.f(or).fun</h1>
      <ButtonContainer>
        <a
          rel="noreferrer noopener"
          href="https://dhlottery.co.kr/gameResult.do?method=byWin"
          target="_blank"
        >
          <Button>✌ Go to Official Lotto Website</Button>
        </a>
      </ButtonContainer>
      <HelloBox>
        <div>
          Hello, Friend!
          <span>{today}</span>
        </div>
        <Icon>🦄</Icon>
      </HelloBox>
    </HeaderContainer>
  );
};

export default Header;
