import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SvgLandscape, SvgPortrait } from "../templates/RandomSvgImageTemplate";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SCLink } from "../styles/common";

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
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            maxWidth: "500px",
            margin: "0 auto"
          }}>
            {randomSvg}
          </div>
          <h2 style={{ margin: "0px 1rem" }}>Sections</h2>
          <ul>
            <li><SCLink style={{ margin: "0px 1rem" }} to="/bw">Black and white Street Photography📸</SCLink></li>
            <li><SCLink style={{ margin: "0px 1rem" }} to="/color">Color Street Photography📸</SCLink></li>
            <li><SCLink style={{ margin: "0px 1rem" }} to="/abstract">Abstract 📸</SCLink></li>
          </ul>
        </Layout>

      );
    }}
  />
);