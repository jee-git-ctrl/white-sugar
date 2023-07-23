import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Others() {
  const others = require("../data/Others.json");

  return (
    <Layout>
      <ShowingFoods Name={"其他 Others"} Foods={others} />
    </Layout>
  )
}