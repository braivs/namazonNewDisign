import {imagesSizeType} from "../../../hooks/use-gallery"
import React, {useState} from "react"
import {getGalleryPhotosFromRequire, getSlides} from "@/common/helpers"
import {Button} from "react-bootstrap"
import {LightboxMy, PhotoAlbumMy} from "@/common/ModdedComponents/ModdedComponents"
import s from "@/common/ButtonGallery/ButtonGallery.module.scss"
import {Collapse} from "@mui/material"

type ButtonGallery = {
  images: __WebpackModuleApi.RequireContext
  imagesSize?: imagesSizeType
  buttonName?: string
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

