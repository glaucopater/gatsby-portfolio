import React from "react";
import Image from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const randomGenerator = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default ({ data }: { data: any; }) => (
  <StaticQuery
    query={graphql`
      {
        allImageSharp {
          edges {
            node {
              id
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { allImageSharp } = data;
      const { edges } = allImageSharp;
      const randomPosition = randomGenerator(0, edges.length - 1);
      const randomizedImage = edges[randomPosition].node;
      return (
        <div style={{ margin: "0.85rem" }}>
          <Image fluid={randomizedImage.fluid} />
        </div>
      );
    }}
  />
);