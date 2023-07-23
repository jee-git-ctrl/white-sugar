import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Prawn() {
  const prawn = require("../data/Prawn.json");

  return (
    <Layout>
      <ShowingFoods Name={"虾类 Prawn"} Foods={prawn} />
    </Layout>
  )
}