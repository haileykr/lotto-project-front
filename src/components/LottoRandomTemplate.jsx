import React, { Component } from "react";
import Header from "./lotto/Header";
import LatestNumbers from "./lotto/LatestNumbers";
import LottoRandomContent from "./lotto/LottoRandomContent";
import styled from "styled-components";
import LottoChart from "./lotto/LottoChart";
import LottoStatistics from "./lotto/LottoStatistics";

const LottoRandomTemplateBox = styled.div`
  margin: auto;
  width: auto;
  display: flex;
  align-items: center;
  background-color: #f8f8fb;
  flex-direction: column;
  min-height: 100vh;
  h1 {
    text-align: center;
  }
`;

class LottoRandomTemplate extends Component {
  render() {
    return (
      <LottoRandomTemplateBox>
        <Header />
        <LatestNumbers />
        <LottoChart />

        
        
        <LottoStatistics />
     <LottoRandomContent />
      </LottoRandomTemplateBox>
    );
  }
}

export default LottoRandomTemplate;
