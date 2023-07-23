import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function FishHead() {
  const fishHead = require("../data/FishHead.json");

  return (
    <Layout>
      <ShowingFoods Name={"鱼头 Fish Head"} Foods={fishHead} />
    </Layout>
  )
}