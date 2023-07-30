import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useMemo } from "react";
import styled from "styled-components";

// const ImageBox = styled.img`
//   border-radius: 40px;
//   height: 10rem;
//   margin: 2px 10%;

//   @media only screen and (min-width: 768px) {
//     border-radius: 20px;
//   }
// `;
const ImageBox = styled.div`
  margin: 2px 0;
`;

const ShowingFoodPhoto = ({ englishName, imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 150)
          }
        }
      }
    }
  `);

  const match = useMemo(() => 
    data.allFile.nodes.find(({ name }) => imageName === name)
  , [data, imageName]);

  if (!match) return null;

  return (
    <ImageBox>
      <GatsbyImage image={match.childImageSharp.gatsbyImageData} />
    </ImageBox>
  )

  // try {
  //   const image = require(`../img/${englishName}/${imageName}.jpg`);
  //   return (
  //     <ImageBox src={image.default} />
  //   )
  // }
  // catch {
  //   return null;
  // }

}

export default ShowingFoodPhoto;