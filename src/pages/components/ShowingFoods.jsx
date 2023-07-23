import React, { useState } from "react";
import styled from "styled-components";
import ShowingDetails from "./ShowingDetails";

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

const SplitName = (Name) => {
  if(Name !== null) {
    const num = Name.indexOf(" ");
    const name = Name.split(" ", 1);
    const englishName = Name.substr(num+1);
    
    return [name[0], englishName];
  }
  return "";
}

const ShowingFoods = ({ Name, Foods }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedFoodName, setSelectedFoodName] = useState("");
  const [selectedFoodInfo, setSelectedFoodInfo] = useState([]);
  const [name, englishName] = SplitName(Name);
  
  const handleFoodSelected = (name, info) => {
    setSelectedFoodName(() => name);
    setSelectedFoodInfo(() => info);
    setIsDetailVisible(() => true);
  } 

  return (
    <>
    <Title id={englishName}>
      {name} {englishName}
    </Title>
    <Box>
      {Foods && Foods.map(food => {
        const { selectInfo, price, available, SelectInfo } = food;

        if(available) {
          return (
            <ShowAvailable key={selectInfo} onClick={() => handleFoodSelected(selectInfo, SelectInfo)}>
              {selectInfo}
              <br/>
              RM {price}++
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable key={selectInfo}>
              {selectInfo}
              <br/>
              RM {price}++
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

export default ShowingFoods;