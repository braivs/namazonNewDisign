import React, {useEffect, useRef, useState} from 'react'
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"

function useVideoFrameDimensions() {
  const [frameWidth, setFrameWidth] = useState(640);
  const [frameHeight, setFrameHeight] = useState(360);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
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

    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return {frameWidth, frameHeight};
}

export const MyYouTube = (props: YoutubePropsType) => {
  const {frameWidth, frameHeight} = useVideoFrameDimensions();

  return (
    <iframe
      className="video-embed-iframe"
      width={frameWidth}
      height={frameHeight}
      src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen // triggers document.fullscreenElement → body.video-fullscreen
    />
  );
};

export const MyMvTube = (props: MvTubePropsType) => {
  const {frameWidth} = useVideoFrameDimensions();
  // MixedWrestling embed is 700x400 (7:4), not 16:9.
  const frameHeight = Math.round((frameWidth * 4) / 7);

  return (
    <iframe
      className="video-embed-iframe"
      width={frameWidth}
      height={frameHeight}
      src={`https://mixedwrestling.video/embed/${props.videoId}`}
      frameBorder="0"
      // Prevent iframe-internal scrollbars during playback controls/layout changes.
      scrolling="no"
      style={{display: 'block', border: 0}}
      allow="fullscreen"
      allowFullScreen // parent page hides header via fullscreenchange listener
    />
  );
};

export const MyDirectVideo = (props: {src: string; isActive?: boolean}) => {
  const {frameWidth, frameHeight} = useVideoFrameDimensions();
  const videoRef = useRef<HTMLVideoElement>(null);
  // Hidden tab players must stop audio immediately.
  const isActive = props.isActive ?? true;

  useEffect(() => {
    if (!isActive) {
      videoRef.current?.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      className="video-embed-iframe" // same fullscreen chrome handling as iframes
      width={frameWidth}
      height={frameHeight}
      controls
      playsInline
      preload="metadata"
      src={props.src}
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

type MvTubePropsType = {
  videoId: string
}

type CustomButtonGalleryType = {
  gallery: GalleryType
  buttonName?: string
};