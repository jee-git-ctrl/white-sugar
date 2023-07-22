import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function JapaneseTofu() {
  const japaneseTofu = require("../data/JapaneseTofu.json");

  return (
    <ShowingFoods Name={"日本豆腐 Japanese Tofu"} Foods={japaneseTofu} />
  )
}