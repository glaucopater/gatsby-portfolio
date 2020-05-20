import { graphql, StaticQuery } from "gatsby"
import React from "react"
import Gallery from "./Gallery"
import Section, { Props } from "./Section"

const PhotosSection = (props: Props) => (
  <Section {...props}>
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
          images={data.allPhotosYaml.edges.map(({ node }: any) => {
            return ({
              id: node.image.id,
              ...node.image.childImageSharp.fluid,
              caption: `${node.title} – ${node.author}`,
            })
          })}
          itemsPerRow={[3, 3]}
        />
      )}
    />
  </Section>
)

export default PhotosSection
