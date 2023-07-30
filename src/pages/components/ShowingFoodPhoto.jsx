import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const ImageBox = styled.img`
  border-radius: 40px;
  height: 10rem;
  margin: 2px 10%;

  @media only screen and (min-width: 768px) {
    border-radius: 20px;
  }
`;

const ShowingFoodPhoto = ({ englishName, imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const match = useMemo(() => 
    data.allFile.nodes.find(({ name }) => imageName === name)
  , [data, imageName]);

  if (!match) return null;

  const image = require(`../img/${englishName}/${imageName}.jpg`);

  console.log(image);

  return (
    <ImageBox src={image.default} />
  )

  // return (
  //   <GatsbyImage
  //     image={image}
  //     alt=""
  //   />
  // )
  // return <ImageBox src={imageLocation} alt="" />;
}

export default ShowingFoodPhoto;