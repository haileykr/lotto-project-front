import React, { useState, useCallback } from "react";
import LottoBoxSimple from "./lotto-box/LottoBoxSimple";
import styled from "styled-components";

const LottoRandomContentBox = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  width: 90%;
  height: 800px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: white;
  overflow: scroll;
  h2 {
    border-bottom: 1px solid #eef0f6;
    text-align: start;
    padding-left: 1rem;
    margin-top: 1rem;
  }
`;
const RandomButton = styled.button`
  max-width: 100px;
  margin-left: 1rem;
  padding: 1rem;
  border-radius: 15px;
  border: none;
  color: white;
  cursor: pointer;
  background-color: #d4e09b;
`;

const LottoRandomContent = () => {
  const [lottoNumbers, setLottoNumbers] = useState([]);
  const handleButtonClick = useCallback(() => {
    const lottoNumber = [];
    while (lottoNumber.length < 7) {
      const newNumber = Math.floor(Math.random() * 45) + 1;
      if (!lottoNumber.includes(newNumber)) {
        lottoNumber.push(newNumber);
      }
    }
    lottoNumber.sort((a, b) => a - b);
    setLottoNumbers([...lottoNumbers, lottoNumber]);
  }, [lottoNumbers]);

  return (
    <LottoRandomContentBox>
      <h2>Generate Random Numbers!</h2>
      {lottoNumbers.map((lottoNumber, i) => (
        <LottoBoxSimple key={i} lottoNumber={lottoNumber} />
      ))}
      <RandomButton onClick={handleButtonClick}>Generate!</RandomButton>
    </LottoRandomContentBox>
  );
};

export default LottoRandomContent;
