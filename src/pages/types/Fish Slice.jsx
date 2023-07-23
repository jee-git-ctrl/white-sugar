import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function FishSlice() {
  const fishSlice = require("../data/FishSlice.json");

  return (
    <Layout>
      <ShowingFoods Name={"鱼片 Fish Slice"} Foods={fishSlice} />
    </Layout>
  )
}