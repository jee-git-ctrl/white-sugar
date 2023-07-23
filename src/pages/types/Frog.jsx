import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Frog() {
  const frog = require("../data/Frog.json");

  return (
    <Layout>
      <ShowingFoods Name={"田鸡 Frog"} Foods={frog} />
    </Layout>
  )
}