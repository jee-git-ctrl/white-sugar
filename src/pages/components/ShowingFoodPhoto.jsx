import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import styled from "styled-components";

const ImageBox = styled.img`
  border-radius: 40px;
  width: 30%;
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

  return <ImageBox src={imageLocation} alt="" />;
}

export default ShowingFoodPhoto;