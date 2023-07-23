import React, { useState } from "react";
import styled from "styled-components";
import Vegetable from "../../data/Vegetable.json";
import ShowingVegeDetails from "./ShowingVegeDetails";

const Box = styled.div`
  font-size: 1.5em;
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
  font-size: 1.8em;
  background-color: #e8e9eb;
  padding: 2px;
`;
const ShowAvailable = styled.div`
  width: 98%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 0;
  cursor: pointer;
`;
const ShowUnavailable = styled.div`
  width: 98%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 0;
  opacity: 0.4;
`;

const ShowingVegetable = () => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedFoodName, setSelectedFoodName] = useState("");
  const [selectedFoodInfo, setSelectedFoodInfo] = useState({});
  
  const handleFoodSelected = (name, info) => {
    setSelectedFoodName(() => name);
    setSelectedFoodInfo(() => info);
    setIsDetailVisible(() => true);
  } 

  return (
    <>
    <Title id="Vegetable">
      菜类 Vegetable
    </Title>
    <Box>
      {Vegetable.map(food => {
        const { name, price, available, SelectInfo } = food;

        if(available) {
          return (
            <ShowAvailable key={name} onClick={() => handleFoodSelected(name, SelectInfo)}>
              {name}
              <br/>
              RM {price}++
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable key={name}>
              {name}
              <br/>
              RM {price}++
            </ShowUnavailable>
          );
        }
      })}
    </Box>

    {isDetailVisible && 
      <ShowingVegeDetails Title={selectedFoodName} Details={selectedFoodInfo} Visible={setIsDetailVisible} />
    }
    </>
  )
}

export default ShowingVegetable;