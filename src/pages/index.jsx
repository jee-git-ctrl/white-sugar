import * as React from "react";
import styled from 'styled-components';
import SideBar from "./components/Sidebar";
import ShowingFish from "./components/ShowingFish";
import ShowingVegetable from "./components/ShowingVegetable";
import ShowingFoods from "./components/ShowingFoods";

const Main = styled.div`
  display: grid;
  grid-template-areas: 
  "head head head"
  "side info info"
  "side info info"
  "foot foot foot";
  grid-template-columns: 1fr 1.5fr 1.5fr;
  overflow: hidden;
`;
const Heading = styled.h1`
  grid-area: head;
  height: fit-content;
  min-height: 10vh;
  margin: 0;

`;
const Side = styled.div`
  grid-area: side;
  height: 86vh;
  overflow-x: auto;

  @media only screen and (min-width: 768px) {
  }
`;
const Info = styled.div`
  grid-area: info;
  height: 86vh;
  margin-left: 1%;
  overflow-x: auto;

  @media only screen and (min-width: 768px) {
  }
`;
const Footer = styled.div`
  grid-area: foot;
  height: 25px;
  width: 100%;
  background-color: #999;

  @media only screen and (min-width: 768px) {
    height: 3vh;
  }
`;


const IndexPage = () => {
  const fishSlice = require("./data/FishSlide.json");
  const fishHead = require("./data/FishHead.json");
  const prawn = require("./data/Prawn.json");
  const mantisPrawn = require("./data/Mantis Prawn.json");
  const sotong = require("./data/Sotong.json");
  const softShellCrab = require("./data/SoftShellCrab.json");
  const duck = require("./data/Duck.json");
  const frog = require("./data/Frog.json");
  const chicken = require("./data/Chicken.json");
  const pork = require("./data/Pork.json");
  const egg = require("./data/Egg.json");
  const tofu = require("./data/Tofu.json");
  const vegetable = require("./data/Vegetable.json");
  const soup = require("./data/Soup.json");
  const friedRice_Noodle = require("./data/FriedRice_Noodle.json");
  const rice = require("./data/Rice.json");
  const set = require("./data/Set.json");
  const others = require("./data/Others.json");

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
        <ShowingFoods Name={"鱼片 Fish Slice"} Foods={fishSlice} />
        <ShowingFoods Name={"鱼头 Fish Head"} Foods={fishHead} />
        <ShowingFoods Name={"虾类 Prawn"} Foods={prawn} />
        <ShowingFoods Name={"虾姑肉 Mantis Prawn"} Foods={mantisPrawn} />
        <ShowingFoods Name={"苏东 Sotong"} Foods={sotong} />
        <ShowingFoods Name={"软壳蟹 Soft Shell Crab"} Foods={softShellCrab} />
        <ShowingFoods Name={"鸭类 Duck"} Foods={duck} />
        <ShowingFoods Name={"田鸡 Frog"} Foods={frog} />
        <ShowingFoods Name={"鸡肉 Chicken"} Foods={chicken} />
        <ShowingFoods Name={"猪肉 Pork"} Foods={pork} />
        <ShowingFoods Name={"蛋 Egg"} Foods={egg} />
        <ShowingFoods Name={"豆腐 Tofu"} Foods={tofu} />
        <ShowingVegetable />
        <ShowingFoods Name={"汤类 Soup"} Foods={soup} />
        <ShowingFoods Name={"炒饭 / 面 Fried Rice / Noodle"} Foods={friedRice_Noodle} />
        <ShowingFoods Name={"白饭 Rice"} Foods={rice} />
        <ShowingFoods Name={"套餐 Set"} Foods={set } />
        <ShowingFoods Name={"其他 Others"} Foods={others} />

      </Info>

      <Footer />
    </Main>
  )
}

export default IndexPage;

export const Head = () => <title>White Sugar Restaurant Menu</title>
