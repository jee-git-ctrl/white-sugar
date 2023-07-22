import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Frog() {
  const frog = require("../data/Frog.json");

  return (
    <ShowingFoods Name={"田鸡 Frog"} Foods={frog} />
  )
}