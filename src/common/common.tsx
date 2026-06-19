import React, {useEffect, useRef, useState} from 'react'
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"
import s from './video-embed.module.scss'
function isDocumentFullscreen(): boolean {
  const doc = document as Document & {webkitFullscreenElement?: Element | null}
  return Boolean(doc.fullscreenElement ?? doc.webkitFullscreenElement)
}

function useVideoFrameDimensions() {
  const [frameWidth, setFrameWidth] = useState(640);
  const [frameHeight, setFrameHeight] = useState(360);

  useEffect(() => {
    const applyDimensions = () => {
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

    const updateWindowDimensions = () => {
      // Mobile: resize during fullscreen re-renders iframe and drops fullscreen.
      if (isDocumentFullscreen()) return
      applyDimensions()
    };

    applyDimensions();
    window.addEventListener('resize', updateWindowDimensions);

    const onFullscreenChange = () => {
      if (!isDocumentFullscreen()) {
        applyDimensions()
      }
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    document.addEventListener('webkitfullscreenchange', onFullscreenChange)

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      document.removeEventListener('fullscreenchange', onFullscreenChange)
      document.removeEventListener('webkitfullscreenchange', onFullscreenChange)
    };
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
      allowFullScreen
    />
  );
};

export const MyMvTube = (props: MvTubePropsType) => (
  <div className={s.mvtubeShell}>
    <iframe
      className={`video-embed-iframe ${s.mvtubeIframe}`}
      src={`https://mixedwrestling.video/embed/${props.videoId}`}
      title={`MixedWrestling video ${props.videoId}`}
      scrolling="no"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
  </div>
);
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