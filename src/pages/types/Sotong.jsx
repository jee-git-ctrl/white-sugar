import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Sotong() {
  const sotong = require("../data/Sotong.json");

  return (
    <ShowingFoods Name={"苏东 Sotong"} Foods={sotong} />
  )
}