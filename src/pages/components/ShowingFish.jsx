import React from "react";
import styled from "styled-components";
import Fish from "../data/Fish.json";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 49% 49%;
    justify-content: space-between;
  }
`;
const Title = styled.div`
  font-size: 1.5em;
  background-color: #e8e9eb;
  padding: 2px;
`;
const ShowAvailable = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
`;
const ShowUnavailable = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
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
          <ShowAvailable>
            {food.method}
          </ShowAvailable>
        );
      })}
    </Box>
    </>
  )
}

export default ShowingFish;