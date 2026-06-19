import {useVideoFullscreenChrome} from '../../hooks/use-video-fullscreen-chrome'

// Global listener — mounted once in _app.tsx (see video-fullscreen.scss).
export default function VideoFullscreenChrome() {
  useVideoFullscreenChrome()
  return null
}
