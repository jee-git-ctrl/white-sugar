import * as React from "react";
import styled from 'styled-components';
import SideBar from "./components/Sidebar";
import ShowingDetails from "./components/ShowingDetails";

import Fish from "./data/Fish.json";

const Main = styled.div`
  color: #232129;
  padding: 5px;
`;
const Heading = styled.h1`
  width: 50%;
`;
const Info = styled.div`
  margin-left: 20%;
  width: 70%;
  padding: 0 10px;
`;
const ShowingDetail = styled.div`
  border: 1px solid black;
  border-radius: 5px;
`;

const IndexPage = () => {
  return (
    <Main>
      <Heading>
        白糖海鲜
        <br />
        White Sugar Seafood Restaurant
      </Heading>

      <SideBar />

      <Info>
        {/* <ShowingDetails Foods={Fish} /> */}
        {Fish.map(food => {
          return (
            <ShowingDetail>
              {food.method}
            </ShowingDetail>
          );
        })}
      </Info>
    </Main>
  )
}

export default IndexPage;

export const Head = () => <title>White Sugar Restaurant Menu</title>
