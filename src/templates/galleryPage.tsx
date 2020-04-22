import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import ThumbGrid from "../components/thumbnails"
import LightBox from "../components/lightbox"
import SEO from "../components/seo"

export default ({ data }: { data: any }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const handleOpen = (i: any) => () => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i: any, length: any) => () => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i: any, length: any) => () => {
    setSelectedImage((i + 1) % length)
  }
  const node = data.allFile.edges[0].node
  const images = data.allFile.edges
  return (
    <Layout>
      <SEO
        lang="en"
        title="Home"
        keywords={[`gatsby`, `application`, `react`]}
        meta={[]}
      />
      <div>
        <h1>{node.id}</h1>
        <div>{node.relativeDirectory}</div>
        <div>{node.name}</div>
        <div>{node.name}</div>
        <div style={{ display: "flex", padding: "8px", flexWrap: "wrap" }}>
          <ThumbGrid images={images} handleOpen={handleOpen} />
          {showLightbox && selectedImage !== null && (
            <LightBox
              images={images}
              handleClose={handleClose}
              handleNextRequest={handleNextRequest}
              handlePrevRequest={handlePrevRequest}
              selectedImage={selectedImage}
            />
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($relativeDirectory: String!) {
    allFile(filter: { relativeDirectory: { eq: $relativeDirectory } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxHeight: 500) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`
