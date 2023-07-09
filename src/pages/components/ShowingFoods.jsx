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

const ShowingFoods = ({ Name, Foods }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState([]);
  
  const handleFoodSelected = (food) => {
    setSelectedFood(() => food);
    setIsDetailVisible(() => true);
  } 

  return (
    <>
    <Title id={Name}>
      {Name}
    </Title>
    <Box>
      {Foods && Foods.map(food => {
        const { selectInfo, price, available, SelectInfo } = food;

        if(available) {
          return (
            <ShowAvailable onClick={() => handleFoodSelected(SelectInfo)}>
              {selectInfo}
              <br/>
              RM {price}++
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable>
              {selectInfo}
              <br/>
              RM {price}++
            </ShowUnavailable>
          );
        }
      })}
    </Box>

    {isDetailVisible && 
      <ShowingDetails Title={Name} Details={selectedFood} />
    }
    </>
  )
}

export default ShowingFoods;