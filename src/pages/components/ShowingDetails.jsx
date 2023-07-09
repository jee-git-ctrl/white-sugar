import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

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
`;
const ShowUnavailable = styled.div`
  font-size: 1.5em;
  border-top: 1px solid #999;
  display: flex;
  justify-content: space-between;
  padding: 2px 1%;
  color: rgb(0, 0, 0, 0.4);
`;

const ShowingDetails = ({ Title, Details }) => {
  return (
      <InfoBox>
        <Header>
          {Title}
          <CloseBox>
            <AiOutlineClose size={20} />
          </CloseBox>
        </Header>

        {Details && Details.map(detail => {
          const { selectInfo, price, available } = detail;
          
          if(available) {
            return (
              <ShowAvailable>
                {selectInfo}
                <span>
                  {price > 0 ? `RM ${price}` : `${price}`}
                </span>
              </ShowAvailable>
            );
          } else {
            return (
              <ShowUnavailable>
                {selectInfo}
                <span>
                  {price > 0 ? `RM ${price}` : `${price}`}
                </span>
              </ShowUnavailable>
            );
          }

        })}
      </InfoBox>
  );
}

export default ShowingDetails;