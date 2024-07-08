import React, {useEffect, useState} from 'react'
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"

export const MyYouTube = (props: YoutubePropsType) => {
  const [width, setWidth] = useState(0); // Initial state doesn't depend on window
  const [frameWidth, setFrameWidth] = useState(640);
  const [frameHeight, setFrameHeight] = useState(360);

  useEffect(() => {
    // This will only run on the client side
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      if (newWidth < 768) {
        setFrameWidth(340);
        setFrameHeight(190);
      } else if (newWidth < 992) {
        setFrameWidth(480);
        setFrameHeight(270);
      } else {
        setFrameWidth(640);
        setFrameHeight(360);
      }
    };

    updateWindowDimensions(); // Initial call to set dimensions based on current width
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <iframe
      width={frameWidth}
      height={frameHeight}
      src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

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