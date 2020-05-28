import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Link } from "rebass"
import { chunk, sum } from "../utils/array"
import { SCImg, SCImageCaption } from "./styles"
import { ColorThief, ColorThiefPalette } from "../ColorThief"

interface Props {
  images: {
    id: string
    aspectRatio: number
    src: string
    srcSet: string
    sizes: string
    originalImg: string
    caption: string
  }[]
  itemsPerRow?: number[]
}


const ImageCaption = ({ caption, originalImg }: { caption: string, originalImg: string }) => {
  return (
    <SCImageCaption>
      <span style={{ marginRight: 4 }}>{caption}</span>
      <ColorThief IMAGE_URL={originalImg} />
      <ColorThiefPalette IMAGE_URL={originalImg} />
    </SCImageCaption>)
}

const Gallery = ({
  images,
  itemsPerRow: itemsPerRowByBreakpoints = [1],
}: Props) => {
  const aspectRatios = images.map((image) => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    (itemsPerRow) =>
      chunk(aspectRatios, itemsPerRow).map((rowAspectRatios) =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = (imageIndex: number) => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }

  return (
    <>
      {images.map((image, i) => (
        <Link
          key={image.id}
          href={image.originalImg}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault()
            openModal(i)
          }}
        >
          <SCImg
            style={{
              margin: "10px 0",
              width: rowAspectRatioSumsByBreakpoints.map(
                (rowAspectRatioSums, j) => {
                  const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
                  const rowAspectRatioSum = rowAspectRatioSums[rowIndex]
                  const w = `${(image.aspectRatio / rowAspectRatioSum) * 100}%`
                  return `calc(${w})`
                }
              )[0],
            }}
            fluid={image}
          />
        </Link>
      ))}

      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={images.map(({ originalImg, caption }) => ({
                  source: originalImg,
                  caption: <ImageCaption caption={caption} originalImg={originalImg} />,
                }))}
                currentIndex={modalCurrentIndex}
                components={{ FooterCount: () => null }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </>
  )
}

export default Gallery
