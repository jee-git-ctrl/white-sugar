import * as React from "react";
import styled from 'styled-components';
import SideBar from "./components/Sidebar";
import ShowingFish from "./components/ShowingFish";
import ShowingFoods from "./components/ShowingFoods";

const Main = styled.div`
  padding: 5px;
  display: grid;
  grid-template-areas: 
  "head head head"
  "side info info"
  "side info info";
  grid-template-columns: 1fr 1.5fr 1.5fr;
`;
const Heading = styled.h1`
  grid-area: head;
`;
const Side = styled.div`
  grid-area: side;
`;
const Info = styled.div`
  grid-area: info;
`;

const IndexPage = () => {
  const frog = require("./data/Frog.json");

  return (
    <Main>
      <Heading>
        白糖海鲜
        <br />
        White Sugar Seafood Restaurant
      </Heading>

      <Side>
        <SideBar />
      </Side>

      <Info>
        <ShowingFish />
        <ShowingFoods Name={"青蛙 Frog"} Foods={frog} />

        {/* {frog.map(value => {
          return (
            <ShowingFoods Name={"青蛙 Frog"} Foods={value} />
          );
        })} */}
      </Info>
    </Main>
  )
}

export default IndexPage;

export const Head = () => <title>White Sugar Restaurant Menu</title>
