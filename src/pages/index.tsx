import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { SvgLandscape, SvgPortrait } from "../templates/RandomSvgImageTemplate";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { SCPageContent } from "../styles/common";
import Menu from "../components/Menu";
import { randomGenerator } from "../utils/data";


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
      const randomSvg = aspectRatio >= 1 ?
        <SvgLandscape image={randomizedImage.fluid.src} aspectRatio={aspectRatio} /> :
        <SvgPortrait image={randomizedImage.fluid.src} />;

      return (
        <Layout>
          <SEO
            lang="en"
            title="Home"
            keywords={[`glimpse`, `portfolio`, `galleries`]}
            meta={[]}
          />
          <SCPageContent>
            <Menu />
            {randomSvg}
          </SCPageContent>
        </Layout>
      );
    }}
  />
);