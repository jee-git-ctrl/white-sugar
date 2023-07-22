import React from "react";
import ShowingFoods from "../components/ShowingFoods";

export default function Soup() {
  const soup = require("../data/Soup.json");

  return (
    <ShowingFoods Name={"汤类 Soup"} Foods={soup} />
  )
}