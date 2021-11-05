import React from "react";
import * as axios from "axios";
import LottoBoxSimple from "./lotto-box/LottoBoxSimple";
import styled from "styled-components";

const LatestNumbersBox = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 90%;
  height: 170px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    border-bottom: 1px solid #eef0f6;
    text-align: start;
    padding-left: 1rem;
    margin-top: 1rem;
  }
`;

const LottoStatistics = () => {
  let most1Month;
  let most3Months;
  let most1Year;
  let most3Years;
  let most10Years;
  let mostAll;
  let least1Month;
  let least3Months;
  let least1Year;
  let least3Years;
  let least10Years;
  let leastAll;
  const getNum = async () => {
    let latestNums = await axios.get(
      "https://lott-of-fun.herokuapp.com/number-counts-stats"
    );

    const data = latestNums.data;

    if (data) {
      const {
        sorted1Month,
        sorted3Months,
        sorted1Year,
        sorted3Years,
        sorted10Years,
        sortedAll,
      } = data;
      most1Month = sorted1Month.slice(0, 6).map((i) => i[0]);
      least1Month = sorted1Month.slice(38).map((i) => i[0]);
      most3Months = sorted3Months.slice(0, 6).map((i) => i[0]);
      least3Months = sorted3Months.slice(38).map((i) => i[0]);
      most1Year = sorted1Year.slice(0, 6).map((i) => i[0]);
      least1Year = sorted1Year.slice(38).map((i) => i[0]);
      most3Years = sorted3Years.slice(0, 6).map((i) => i[0]);
      least3Years = sorted3Years.slice(38).map((i) => i[0]);
      most10Years = sorted10Years.slice(0, 6).map((i) => i[0]);
      least10Years = sorted10Years.slice(38).map((i) => i[0]);
      mostAll = sortedAll.slice(0, 6).map((i) => i[0]);
      leastAll = sortedAll.slice(38).map((i) => i[0]);
    }
  };
  getNum();

  return (
    <LatestNumbersBox>
      <LottoBoxSimple lottoNumber={most1Month} />

      <LottoBoxSimple lottoNumber={least1Month} />
      <LottoBoxSimple lottoNumber={most3Months} />
      <LottoBoxSimple lottoNumber={least3Months} />
      <LottoBoxSimple lottoNumber={most1Year} />
      <LottoBoxSimple lottoNumber={least1Year} />
      <LottoBoxSimple lottoNumber={most3Years} />
      <LottoBoxSimple lottoNumber={least3Years} />
      <LottoBoxSimple lottoNumber={most10Years} />
      <LottoBoxSimple lottoNumber={least10Years} />
      <LottoBoxSimple lottoNumber={mostAll} />
      <LottoBoxSimple lottoNumber={leastAll} />
    </LatestNumbersBox>
  );
};

export default LottoStatistics;
