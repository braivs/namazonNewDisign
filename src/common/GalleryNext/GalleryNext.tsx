import {imagesSizeType} from "../../../hooks/use-gallery"
import React, {useState} from "react"
import {ButtonGallery} from "@/common/ButtonGallery/ButtonGallery"
import {getGalleryPhotosFromRequire, getSlides} from "@/common/helpers"

type GalleryNext = {
  images: __WebpackModuleApi.RequireContext
  imagesSize?: imagesSizeType
}

export default function GalleryNext({images, imagesSize}: GalleryNext) {
  const [index, setIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  const photos = imagesSize
    ? getGalleryPhotosFromRequire(images, imagesSize.width, imagesSize.height)
    : getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return <ButtonGallery
    index={index}
    indexCallback={setIndex}
    isOpen={open}
    openCloseCallback={setOpen}
    photos={photos}
    slides={slides}
    buttonName={'Screenshots'}
  />
}

