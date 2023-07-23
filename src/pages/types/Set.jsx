import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Set() {
  const set = require("../data/Set.json");

  return (
    <Layout>
      <ShowingFoods Name={"套餐 Set"} Foods={set} />
    </Layout>
  )
}