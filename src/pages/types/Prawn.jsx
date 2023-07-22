import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Prawn() {
  const prawn = require("../data/Prawn.json");

  return (
    <ShowingFoods Name={"虾类 Prawn"} Foods={prawn} />
  )
}