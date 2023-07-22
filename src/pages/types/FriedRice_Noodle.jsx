import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function FriedRice_Noodle() {
  const friedRice_Noodle = require("../data/FriedRice_Noodle.json");

  return (
    <ShowingFoods Name={"炒饭 / 面 Fried Rice / Noodle"} Foods={friedRice_Noodle} />
  )
}