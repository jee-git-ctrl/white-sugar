import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Egg() {
  const egg = require("../data/Egg.json");

  return (
    <Layout>
      <ShowingFoods Name={"蛋 Egg"} Foods={egg} />
    </Layout>
  )
}