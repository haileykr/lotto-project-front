import React, { useState, useEffect } from "react";
import * as axios from "axios";

import LottoBoxSimpleSm from "./lotto-box/LottoBoxSimpleSm";
import styled from "styled-components";

const LatestNumbersBox = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 90%;
  height: 900px;
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
  justify-content: center;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  font-size: 1rem;
  text-align: start;

  & + & {
    margin-left: 3rem;
  }
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
        "http://localhost:5000/number-counts-stats"
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

        setMost1Month(
          sorted1Month
            .filter((v, i) => i < 6)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setLeast1Month(
          sorted1Month
            .filter((v, i) => i >= 38)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );

        setMost3Months(
          sorted3Months
            .filter((v, i) => i < 6)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setLeast3Months(
          sorted3Months
            .filter((v, i) => i >= 38)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setMost1Year(
          sorted1Year
            .filter((v, i) => i < 6)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setLeast1Year(
          sorted1Year
            .filter((v, i) => i >= 38)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setMost3Years(
          sorted3Years
            .filter((v, i) => i < 6)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setLeast3Years(
          sorted3Years
            .filter((v, i) => i >= 38)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setMost10Years(
          sorted10Years
            .filter((v, i) => i < 6)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setLeast10Years(
          sorted10Years
            .filter((v, i) => i >= 38)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
        setMostAll(
          sortedAll
            .filter((v, i) => i < 6)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );

        setLeastAll(
          sortedAll
            .filter((v, i) => i >= 38)
            .map((i) => i[0])
            .sort((a, b) => a - b)
        );
      }
    };
    getNum();
  }, []);

  return (
    <LatestNumbersBox>
      <h2>Number Statistics </h2>

      <HorizontalContainer>
        <VerticalContainer>
          <h3>Top 6 #s over the last</h3>
          <h3>1 Month </h3>
          <LottoBoxSimpleSm lottoNumber={most1Month} />
          <h3>3 Months </h3>
          <LottoBoxSimpleSm lottoNumber={most3Months} />

          <h3>1 Year </h3>
          <LottoBoxSimpleSm lottoNumber={most1Year} />
          <h3>3 Years </h3>
          <LottoBoxSimpleSm lottoNumber={most3Years} />
          <h3>10 Years</h3>
          <LottoBoxSimpleSm lottoNumber={most10Years} />

          <h3>All Time </h3>
          <LottoBoxSimpleSm lottoNumber={mostAll} />
        </VerticalContainer>

        <VerticalContainer>
          <h3>Bottom 6 #s over the last </h3>
          <h3>1 Month </h3>
          <LottoBoxSimpleSm lottoNumber={least1Month} />

          <h3>3 Months </h3>
          <LottoBoxSimpleSm lottoNumber={least3Months} />

          <h3>1 Year </h3>
          <LottoBoxSimpleSm lottoNumber={least1Year} />

          <h3>3 Years</h3>
          <LottoBoxSimpleSm lottoNumber={least3Years} />

          <h3>10 Years</h3>
          <LottoBoxSimpleSm lottoNumber={least10Years} />

          <h3>All Time </h3>
          <LottoBoxSimpleSm lottoNumber={leastAll} />
        </VerticalContainer>
      </HorizontalContainer>
    </LatestNumbersBox>
  );
};

export default LottoStatistics;
