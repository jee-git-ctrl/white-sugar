import React, { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import Vegetable from "../../data/Vegetable.json";
import ShowingVegeDetails from "./ShowingVegeDetails";
import Loading from "../Loading";
// import ShowingFoodPhoto from "../ShowingFoodPhoto";

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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChineseName = styled.span`
  font-weight: 900;
`;
const PriceText = styled.div`
  align-self: start;
  margin-left: 5%;
`;

const ShowingFoodPhoto = lazy(() => import("../ShowingFoodPhoto"));

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
        const { name, nameEnglish, price, available, SelectInfo } = food;

        if(available) {
          return (
            <ShowAvailable key={name} onClick={() => handleFoodSelected(name, SelectInfo)}>
              <Suspense fallback={<Loading />}>
                <ShowingFoodPhoto englishName="Vegetable" imageName={nameEnglish} />
              </Suspense>
              <NameText>
                <ChineseName>{name}</ChineseName> {nameEnglish}
              </NameText>
              <PriceText>
                RM {price}++
              </PriceText>
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable key={name}>
              <Suspense fallback={<Loading />}>
                <ShowingFoodPhoto imageName={nameEnglish} />
              </Suspense>
              <NameText>
                <ChineseName>{name}</ChineseName> {nameEnglish}
              </NameText>
              <PriceText>
                RM {price}++
              </PriceText>
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