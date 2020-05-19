import React from "react"
import { ButtonBase, SCThumbnail } from "./styles"
import GatsbyImage from "gatsby-image"

const ThumbGrid = ({
  images,
  handleOpen,
}: {
  images: any
  handleOpen: any
}) => {
  return images.map((image: any, i: any) => {
    return (
      <div key={i}>
        <ButtonBase onClick={handleOpen(i)} key={i} aria-label="preview">
          <SCThumbnail
            fluid={
              image.node.childImageSharp
                ? image.node.childImageSharp.fluid
                : undefined
            }
          />
        </ButtonBase>
      </div>
    )
  })
}

export default ThumbGrid
