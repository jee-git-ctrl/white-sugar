import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 2px;
`;
const ShowingDetail = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`;

const ShowingDetails = (Foods) => {
  return (
    <Box>
      {Foods.map(food => {
        return (
          <ShowingDetail>
            {food.method}
          </ShowingDetail>
        );
      })}
    </Box>
  )
}

export default ShowingDetails;