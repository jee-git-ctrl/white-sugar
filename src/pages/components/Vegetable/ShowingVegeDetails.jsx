import React, { useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

const Outline = styled.div`
  display: block;
  position: absolute;
  background-color: rgb(0,0,0,0.5);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  overflow: hidden;
`;
const InfoBox = styled.div`
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
  font-size: 1.8em;
  font-weight: 500;
  margin-bottom: 2px;
`;
const CloseBox = styled.div`
  position: absolute;
  top: 1%;
  right: 1%;
  cursor: pointer;
`;
const ShowAvailable = styled.div`
  font-size: 1.5em;
  border-top: 1px solid #999;
  display: flex;
  justify-content: space-between;
  padding: 2px 1%;
  color: #000;

  &:last-child {
    border-bottom: 1px solid #999;
  }
`;
const ShowUnavailable = styled.div`
  font-size: 1.5em;
  border-top: 1px solid #999;
  display: flex;
  justify-content: space-between;
  padding: 2px 1%;
  color: rgb(0, 0, 0, 0.4);
  
  &:last-child {
    border-bottom: 1px solid #999;
  }
`;
const MethodBox = styled.div``;
const MethodTitle = styled.div`
  font-size: 1.6em;
`;
const PricesBox = styled.div``;
const PricesTitle = styled.div`
font-size: 1.6em;
`;
const BoldText = styled.span`
  font-weight: 900;
`;

const ShowingDetails = ({ Title, Details, Visible }) => {
  const { methods, prices } = Details ? Details : 
  { 
    "methods": [
      {
        "selectMethod": "NA", 
        "available": true
      }
    ],
    "prices": [
      {
        "selectInfo": "NA",
        "price": "NA",
        "available": true
      }
    ]
  };
  const checkClose = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if(!checkClose.current.contains(e.target)) {
        Visible(() => false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  })

  const handleVisible = () => {
    Visible(() => false);
  }

  return (
    <Outline>
      <InfoBox ref={checkClose}>
        <Header>
          {Title}
          <CloseBox onClick={() => handleVisible()}>
            <AiOutlineClose size={20} />
          </CloseBox>
        </Header>

        <MethodBox>
          <MethodTitle>
            煮法
          </MethodTitle>
          {methods && methods.map(method => {
            const { selectMethod, available } = method;

            if(available) {
              return (
                <ShowAvailable key={selectMethod}>
                  {selectMethod}
                </ShowAvailable>
              );
            } else {
              return (
                <ShowUnavailable key={selectMethod}>
                  {selectMethod}
                </ShowUnavailable>
              );
            }
          })}
        </MethodBox>

        <PricesBox>
          <PricesTitle>
            价钱
          </PricesTitle>
          {prices && prices.map(value => {
            const { selectInfo, price, available } = value;

            if(available) {
              return (
                <ShowAvailable key={selectInfo}>
                  <BoldText>{selectInfo}</BoldText>
                  <span>
                    {price > 0 ? `RM ` : ``}
                    <BoldText>{price}</BoldText>
                  </span>
                </ShowAvailable>
              );
            } else {
              return (
                <ShowUnavailable key={selectInfo}>
                  <BoldText>{selectInfo}</BoldText>
                  <span>
                    {price > 0 ? `RM ` : ``}
                    <BoldText>{price}</BoldText>
                  </span>
                </ShowUnavailable>
              );
            }
          })}
        </PricesBox>
      </InfoBox>
    </Outline>
  );
}

  export default ShowingDetails;