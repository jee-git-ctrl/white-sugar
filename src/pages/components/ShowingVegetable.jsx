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
  margin: 0 0.5%;
  padding: 2px;
`;
const ShowAvailable = styled.div`
  width: 98%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 1%;
  cursor: pointer;
`;
const ShowUnavailable = styled.div`
  width: 98%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 1%;
  opacity: 0.4;
`;

const ShowingVegetable = () => {
  return (
    <>
    <Title>
      菜类 Vegetable
    </Title>
    <Box>
      {Fish.map(food => {
        const { method, price, available } = food;

        if(available) {
          return (
            <ShowAvailable>
              {method}
              <br/>
              RM 时价
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable>
              {method}
              <br/>
              RM 时价
            </ShowUnavailable>
          );
        }
      })}
    </Box>
    </>
  )
}

export default ShowingVegetable;