import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Pork() {
  const pork = require("../data/Pork.json");

  return (
    <ShowingFoods Name={"猪肉 Pork"} Foods={pork} />
  )
}