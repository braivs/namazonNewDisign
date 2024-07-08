import {imagesSizeType} from "../../../hooks/use-gallery"
import React, {useState} from "react"
import {getGalleryPhotosFromRequire, getGalleryPhotosFromRequireFromArray, getSlides} from "@/common/helpers"
import {Button, Row} from "react-bootstrap"
import {LightboxMy, PhotoAlbumMy} from "@/common/ModdedComponents/ModdedComponents"
import s from "@/common/GalleryNext/ButtonGallery.module.scss"
import {Collapse} from "@mui/material"

type ButtonGallery = {
  images: __WebpackModuleApi.RequireContext
  imagesSize?: imagesSizeType
  buttonName?: string
}

type GalleryNextArray = {
  images: Array<string>
}

export default function ButtonGallery({images, imagesSize, buttonName}: ButtonGallery) {
  const [index, setIndex] = useState(-1)
  const [open, setOpen] = useState(false)
  const photos = imagesSize
    ? getGalleryPhotosFromRequire(images, imagesSize.width, imagesSize.height)
    : getGalleryPhotosFromRequire(images)
  const slides = getSlides(photos)
  return <div className={s.buttonGallery}>
    <Button variant="primary"
            onClick={() => setOpen(!open)}>{buttonName ? buttonName : 'SCREENSHOTS'}</Button>
    <Collapse in={open}>
      <PhotoAlbumMy layout="masonry" photos={photos} openCallback={setIndex}/>
    </Collapse>
    <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
  </div>
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

