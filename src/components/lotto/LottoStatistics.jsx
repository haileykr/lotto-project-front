import React, { useState, useEffect } from "react";
import * as axios from "axios";


import LottoBoxSimpleSm from "./lotto-box/LottoBoxSimpleSm";
import styled from "styled-components";

const LatestNumbersBox = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 90%;
  height: 500px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    border-bottom: 1px solid #eef0f6;
    text-align: start;
    padding-left: 1rem;
    margin-top: 1rem;
  }
`;

const HorizontalContainer = styled.div`
  display: flex;

  flex-direction: row;
`;

const LottoStatistics = () => {
  const [most1Month, setMost1Month] = useState([]);
  const [most3Months, setMost3Months] = useState([]);
  const [most1Year, setMost1Year] = useState([]);
  const [most3Years, setMost3Years] = useState([]);
  const [most10Years, setMost10Years] = useState([]);
  const [mostAll, setMostAll] = useState([]);
  const [least1Month, setLeast1Month] = useState([]);
  const [least3Months, setLeast3Months] = useState([]);
  const [least1Year, setLeast1Year] = useState([]);
  const [least3Years, setLeast3Years] = useState([]);
  const [least10Years, setLeast10Years] = useState([]);
  const [leastAll, setLeastAll] = useState([]);
  useEffect(() => {
    const getNum = async () => {
      let latestNums = await axios.get(
        "https://lott-of-fun.herokuapp.com/number-counts-stats"
      );
      console.log(latestNums);

      const data = latestNums.data;
      if (data) {
        const {
          sorted1Month,
          sorted1Year,
          sorted3Months,
          sorted3Years,
          sorted10Years,
          sortedAll,
        } = data;

        
        setMost1Month(sorted1Month.filter((v, i) => i < 6).map((i) => i[0]).sort((a, b) => a - b));
        setLeast1Month(sorted1Month.filter((v, i) => i >= 38).map((i) => i[0]).sort((a, b) => a - b));

        setMost3Months(sorted3Months.filter((v, i) => i < 6).map((i) => i[0]).sort((a, b) => a - b));
        setLeast3Months(
          sorted3Months.filter((v, i) => i >= 38).map((i) => i[0]).sort((a, b) => a - b)
        );
        setMost1Year(sorted1Year.filter((v, i) => i < 6).map((i) => i[0]).sort((a, b) => a - b));
        setLeast1Year(sorted1Year.filter((v, i) => i >= 38).map((i) => i[0]).sort((a, b) => a - b));
        setMost3Years(sorted3Years.filter((v, i) => i < 6).map((i) => i[0]).sort((a, b) => a - b));
        setLeast3Years(sorted3Years.filter((v, i) => i >= 38).map((i) => i[0]).sort((a, b) => a - b));
        setMost10Years(sorted10Years.filter((v, i) => i < 6).map((i) => i[0]).sort((a, b) => a - b));
        setLeast10Years(
          sorted10Years.filter((v, i) => i >= 38).map((i) => i[0]).sort((a, b) => a - b)
        );
        setMostAll(sortedAll.filter((v, i) => i < 6).map((i) => i[0]).sort((a, b) => a - b));

        setLeastAll(sortedAll.filter((v, i) => i >= 38).map((i) => i[0]).sort((a, b) => a - b));
      }
    };
    getNum();
  }, []);

  return (
    <LatestNumbersBox>
      <h2>Number Statistics </h2>
      <HorizontalContainer>
        <LottoBoxSimpleSm lottoNumber={most1Month} />
        <LottoBoxSimpleSm lottoNumber={least1Month} />
      </HorizontalContainer>
      <HorizontalContainer>
        <LottoBoxSimpleSm lottoNumber={most3Months} />
        <LottoBoxSimpleSm lottoNumber={least3Months} />
      </HorizontalContainer>
      <HorizontalContainer>
        <LottoBoxSimpleSm lottoNumber={most1Year} />
        <LottoBoxSimpleSm lottoNumber={least1Year} />
      </HorizontalContainer>
      <HorizontalContainer>
        <LottoBoxSimpleSm lottoNumber={most3Years} />
        <LottoBoxSimpleSm lottoNumber={least3Years} />
      </HorizontalContainer>
      <HorizontalContainer>
        <LottoBoxSimpleSm lottoNumber={most10Years} />
        <LottoBoxSimpleSm lottoNumber={least10Years} />
      </HorizontalContainer>
      <HorizontalContainer>
        <LottoBoxSimpleSm lottoNumber={mostAll} />
        <LottoBoxSimpleSm lottoNumber={leastAll} />
      </HorizontalContainer>
    </LatestNumbersBox>
  );
};

export default LottoStatistics;
