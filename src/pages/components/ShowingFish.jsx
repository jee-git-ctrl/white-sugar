import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
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
  width: 98%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 2px 0;
  cursor: pointer;
`;
// const ShowUnavailable = styled.div`
//   width: 98%;
//   border: 1px solid black;
//   border-radius: 5px;
//   margin: 2px 0;
//   opacity: 0.4;
// `;
const ShowingFishDetailOutline = styled.div`
  display: block;
  position: absolute;
  background-color: rgb(0,0,0,0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;
const ShowingFishDetailBox = styled.div`
  position: relative;
  background-color: #fff;
  margin: 10%;
  width: 80%;
  max-height: 80%;
  border-radius: 5px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MethodTitle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 2px;
`;
const CloseBox = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
`;
const ShowingFishAvailable = styled.div`
  color: #000;
  color: black;
  padding: 1px;
`;
const ShowingFishUnavailable = styled.div`
  padding: 1px;
  opacity: 0.4;
`;

const ShowingFish = () => {
  const [isFishDetailVisible, setIsFishDetailVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState([]);

  const handleMethodSelected = (fishNames) => {
    setSelectedMethod(() => fishNames);
    setIsFishDetailVisible(() => true);
  } 

  const handleCloseFishDetail = () => {
    setIsFishDetailVisible(() => false);
  }

  const ShowFishDetail = ({ fishNames }) => {
    return (
      <ShowingFishDetailOutline>
        <ShowingFishDetailBox>
          <Header>
            <MethodTitle>
            鱼类 Fish
            </MethodTitle>
          </Header>
  
          <CloseBox onClick={() => handleCloseFishDetail()}>
            <AiOutlineClose size={20} />
          </CloseBox>
          {fishNames.map(value => {
            const { name, price, available } = value;
            
            if(available) {
              return (
                <ShowingFishAvailable>
                  {name}
                  <br />
                  {price}
                </ShowingFishAvailable>
              )
            } else {
              return (
                <ShowingFishUnavailable>
                  {name}
                  <br />
                  {price}
                </ShowingFishUnavailable>
              )
            }
          })}
        </ShowingFishDetailBox>
      </ShowingFishDetailOutline>
    )
  } 

  return (
    <>
    <Title id="鱼类 Fish">
      鱼类 Fish
    </Title>
    <Box>
      {Fish.map(food => {
        const { method, fishNames } = food;

        return (
          <ShowAvailable onClick={() => handleMethodSelected(fishNames)}>
            {method}
            <br/>
            时价
          </ShowAvailable>
        );
      })}
    </Box>
    
    {isFishDetailVisible && 
      <ShowFishDetail fishNames={selectedMethod} />
    }
    </>
  )
}

export default ShowingFish;