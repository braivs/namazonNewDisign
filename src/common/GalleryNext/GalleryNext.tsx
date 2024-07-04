import {imagesSizeType} from "../../../hooks/use-gallery"
import React, {useState} from "react"
import {ButtonGallery} from "@/common/ButtonGallery/ButtonGallery"
import {getGalleryPhotosFromRequire, getGalleryPhotosFromRequireFromArray, getSlides} from "@/common/helpers"
import {Row} from "react-bootstrap"
import {LightboxMy, PhotoAlbumMy} from "@/common/ModdedComponents/ModdedComponents"

type GalleryNext = {
  images: __WebpackModuleApi.RequireContext
  imagesSize?: imagesSizeType
}

export type Img = {
  blurDataURL: string
  blurHeight: number
  blurWidth: number
  height: number
  src: string
  width: number
}

type GalleryNextArray = {
  images: Array<string>
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

export function GalleryNextFromArray({images}: GalleryNextArray) {
  const [index, setIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  // const images src()
  const photos = getGalleryPhotosFromRequireFromArray(images)
  const slides = getSlides(photos)
  return <Row>
    <PhotoAlbumMy photos={photos} openCallback={setIndex} layout={"rows"}/>
    <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
  </Row>
}

