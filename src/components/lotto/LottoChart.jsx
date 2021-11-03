import React, { useCallback, useState } from "react";
import * as axios from "axios";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

const LottoChartContainer = styled.div`
  margin-top: 50px;
  text-align: center;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  h2 {
    border-bottom: 1px solid #eef0f6;
    text-align: start;
    padding-left: 1rem;
    margin-top: 1rem;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  font-size: 1rem;
`;

const BarChartBox = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const LottoChart = () => {
  const today = new Date().toISOString();
  const [lottoAll, setLottoAll] = useState(null);
  const [fromDate, setFromDate] = useState("2002-12-07T00:00:00.000Z");
  const [toDate, setToDate] = useState(today);

  const onChangeFrom = (e) => {
    setFromDate(`${e.target.value}T00:00:00.000Z`);
  };

  const onChangeTo = (e) => {
    setToDate(`${e.target.value}T23:59:59.000Z`);
  };

  const onClickCount = useCallback(async () => {
    const range = {
      from: fromDate,
      to: toDate,
    };
    console.log(range);
    const records = await axios.post(
      "http://localhost:5000/number-counts",
      range
    );

    console.log(records);
    const sorted = records.data.sort((a, b) => b[1] - a[1]);
    console.log(records.data);
    setLottoAll(sorted);
  }, [fromDate, toDate]);

  let labels = [];
  let counts = [];
  if (lottoAll) {
    labels = lottoAll.map((i) => i[0]);
    counts = lottoAll.map((i) => i[1]);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Lotto Numbers",
        data: counts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } };

  return (
    <>
      <LottoChartContainer>
        <h2>Number Statistics </h2>
        <InputsContainer>
          <input
            type="date"
            id="from"
            name="from"
            min="2002-12-07"
            onChange={onChangeFrom}
          />
          <input
            type="date"
            id="to"
            name="to"
            min="2002-12-07"
            onChange={onChangeTo}
          />
          <button onClick={onClickCount}>Click! </button>
        </InputsContainer>
        <BarChartBox>
          <Bar data={data} options={options} />
        </BarChartBox>
      </LottoChartContainer>
    </>
  );
};

export default LottoChart;
