import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function SoftShellCrab() {
  const softShellCrab = require("../data/SoftShellCrab.json");

  return (
    <Layout>
      <ShowingFoods Name={"汤类 Soup"} Foods={softShellCrab} />
    </Layout>
  )
}