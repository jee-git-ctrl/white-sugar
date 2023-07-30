import React from "react";
import styled from "styled-components";

const ImageBox = styled.img`
  border-radius: 40px;
  height: 10rem;
  margin: 2px 10%;

  @media only screen and (min-width: 768px) {
    border-radius: 20px;
  }
`;

const ShowingFoodPhoto = ({ englishName, imageName }) => {

  const data = require("../data/ImageLocation.json");

  const ImageLoas = data[imageName];

  if(!ImageLoas) return null

  return (
    <ImageBox src={ImageLoas} alt="" />
  )

  try {
    const image = require(`../img/${englishName}/${imageName}.jpg`);
    return (
      <ImageBox src={image.default} />
    )
  }
  catch {
    return null;
  }

}

export default ShowingFoodPhoto;