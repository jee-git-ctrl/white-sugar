import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Duck() {
  const duck = require("../data/Duck.json");

  return (
    <Layout>
      <ShowingFoods Name={"鸭类 Duck"} Foods={duck} />
    </Layout>
  )
}