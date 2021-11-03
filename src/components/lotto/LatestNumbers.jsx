import React, { useEffect, useState } from "react";
import * as axios from "axios";
import LottoBoxComponent from "./lotto-box/LottoBoxComponent";
import styled from "styled-components";

const LatestNumbersBox = styled.div`
  margin-top: 100px;
  text-align: center;
  width: 90%;
  height: 170px;
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

const LottoRandomHeader = () => {
  const [lottoNumber, setLottoNumber] = useState([]);
  const [drwNo, setDrwNo] = useState(0);
  const [latestWeek, setLatestWeek] = useState(-1);

  useEffect(() => {
    const getWeek = () => {
      const t1 = new Date("December, 7, 2002");
      const t2 = new Date();
      const dff = t2.getTime() - t1.getTime();
      return parseInt(dff / (24 * 3600 * 1000 * 7)) + 1;
    };
    let week = getWeek();

    setLatestWeek(week);

    axios.get("http://localhost:5000/latest").then((res) => {
      console.log(res);
      const data = res.data;
      console.log(data);
      if (data) {
        const nums = [];
        nums.push(data.number1);
        nums.push(data.number2);
        nums.push(data.number3);
        nums.push(data.number4);
        nums.push(data.number5);
        nums.push(data.number6);
        nums.push(data.numberBon);
        setLottoNumber(nums);
        setDrwNo(data.numberBon);
      }
    });
  }, []);

  return (
    <LatestNumbersBox>
      <h2>Latest Numbers from Week {latestWeek}</h2>
      <LottoBoxComponent lottoNumber={lottoNumber} />
    </LatestNumbersBox>
  );
};

export default LottoRandomHeader;
