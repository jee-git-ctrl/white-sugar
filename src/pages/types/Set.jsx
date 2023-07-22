import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Set() {
  const set = require("../data/Set.json");

  return (
    <ShowingFoods Name={"套餐 Set"} Foods={set} />
  )
}