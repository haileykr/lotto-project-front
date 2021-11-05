import styled from "styled-components";

export const LottoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LottoBoxNumber = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  margin: 1rem;
  text-align: center;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 50%;
  box-shadow: rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset,
    rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset,
    rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset,
    rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px,
    rgba(255, 255, 255, 0.09) 0px 8px 4px,
    rgba(255, 255, 255, 0.09) 0px 16px 8px,
    rgba(255, 255, 255, 0.09) 0px 32px 16px;
  background-color: #69c8f2;
  &:first-child {
    background-color: #fbc400;
  }
  &:nth-child(2) {
    background-color: #69c8f2;
  }
  &:nth-child(3) {
    background-color: #ff7272;
  }
  &:nth-child(4) {
    background-color: #aaaaaa;
  }
  &:nth-child(5) {
    background-color: #b0d840;
  }
  &:nth-child(6) {
    background-color: #fbc400;
  }
`;

export const LottoBoxNumberSm = styled.div`
  width: 20px;
  height: 20px;
  border: none;
  margin: 0.5rem;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: white;
`;

export const LottoBoxPlus = styled.div`
  width: 40px;
  height: 40px;
  margin: 8px;
  text-align: center;
  font-size: 30px;
`;
