import {Button} from "react-bootstrap"
import {Collapse} from "@mui/material"
import {LightboxMy, PhotoAlbumMy} from "../ModdedComponents/ModdedComponents"
import React, {useState} from "react"
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"
import s from './ButtonGallery.module.scss'
import {getGalleryPhotosFromRequire, getSlides} from "@/common/helpers"
import {imagesSizeType} from "@/shared/assets/types/types"

type ButtonPropsType = {
  openCloseCallback: (value: boolean) => void
  indexCallback: (value: number) => void
  index: number
  isOpen: boolean
  photos: Photo[]
  slides: Slide[]
  buttonName?: string
}

export const ButtonGallery = (props: ButtonPropsType) => {
  return (
    <div className={s.buttonGallery}>
      <Button variant="primary"
              onClick={() => props.openCloseCallback(!props.isOpen)}>{props.buttonName ? props.buttonName : 'SCREENSHOTS'}</Button>
      <Collapse in={props.isOpen}>
        <PhotoAlbumMy layout="masonry" photos={props.photos} openCallback={props.indexCallback}/>
      </Collapse>
      <LightboxMy slides={props.slides} index={props.index} closeCallback={props.indexCallback}/>
    </div>
  )
}

export const GalleryNext = (images: __WebpackModuleApi.RequireContext, imagesSize?: imagesSizeType ) => {
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);
  const photos = imagesSize
    ? getGalleryPhotosFromRequire(images, imagesSize.width, imagesSize.height)
    : getGalleryPhotosFromRequire(images);
  const slides = getSlides(photos);

}