import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Egg() {
  const egg = require("../data/Egg.json");

  return (
    <ShowingFoods Name={"蛋 Egg"} Foods={egg} />
  )
}