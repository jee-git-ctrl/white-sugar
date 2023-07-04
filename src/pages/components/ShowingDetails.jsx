import React from "react";
import styled from "styled-components";

const Box = styled.div`
  padding: 2px;
  border: 1px solid black;
  border-radius: 5px;
`;
const Title = styled.h2`

`;
const ShowingDetail = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`;

const ShowingDetails = (Foods) => {
  const {method} = Foods;
  return (
    <Box>
      <Title>
        Fish
      </Title>
      {method.map(value => {
        return (
          <ShowingDetail>
            {value}
          </ShowingDetail>
        );
      })}
    </Box>
  )
}

export default ShowingDetails;