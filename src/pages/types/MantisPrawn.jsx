import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function MantisPrawn() {
  const mantisPrawn = require("../data/MantisPrawn.json");

  return (
    <ShowingFoods Name={"虾姑肉 Mantis Prawn"} Foods={mantisPrawn} />
  )
}