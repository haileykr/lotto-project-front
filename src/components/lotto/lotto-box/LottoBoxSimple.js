import React from "react";
import { LottoBox, LottoBoxNumber } from "./LottoBoxComponentStyles.jsx";

const LottoBoxSimple = ({ lottoNumber }) => {
  let numbers;

  if (lottoNumber) {
    numbers = lottoNumber.slice(0, 6);
  }

  return (
    <>
      {lottoNumber && lottoNumber.length > 0 ? (
        <LottoBox>
          {numbers.map((n, i) => (
            <LottoBoxNumber key={i}>{n}</LottoBoxNumber>
          ))}
        </LottoBox>
      ) : (
        <h1>Server Temporarily Not Available</h1>
      )}
    </>
  );
};

export default LottoBoxSimple;
