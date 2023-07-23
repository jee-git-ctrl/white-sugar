import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Sotong() {
  const sotong = require("../data/Sotong.json");

  return (
    <Layout>
      <ShowingFoods Name={"苏东 Sotong"} Foods={sotong} />
    </Layout>
  )
}