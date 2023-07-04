import React from "react";
import styled from "styled-components";
import Fish from "../data/Fish.json";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1%;
`;
const Title = styled.div`
  font-size: 1.5em;
  background-color: #e8e9eb;
`;
const ShowingDetail = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;

  @media only screen and (min-width: 768px) {
    width: 49%;
  }
`;

const ShowingFish = () => {
  return (
    <>
    <Title>
      鱼类 Fish
    </Title>
    <Box>
      {Fish.map(food => {
        return (
          <ShowingDetail>
            {food.method}
          </ShowingDetail>
        );
      })}
    </Box>
    </>
  )
}

export default ShowingFish;