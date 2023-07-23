import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Rice() {
  const rice = require("../data/Rice.json");

  return (
    <Layout>
      <ShowingFoods Name={"白饭 Rice"} Foods={rice} />
    </Layout>
  )
}