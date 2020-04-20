import React, { useState, SetStateAction } from "react"
import { graphql, StaticQuery } from "gatsby"
import ThumbGrid from "./thumbnails"
import LightBox from "./lightbox"
import { Grid } from "@material-ui/core"

const GalleryComponent = () => {
  const [showLightbox, setShowLightbox] = useState(false)
  const [selectedImage, setSelectedImage] = useState<
    number | undefined | SetStateAction<null> | null
  >(undefined)

  const handleOpen = (i: any) => () => {
    setShowLightbox(true)
    setSelectedImage(i)
  }
  const handleClose = () => {
    setShowLightbox(false)
    setSelectedImage(null)
  }
  const handlePrevRequest = (i: any, length: any) => () => {
    const res = (i - 1 + length) % length
    setSelectedImage(res)
  }
  const handleNextRequest = (i: any, length: any) => () => {
    const res = (i + 1) % length
    setSelectedImage(res)
  }

  return (
    <StaticQuery
      query={graphql`
        query allImgQuery {
          source: allFile(filter: { relativeDirectory: { eq: "" } }) {
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
      `}
      render={data => {
        const images = data.source.edges
        return (
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
        )
      }}
    />
  )
}
export default GalleryComponent
