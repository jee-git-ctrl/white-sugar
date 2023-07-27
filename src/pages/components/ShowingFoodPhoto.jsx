import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageBox = styled.img`
  border-radius: 40px;
  height: 10rem;
  margin: 2px 10%;

  @media only screen and (min-width: 768px) {
    border-radius: 20px;
  }
`;

const ShowingFoodPhoto = ({ imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        edges {
          node {
            name
            publicURL
            relativePath
          }
        }
      }
    }
  `);

  const match = useMemo(() => 
    data.allFile.edges.find(({ node }) => imageName === node.name)
  , [data, imageName]);

  if (!match) return null;
  const imageLocation = match.node.publicURL;

  const temp = match.node.relativePath;

  const image = getImage(match);

  // return (
  //   <GatsbyImage
  //     image={image}
  //     alt=""
  //   />
  // )
  return <ImageBox src={imageLocation} alt="" />;
}

export default ShowingFoodPhoto;