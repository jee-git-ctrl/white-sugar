import React, { useState } from "react";
import styled from "styled-components";
import ShowingDetails from "./ShowingDetails";
import Fish from "../data/Fish.json";

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
  border-radius: 5px;
  font-size: 1.8em;
  background-color: #e8e9eb;
  padding: 2px;
`;
const ShowAvailable = styled.div`
  width: 90%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;
const ShowUnavailable = styled.div`
  width: 90%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 0;
  opacity: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
`;
const NameText = styled.div`
  padding: 0 2px;
`;
const PriceText = styled.div`
  align-self: start;
  margin-left: 5%;
`;

const ShowingFish = () => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedFoodName, setSelectedFoodName] = useState("");
  const [selectedFoodInfo, setSelectedFoodInfo] = useState([]);
  
  const handleFoodSelected = (name, info) => {
    setSelectedFoodName(() => name);
    setSelectedFoodInfo(() => info);
    setIsDetailVisible(() => true);
  }

  return (
    <>
    <Title id="Fish">
      鱼类 Fish
    </Title>
    <Box>
      {Fish.map(food => {
        const { method, methodEnglish, SelectInfo, available } = food;
        
        if(available) {
          return (
            <ShowAvailable key={method} onClick={() => handleFoodSelected(method, SelectInfo)}>
              <NameText>
                {method} {methodEnglish}
              </NameText>
              <PriceText>
                时价
              </PriceText>
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable key={method}>
              <NameText>
                {method} {methodEnglish}
              </NameText>
              <PriceText>
                时价
              </PriceText>
            </ShowUnavailable>
          );
        }
        
      })}
    </Box>
    
    {isDetailVisible && 
      <ShowingDetails Title={selectedFoodName} Details={selectedFoodInfo} Visible={setIsDetailVisible} />
    }
    </>
  )
}

export default ShowingFish;