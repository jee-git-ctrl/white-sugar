import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function HomemadeTofu() {
  const homemadeTofu = require("../data/HomemadeTofu.json");

  return (
    <Layout>
      <ShowingFoods Name={"豆腐 Homemade Tofu"} Foods={homemadeTofu} />
    </Layout>
  )
}