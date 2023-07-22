import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function FishHead() {
  const fishHead = require("../data/FishHead.json");

  return (
    <ShowingFoods Name={"鱼头 Fish Head"} Foods={fishHead} />
  )
}