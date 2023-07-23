import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Pork() {
  const pork = require("../data/Pork.json");

  return (
    <Layout>
      <ShowingFoods Name={"猪肉 Pork"} Foods={pork} />
    </Layout>
  )
}