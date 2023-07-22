import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Duck() {
  const duck = require("../data/Duck.json");

  return (
    <ShowingFoods Name={"鸭类 Duck"} Foods={duck} />
  )
}