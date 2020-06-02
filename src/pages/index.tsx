import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SvgLandscape, SvgPortrait } from "../templates/RandomSvgImageTemplate";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SCLink } from "../styles/common";
import Menu from "../components/Menu";

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
      const { aspectRatio } = randomizedImage.fluid;
      const randomSvg = aspectRatio >= 1 ? <SvgLandscape image={randomizedImage.fluid.src} aspectRatio={aspectRatio} style={{ flex: 1 }} /> :
        <SvgPortrait image={randomizedImage.fluid.src} style={{ flex: "1" }} />;

      return (
        <Layout>
          <SEO
            lang="en"
            title="Home"
            keywords={[`glimpse`, `portfolio`, `galleries`]}
            meta={[]}
          />

          <div style={{
            display: "flex",
            placeContent: "space-around",
            margin: "0 auto"
          }}>
            <Menu />
            {randomSvg}
          </div>
        </Layout>

      );
    }}
  />
);