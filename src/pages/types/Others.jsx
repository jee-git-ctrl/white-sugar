import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Others() {
  const others = require("../data/Others.json");

  return (
    <ShowingFoods Name={"其他 Others"} Foods={others} />
  )
}