import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Chicken() {
  const chicken = require("../data/Chicken.json");

  return (
    <Layout>
      <ShowingFoods Name={"鸡肉 Chicken"} Foods={chicken} />
    </Layout>
  )
}