import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function HomemadeTofu() {
  const homemadeTofu = require("../data/HomemadeTofu.json");

  return (
    <ShowingFoods Name={"豆腐 Homemade Tofu"} Foods={homemadeTofu} />
  )
}