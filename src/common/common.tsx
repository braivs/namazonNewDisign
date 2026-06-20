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
// - On mobile Chromium: disable native iframe fullscreen and use CSS theater overlay.
// - This keeps the Exit button reliably on top of the video.
export const MyMvTube = (props: MvTubePropsType) => {
  const {t} = useTranslation('video')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const viewportRef = useRef({w: 0, h: 0})
  // When true, remove iframe fullscreen permissions and use custom Fullscreen control.
  const [blockIframeFullscreen, setBlockIframeFullscreen] = useState(false)
  // Delay first iframe render until client-only policy (viewport + UA) is known.
  const [embedReady, setEmbedReady] = useState(false)
  // CSS theater overlay (fixed to viewport), not browser Fullscreen API.
  const [theater, setTheater] = useState(false)
  // Track orientation for theater-specific styling tweaks.
  const [theaterLandscape, setTheaterLandscape] = useState(false)
  // Force iframe remount when viewport/orientation changes in theater mode.
  const [theaterViewportVersion, setTheaterViewportVersion] = useState(0)
  const embedSrc = `https://mixedwrestling.video/embed/${props.videoId}`

  // Re-check fullscreen policy when viewport crosses the configured breakpoint.
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

  // Also remove legacy fullscreen attrs used by some browsers.
  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe || !blockIframeFullscreen) return
    iframe.removeAttribute('allowfullscreen')
    iframe.removeAttribute('webkitallowfullscreen')
    iframe.removeAttribute('mozallowfullscreen')
  }, [blockIframeFullscreen, embedReady])

  // Stable handlers keep effect dependencies clean and predictable.
  const openTheater = useCallback(() => setTheater(true), [])
  const closeTheater = useCallback(() => setTheater(false), [])

  // Theater lifecycle: lock page scroll and support Escape to close.
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

  // When rotating device in theater mode, some browsers keep stale iframe layout.
  // We detect real viewport changes and remount iframe to recalculate correctly.
  useEffect(() => {
    if (!theater) return

    const update = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const prev = viewportRef.current
      const changedEnough = Math.abs(w - prev.w) > 8 || Math.abs(h - prev.h) > 8
      const orientationChanged = (w > h) !== (prev.w > prev.h)

      if (!changedEnough && !orientationChanged) return

      viewportRef.current = {w, h}
      setTheaterLandscape(w > h)
      setTheaterViewportVersion((v) => v + 1)
    }

    update()
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    window.visualViewport?.addEventListener('resize', update)

    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      window.visualViewport?.removeEventListener('resize', update)
    }
  }, [theater])

  // Placeholder prevents layout jump while client policy is resolving.
  if (!embedReady) {
    return (
      <div className={s.mvtubeWrap}>
        <div className={s.mvtubeShell} aria-hidden />
      </div>
    )
  }

  return (
    <div
      className={cn(
        s.mvtubeWrap,
        theater && s.mvtubeWrapTheater,
        theater && theaterLandscape && s.mvtubeWrapTheaterLandscape,
        theater && 'mvtube-theater',
      )}
    >
      {/* Shell is the clipping box and anchor for overlay controls. */}
      <div className={cn(s.mvtubeShell, 'mvtube-shell')}>
        {/* Iframe slot lets us switch sizing rules between inline and theater modes. */}
        <div className={s.mvtubeIframeSlot}>
          <iframe
            ref={iframeRef}
            key={`${blockIframeFullscreen ? 'mvtube-no-fs' : 'mvtube-fs'}-${theater ? `t-${theaterViewportVersion}` : 'inline'}`}
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
      {/* Show custom Fullscreen button only when native iframe fullscreen is blocked. */}
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
