import React, {useEffect, useState} from 'react'
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"
import {ButtonGallery} from "./ButtonGallery/ButtonGallery"

export const CustomButtonGallery: React.FC<CustomButtonGalleryType> = ({ gallery, buttonName }) => {
  return (
      <ButtonGallery
          index={gallery.index}
          indexCallback={gallery.setIndex}
          isOpen={gallery.open}
          openCloseCallback={gallery.setOpen}
          photos={gallery.photos}
          slides={gallery.slides}
          buttonName={buttonName}
      />
  );
};

export const MyYouTube = (props: YoutubePropsType) => {

  const [width, setWidth] = useState(window.innerWidth)
  const [frameWidth, setFrameWidth] = useState(640)
  const [frameHeight, setFrameHeight] = useState(360)

  useEffect(() => { // for adaptive
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth
      setWidth(newWidth)
    }
    window.addEventListener("resize", updateWindowDimensions)
    if (width < 992) {
      setFrameWidth(480)
      setFrameHeight(270)
    } else if (width < 768) {
      setFrameWidth(340)
      setFrameHeight(190)
    } else {
      setFrameWidth(640)
      setFrameHeight(360)
    }
    return () => window.removeEventListener("resize", updateWindowDimensions)
  }, [width])


  return <iframe
    width={frameWidth}
    height={frameHeight}
    src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
}

type GalleryType = {
  index: number;
  setIndex: (index: number) => void;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  photos: Array<Photo>; // Define 'Photo' based on your data structure
  slides: Array<Slide>; // Define 'Slide' based on your data structure
};

type YoutubePropsType = {
  videoId: string
}

type CustomButtonGalleryType = {
  gallery: GalleryType
  buttonName?: string
};