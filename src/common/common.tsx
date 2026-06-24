import cn from 'classnames'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {Photo} from "react-photo-album"
import {Slide} from "yet-another-react-lightbox"
import {useTranslation} from 'react-i18next'
import s from './common.module.scss'

// Cross-browser check for native fullscreen element.
function isDocumentFullscreen(): boolean {
  const doc = document as Document & {webkitFullscreenElement?: Element | null}
  return Boolean(doc.fullscreenElement ?? doc.webkitFullscreenElement)
}

function getFullscreenElement(): Element | null {
  const doc = document as Document & {webkitFullscreenElement?: Element | null}
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

// Shared responsive sizing for YouTube/direct <video>.
// We skip resize updates while fullscreen is active to avoid accidental fullscreen exits.
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

// Keep this breakpoint in sync with the media-query listener below.
// MediaQuery "change" fires only when this exact threshold is crossed.
// This range targets the Chromium + cross-origin iframe case that behaves poorly.
const MVTUBE_BLOCK_FS_MEDIA = '(max-width: 1199px)'

function isChromiumBrowser(): boolean {
  const ua = navigator.userAgent
  return /Chrome|CriOS/i.test(ua) && !/Firefox|FxiOS/i.test(ua) && !/Edg/i.test(ua)
}

// Disable native iframe fullscreen only in the problematic environment.
// Desktop/Firefox keep the default iframe fullscreen behavior.
function shouldBlockMvTubeIframeFullscreen(): boolean {
  return window.matchMedia(MVTUBE_BLOCK_FS_MEDIA).matches && isChromiumBrowser()
}

async function requestElementFullscreen(el: HTMLElement): Promise<void> {
  const anyEl = el as HTMLElement & {webkitRequestFullscreen?: () => Promise<void> | void}
  if (el.requestFullscreen) {
    await el.requestFullscreen()
    return
  }
  if (anyEl.webkitRequestFullscreen) {
    await anyEl.webkitRequestFullscreen()
  }
}

async function exitDocumentFullscreen(): Promise<void> {
  const doc = document as Document & {webkitExitFullscreen?: () => Promise<void> | void}
  if (document.exitFullscreen) {
    await document.exitFullscreen()
    return
  }
  if (doc.webkitExitFullscreen) {
    await doc.webkitExitFullscreen()
  }
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
// - Inline player by default.
// - On mobile Chromium: block iframe fullscreen; our button calls requestFullscreen(shell).
export const MyMvTube = (props: MvTubePropsType) => {
  const {t} = useTranslation('video')
  const shellRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [blockIframeFullscreen, setBlockIframeFullscreen] = useState(false)
  const [embedReady, setEmbedReady] = useState(false)
  const [shellFullscreen, setShellFullscreen] = useState(false)
  const embedSrc = `https://mixedwrestling.video/embed/${props.videoId}`

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

  useEffect(() => {
    const syncShellFullscreen = () => {
      const shell = shellRef.current
      setShellFullscreen(Boolean(shell && getFullscreenElement() === shell))
    }
    document.addEventListener('fullscreenchange', syncShellFullscreen)
    document.addEventListener('webkitfullscreenchange', syncShellFullscreen)
    syncShellFullscreen()
    return () => {
      document.removeEventListener('fullscreenchange', syncShellFullscreen)
      document.removeEventListener('webkitfullscreenchange', syncShellFullscreen)
    }
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe || !blockIframeFullscreen) return
    iframe.removeAttribute('allowfullscreen')
    iframe.removeAttribute('webkitallowfullscreen')
    iframe.removeAttribute('mozallowfullscreen')
  }, [blockIframeFullscreen, embedReady])

  const enterShellFullscreen = useCallback(async () => {
    const shell = shellRef.current
    if (!shell) return
    try {
      await requestElementFullscreen(shell)
    } catch {
      /* user gesture / browser policy */
    }
  }, [])

  const exitShellFullscreen = useCallback(async () => {
    try {
      await exitDocumentFullscreen()
    } catch {
      /* already exited */
    }
  }, [])

  if (!embedReady) {
    return (
      <div className={s.mvtubeWrap}>
        <div className={s.mvtubeShell} aria-hidden />
      </div>
    )
  }

  return (
    <div className={s.mvtubeWrap}>
      <div ref={shellRef} className={cn(s.mvtubeShell, 'mvtube-shell')}>
        <iframe
          ref={iframeRef}
          key={blockIframeFullscreen ? 'mvtube-no-fs' : 'mvtube-fs'}
          className={cn(s.mvtubeIframe, 'mvtube-embed-iframe', 'video-embed-iframe')}
          src={embedSrc}
          title={`MixedWrestling video ${props.videoId}`}
          scrolling="no"
          allow={blockIframeFullscreen ? 'autoplay' : 'autoplay; fullscreen'}
          allowFullScreen={!blockIframeFullscreen}
        />
        {blockIframeFullscreen && shellFullscreen && (
          <button
            type="button"
            className={s.mvtubeExitBtn}
            onClick={() => void exitShellFullscreen()}
          >
            {t('details.mvtubeExitFullscreen')}
          </button>
        )}
      </div>
      {blockIframeFullscreen && !shellFullscreen && (
        <div className={s.mvtubeActions}>
          <button
            type="button"
            className={s.mvtubeFullscreenBtn}
            onClick={() => void enterShellFullscreen()}
          >
            {t('details.mvtubeFullscreen')}
          </button>
          <p className={s.mvtubeFullscreenHint}>{t('details.mvtubeFullscreenHint')}</p>
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
