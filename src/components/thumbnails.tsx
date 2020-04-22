import React from "react"
import Img from "gatsby-image"
import { withStyles } from "@material-ui/core"
import ButtonBase from "@material-ui/core/ButtonBase"

const style = () => ({
  previewButton: {
    display: "inline-block",
    background: "transparent",
    border: "none",
    padding: 0,
    margin: "8px",
    width: 200,
    height: 200,
    borderRadius: 4,
    boxShadow: "0 0 15px -5px rgba(0,0,0,0.3)",
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
})

const ThumbGrid = ({
  images,
  handleOpen,
  classes,
}: {
  images: any
  handleOpen: any
  classes: any
}) => {
  return images.map((image: any, i: any) => (
    <div key={i}>
      <ButtonBase
        onClick={handleOpen(i)}
        className={classes.previewButton}
        key={i}
        aria-label="preview"
      >
        <Img
          fluid={image.node.childImageSharp.fluid}
          className={classes.thumbnail}
        />
      </ButtonBase>
    </div>
  ))
}

export default withStyles(style)(ThumbGrid)
