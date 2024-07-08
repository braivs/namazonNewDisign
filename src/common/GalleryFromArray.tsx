import React, {useState} from "react"
import {getGalleryPhotosFromRequireFromArray, getSlides} from "@/common/helpers"
import {Row} from "react-bootstrap"
import {LightboxMy, PhotoAlbumMy} from "@/common/ModdedComponents/ModdedComponents"

type GalleryFromArray = {
  images: Array<string>
}

export function GalleryFromArray({images}: GalleryFromArray) {
  const [index, setIndex] = useState(-1)
  const photos = getGalleryPhotosFromRequireFromArray(images)
  const slides = getSlides(photos)
  return <Row>
    <PhotoAlbumMy photos={photos} openCallback={setIndex} layout={"rows"}/>
    <LightboxMy slides={slides} index={index} closeCallback={setIndex}/>
  </Row>
}