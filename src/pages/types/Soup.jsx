import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function Soup() {
  const soup = require("../data/Soup.json");

  return (
    <Layout>
      <ShowingFoods Name={"汤类 Soup"} Foods={soup} />
    </Layout>
  )
}