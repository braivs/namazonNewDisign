import {useEffect} from 'react'

// Mobile fullscreen fix: detect iframe/video entering browser fullscreen (MvTube, YouTube, mp4).
function getFullscreenElement(): Element | null {
  const doc = document as Document & {
    webkitFullscreenElement?: Element | null // Safari
  }
  return doc.fullscreenElement ?? doc.webkitFullscreenElement ?? null
}

function isEmbedFullscreen(el: Element | null): boolean {
  return el instanceof HTMLIFrameElement || el instanceof HTMLVideoElement
}

// Toggles body.video-fullscreen so CSS can hide the fixed header over the player.
export function useVideoFullscreenChrome() {
  useEffect(() => {
    const sync = () => {
      document.body.classList.toggle(
        'video-fullscreen',
        isEmbedFullscreen(getFullscreenElement()),
      )
    }

    document.addEventListener('fullscreenchange', sync)
    document.addEventListener('webkitfullscreenchange', sync)
    sync()

    return () => {
      document.removeEventListener('fullscreenchange', sync)
      document.removeEventListener('webkitfullscreenchange', sync)
      document.body.classList.remove('video-fullscreen')
    }
  }, [])
}
