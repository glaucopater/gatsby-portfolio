import { graphql, StaticQuery } from "gatsby"
import React from "react"
import { Heading } from "rebass"
import Gallery from "./Gallery"
import Section, { Props } from "./Section"

const PhotosSection = (props: Props) => (
  <Section {...props}>
    <Heading id="photos" textAlign="center" py={4}>
      Photos
    </Heading>
    <StaticQuery
      query={graphql`
        {
          allPhotosYaml {
            edges {
              node {
                title
                author
                image {
                  id
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      originalImg
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Gallery
          images={data.allPhotosYaml.edges.map(({ node }: any) => ({
            id: node.image.id,
            ...node.image.childImageSharp.fluid,
            caption: `${node.title} – ${node.author}`,
          }))}
          itemsPerRow={[2, 3]}
        />
      )}
    />
  </Section>
)

export default PhotosSection
