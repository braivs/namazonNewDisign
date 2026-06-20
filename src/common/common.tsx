import cn from 'classnames'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"
import {useTranslation} from 'react-i18next'
import s from './common.module.scss'

// Cross-browser check for an element in native fullscreen (YouTube/MvTube iframe, <video>).
function isDocumentFullscreen(): boolean {
  const doc = document as Document & {webkitFullscreenElement?: Element | null}
  return Boolean(doc.fullscreenElement ?? doc.webkitFullscreenElement)
}

// Shared sizing hook for YouTube/direct <video>.
// We intentionally do not resize while fullscreen is active:
// some embeds collapse fullscreen when resize events fire.
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

// Must match the listener in MyMvTube — different values break resize updates
// (MediaQueryList "change" only fires when this exact breakpoint is crossed).
// This bucket maps to the environment where Chromium + cross-origin iframe fullscreen is unstable.
const MVTUBE_BLOCK_FS_MEDIA = '(max-width: 1199px)'

function isChromiumBrowser(): boolean {
  const ua = navigator.userAgent
  return /Chrome|CriOS/i.test(ua) && !/Firefox|FxiOS/i.test(ua) && !/Edg/i.test(ua)
}

// Block native iframe fullscreen only in the problematic environment.
// On desktop/Firefox we keep normal iframe fullscreen permissions.
function shouldBlockMvTubeIframeFullscreen(): boolean {
  return window.matchMedia(MVTUBE_BLOCK_FS_MEDIA).matches && isChromiumBrowser()
}

export const MyYouTube = (props: YoutubePropsType) => {
  const {frameWidth, frameHeight} = useVideoFrameDimensions();

  return (
    <iframe
      width={frameWidth}
      height={frameHeight}
      src={`https://www.youtube-nocookie.com/embed/${props.videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      allowFullScreen
    />
  );
};

// MvTube strategy:
// 1) Inline mode by default.
// 2) On mobile Chromium we disable native iframe fullscreen and use CSS theater overlay.
// 3) Exit button stays over video because we avoid native cross-origin fullscreen layer.
export const MyMvTube = (props: MvTubePropsType) => {
  const {t} = useTranslation('video')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  // True => strip iframe fullscreen permissions and show custom Fullscreen control.
  const [blockIframeFullscreen, setBlockIframeFullscreen] = useState(false)
  // Delay first iframe render until client-only media/UA policy is known.
  const [embedReady, setEmbedReady] = useState(false)
  // CSS theater overlay (viewport-fixed), not browser Fullscreen API.
  const [theater, setTheater] = useState(false)
  const embedSrc = `https://mixedwrestling.video/embed/${props.videoId}`

  // Keep policy synchronized when viewport crosses MVTUBE_BLOCK_FS_MEDIA breakpoint.
  useEffect(() => {
    const mq = window.matchMedia(MVTUBE_BLOCK_FS_MEDIA)
    const update = () => {
      setBlockIframeFullscreen(shouldBlockMvTubeIframeFullscreen())
      setEmbedReady(true)
    }
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // Remove legacy fullscreen attrs when fullscreen is blocked in this environment.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe || !blockIframeFullscreen) return
    iframe.removeAttribute('allowfullscreen')
    iframe.removeAttribute('webkitallowfullscreen')
    iframe.removeAttribute('mozallowfullscreen')
  }, [blockIframeFullscreen, embedReady])

  // Stable handlers are reused by click callbacks and Escape effect dependencies.
  const openTheater = useCallback(() => setTheater(true), [])
  const closeTheater = useCallback(() => setTheater(false), [])

  // Theater lifecycle: lock page scroll and allow keyboard exit via Escape.
  useEffect(() => {
    if (!theater) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeTheater()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [theater, closeTheater])

  // Placeholder keeps layout stable while client policy is being computed.
  if (!embedReady) {
    return (
      <div className={s.mvtubeWrap}>
        <div className={s.mvtubeShell} aria-hidden />
      </div>
    )
  }

  return (
    <div className={cn(s.mvtubeWrap, theater && s.mvtubeWrapTheater, theater && 'mvtube-theater')}>
      {/* Shell is the clipping box: masks embed footer artifacts and hosts overlay controls. */}
      <div className={cn(s.mvtubeShell, 'mvtube-shell')}>
        {/* Iframe slot isolates sizing rules between inline and theater modes. */}
        <div className={s.mvtubeIframeSlot}>
          <iframe
            ref={iframeRef}
            key={blockIframeFullscreen ? 'mvtube-no-fs' : 'mvtube-fs'}
            className={cn(s.mvtubeIframe, 'mvtube-embed-iframe', 'video-embed-iframe')}
            src={embedSrc}
            title={`MixedWrestling video ${props.videoId}`}
            scrolling="no"
            frameBorder={0}
            allow={blockIframeFullscreen ? 'autoplay' : 'autoplay; fullscreen'}
            allowFullScreen={!blockIframeFullscreen}
          />
        </div>
        {blockIframeFullscreen && theater && (
          <button
            type="button"
            className={s.mvtubeExitBtn}
            onClick={closeTheater}
          >
            {t('details.mvtubeExitFullscreen')}
          </button>
        )}
      </div>
      {/* Entry button appears only when native iframe fullscreen is intentionally blocked. */}
      {blockIframeFullscreen && !theater && (
        <div className={s.mvtubeActions}>
          <button
            type="button"
            className={s.mvtubeFullscreenBtn}
            onClick={openTheater}
          >
            {t('details.mvtubeFullscreen')}
          </button>
        </div>
      )}
    </div>
  )
}

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
