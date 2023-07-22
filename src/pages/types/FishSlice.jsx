import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function FishSlice() {
  const fishSlice = require("../data/FishSlice.json");

  return (
    <ShowingFoods Name={"鱼片 Fish Slice"} Foods={fishSlice} />
  )
}