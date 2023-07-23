import React from "react";
import ShowingFoods from "../components/ShowingFoods";
import Layout from "../components/Layout";

export default function JapaneseTofu() {
  const japaneseTofu = require("../data/JapaneseTofu.json");

  return (
    <Layout>
      <ShowingFoods Name={"日本豆腐 Japanese Tofu"} Foods={japaneseTofu} />
    </Layout>
  )
}