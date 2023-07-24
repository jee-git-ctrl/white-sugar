import React, { useState } from "react";
import styled from "styled-components";
import ShowingDetails from "./ShowingDetails";
import chicken from "../img/Chicken/Boiled Chicken.jpg";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ShowUnavailable = styled.div`
  width: 98%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 0;
  opacity: 0.4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FoodPhoto = styled.img`
  border-radius: 40px;
  width: 30%;
  margin: 0 10%;

  @media only screen and (min-width: 768px) {
    border-radius: 20px;
  }
`;
const PriceText = styled.div`
  align-self: start;
  margin-left: 5%;
`;

const ShowingFoods = ({ Name, EnglishName, Foods }) => {
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
    <Title id={EnglishName}>
      {Name} {EnglishName}
    </Title>
    <Box>

      {Foods && Foods.map(food => {
        const { selectInfo, price, available, image, SelectInfo } = food;

        if(available) {
          return (
            <ShowAvailable key={selectInfo} onClick={() => handleFoodSelected(selectInfo, SelectInfo)}>
              {image ? <FoodPhoto src={chicken} alt="" /> : null}
              {selectInfo}
              <PriceText>
                RM {price}++  
              </PriceText>
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable key={selectInfo}>
              {image ? <FoodPhoto src={chicken} alt="" /> : null}
              {selectInfo}
              <PriceText>
                RM {price}++  
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

export default ShowingFoods;