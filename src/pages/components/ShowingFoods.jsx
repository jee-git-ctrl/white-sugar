import React from "react";
import styled from "styled-components";

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
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1px;
`;
const ShowUnavailable = styled.div`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 1px;
`;

const ShowingDetails = ({ Name, Foods }) => {
  return (
    <>
    <Title>
      {Name}
    </Title>
    <Box>
      {Foods.map(food => {
        const { method, price, available } = food;

        if(available) {
          return (
            <ShowAvailable>
              {method}
              <br/>
              RM {price}
            </ShowAvailable>
          );
        } else {
          return (
            <ShowUnavailable>
              {method}
              <br/>
              RM {price}
            </ShowUnavailable>
          );
        }
      })}
    </Box>
    </>
  )
}

export default ShowingDetails;