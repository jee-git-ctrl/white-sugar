import * as React from "react";
import styled from 'styled-components';
import ShowingFish from "./components/ShowingFish";
import ShowingVegetable from "./components/Vegetable/ShowingVegetable";
import ShowingFoods from "./components/ShowingFoods";
import Layout from "./components/Layout";

const Info = styled.div`
  overflow-x: auto;
`;

const IndexPage = () => {
  const fishSlice = require("./data/FishSlice.json");
  const fishHead = require("./data/FishHead.json");
  const prawn = require("./data/Prawn.json");
  const mantisPrawn = require("./data/MantisPrawn.json");
  const sotong = require("./data/Sotong.json");
  const softShellCrab = require("./data/SoftShellCrab.json");
  const duck = require("./data/Duck.json");
  const frog = require("./data/Frog.json");
  const chicken = require("./data/Chicken.json");
  const pork = require("./data/Pork.json");
  const egg = require("./data/Egg.json");
  const homemadeTofu = require("./data/HomemadeTofu.json");
  const japaneseTofu = require("./data/JapaneseTofu.json")
  const soup = require("./data/Soup.json");
  const friedRice_Noodle = require("./data/FriedRice&Noodle.json");
  const rice = require("./data/Rice.json");
  const set = require("./data/Set.json");
  const others = require("./data/Others.json");

  return (
    <Layout>
      <Info>
        <ShowingFish />
        <ShowingFoods Name={"鱼片"} EnglishName={"Fish Slice"} Foods={fishSlice} />
        <ShowingFoods Name={"鱼头"} EnglishName={"Fish Head"} Foods={fishHead} />
        <ShowingFoods Name={"虾类"} EnglishName={"Prawn"} Foods={prawn} />
        <ShowingFoods Name={"虾姑肉"} EnglishName={"Mantis Prawn"} Foods={mantisPrawn} />
        <ShowingFoods Name={"苏东"} EnglishName={"Sotong"} Foods={sotong} />
        <ShowingFoods Name={"软壳蟹"} EnglishName={"Soft Shell Crab"} Foods={softShellCrab} />
        <ShowingFoods Name={"鸭类"} EnglishName={"Duck"} Foods={duck} />
        <ShowingFoods Name={"田鸡"} EnglishName={"Frog"} Foods={frog} />
        <ShowingFoods Name={"鸡肉"} EnglishName={"Chicken"} Foods={chicken} />
        <ShowingFoods Name={"猪肉"} EnglishName={"Pork"} Foods={pork} />
        <ShowingFoods Name={"蛋"} EnglishName={"Egg"} Foods={egg} />
        <ShowingFoods Name={"豆腐"} EnglishName={"Homemade Tofu"} Foods={homemadeTofu} />
        <ShowingFoods Name={"日本豆腐"} EnglishName={"Japanese Tofu"} Foods={japaneseTofu} />
        <ShowingVegetable />
        <ShowingFoods Name={"汤类"} EnglishName={"Soup"} Foods={soup} />
        <ShowingFoods Name={"炒饭/面"} EnglishName={"FriedRice&Noodle"} Foods={friedRice_Noodle} />
        <ShowingFoods Name={"白饭"} EnglishName={"Rice"} Foods={rice} />
        <ShowingFoods Name={"套餐"} EnglishName={"Set"} Foods={set } />
        <ShowingFoods Name={"其他"} EnglishName={"Others"} Foods={others} />

      </Info>
    </Layout>
  )
}

export default IndexPage;

export const Head = () => <title>White Sugar Restaurant Menu</title>
