import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Rice() {
  const rice = require("../data/Rice.json");

  return (
    <ShowingFoods Name={"白饭 Rice"} Foods={rice} />
  )
}