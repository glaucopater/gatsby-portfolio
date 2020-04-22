import React from "react"
import { ButtonBase, SCThumbnail } from "./styles"

const ThumbGrid = ({
  images,
  handleOpen,
}: {
  images: any
  handleOpen: any
}) => {
  return images.map((image: any, i: any) => (
    <div key={i}>
      <ButtonBase onClick={handleOpen(i)} key={i} aria-label="preview">
        <SCThumbnail fluid={image.node.childImageSharp.fluid} />
      </ButtonBase>
    </div>
  ))
}

export default ThumbGrid
