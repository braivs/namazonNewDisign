declare module 'swiper' {
  export interface SwiperOptions {
    [key: string]: unknown
  }
  export const Navigation: unknown
  export const Pagination: unknown
  export const Autoplay: unknown
  export const EffectFade: unknown
  export const Thumbs: unknown
  export const FreeMode: unknown
  export const Controller: unknown
}

declare module 'swiper/react' {
  import type { ComponentType, ReactNode } from 'react'
  import type { SwiperOptions } from 'swiper'

  export const Swiper: ComponentType<
    SwiperOptions & {
      children?: ReactNode
      className?: string
      modules?: unknown[]
      onSwiper?: (swiper: unknown) => void
      onSlideChange?: (swiper: unknown) => void
    }
  >
  export const SwiperSlide: ComponentType<{
    children?: ReactNode
    className?: string
  }>
}
