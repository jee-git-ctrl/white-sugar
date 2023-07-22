import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Chicken() {
  const chicken = require("../data/Chicken.json");

  return (
    <ShowingFoods Name={"鸡肉 Chicken"} Foods={chicken} />
  )
}