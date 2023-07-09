import React, { useEffect, useState, useRef } from "react";
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
const Outline = styled.div`
  display: block;
  position: absolute;
  background-color: rgb(0,0,0,0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  z-index: 20;
`;

const ShowingFoods = ({ Name, Foods }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedFoodName, setSelectedFoodName] = useState("");
  const [selectedFoodInfo, setSelectedFoodInfo] = useState([]);

  const checkClose = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!checkClose.current.contains(e.target)) {
        setIsDetailVisible(() => false);
      }
    }

    if(isDetailVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })
  
  const handleFoodSelected = (name, info) => {
    setSelectedFoodName(() => name);
    setSelectedFoodInfo(() => info);
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
            <ShowAvailable onClick={() => handleFoodSelected(selectInfo, SelectInfo)}>
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
      <Outline>
        <div ref={checkClose}>
          <ShowingDetails Title={selectedFoodName} Details={selectedFoodInfo} />
        </div>
      </Outline>
    }
    </>
  )
}

export default ShowingFoods;