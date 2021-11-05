import React from "react";
import { LottoBox, LottoBoxNumberSm } from "./LottoBoxComponentStyles.jsx";

const LottoBoxSimpleSm = ({ lottoNumber }) => {
  let numbers;
  if (lottoNumber) {
    numbers = lottoNumber.slice(0, 6);
  }

  return (
    <>
      {lottoNumber && lottoNumber.length > 0 ? (
        <LottoBox>
          {numbers.map((n, i) => (
            <LottoBoxNumberSm key={i}>{n}</LottoBoxNumberSm>
          ))}
        </LottoBox>
      ) : (
        <h1>Server Temporarily Not Available</h1>
      )}
    </>
  );
};

export default LottoBoxSimpleSm;
