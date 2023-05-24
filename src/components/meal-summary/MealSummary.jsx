import React from "react";
import styled from "styled-components";
import summaryImage from "../../assets/images/mealsFood.png";
import MealSummaryCard from "./MealSummaryCard";


const MealSummary = React.memo(() => {

  return (
    <Container>
      <Image>
        <img src={summaryImage} alt="summary" />
      </Image>
      <MealSummaryCard />
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  margin-bottom: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Image = styled.div`
  width: 100%;
  height: 432px;
  margin-top: 100px;

  img {
    width: 100%;
    height: 100%;
  }
`;
export default MealSummary;
