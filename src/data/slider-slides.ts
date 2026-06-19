// Header carousel — namazonClub slider.pug / sliderEng.pug (locale-specific captions baked in).

export const SLIDES_RU = [
  '/assets/img/slider/slide1.jpg',
  '/assets/img/slider/slide2.jpg',
  '/assets/img/slider/slide3.jpg',
  '/assets/img/slider/slide4.jpg',
  '/assets/img/slider/slide5.jpg',
  '/assets/img/slider/slide6.jpg',
] as const

export const SLIDES_EN = [
  '/assets/img/sliderEng/slide1.jpg',
  '/assets/img/sliderEng/slide2.jpg',
  '/assets/img/sliderEng/slide3.jpg',
  '/assets/img/sliderEng/slide4.jpg',
  '/assets/img/sliderEng/slide5.jpg',
  '/assets/img/sliderEng/slide6.jpg',
] as const

// Footer / landing carousel — namazonClub index.pug (same imgs for RU and EN).
const SLIDER_INDEX = '/assets/img/sliderIndex'

export const FOOTER_SLIDES = [
  `${SLIDER_INDEX}/01.jpg`,
  `${SLIDER_INDEX}/02.jpg`,
  `${SLIDER_INDEX}/03.jpg`,
  `${SLIDER_INDEX}/04.jpg`,
  `${SLIDER_INDEX}/01.jpg`,
  `${SLIDER_INDEX}/05.jpg`,
  `${SLIDER_INDEX}/03.jpg`,
] as const
