import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function MantisPrawn() {
  const mantisPrawn = require("../data/MantisPrawn.json");

  return (
    <Layout>
      <ShowingFoods Name={"虾姑肉 Mantis Prawn"} Foods={mantisPrawn} />
    </Layout>
  )
}