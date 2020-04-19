import React, { useState } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Grid } from "@material-ui/core"
import ThumbGrid from "../components/thumbnails"
import LightBox from "../components/lightbox"

export default ({ data }) => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleOpen = i => e => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i, length) => e => {
    setSelectedImage((i - 1 + length) % length)
  }
  const handleNextRequest = (i, length) => e => {
    setSelectedImage((i + 1) % length)
  }
  const node = data.allFile.edges[0].node
  const images = data.allFile.edges
  return (
    <Layout>
      <div>
        <h1>{node.id}</h1>
        <div>{node.relativeDirectory}</div>
        <div>{node.name}</div>
        <div>{node.name}</div>
        <Grid container spacing={24} justify="center">
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
        </Grid>
      </div>
    </Layout>
  )
}

// id
// name
// relativeDirectory
// relativePath
// absolutePath

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
