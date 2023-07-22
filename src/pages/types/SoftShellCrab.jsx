import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function SoftShellCrab() {
  const softShellCrab = require("../data/SoftShellCrab.json");

  return (
    <ShowingFoods Name={"汤类 Soup"} Foods={softShellCrab} />
  )
}