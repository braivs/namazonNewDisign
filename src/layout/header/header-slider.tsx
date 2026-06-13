import cn from 'classnames'
import React, {useEffect, useMemo, useState} from 'react'
import {Carousel} from 'react-bootstrap'
import {useLocale} from '@/hooks/use-locale'
import s from './header-slider.module.scss'

// Header slider in the top-right corner (same carousel as on the legacy HTML site).
// RU and EN use separate image sets with baked-in captions — not the same imgs with translated text.

// RU: namazonClub/docs/img/slider/slide1.jpg … slide6.jpg
const SLIDES_RU = [
  '/assets/img/slider/slide1.jpg',
  '/assets/img/slider/slide2.jpg',
  '/assets/img/slider/slide3.jpg',
  '/assets/img/slider/slide4.jpg',
  '/assets/img/slider/slide5.jpg',
  '/assets/img/slider/slide6.jpg',
]

// EN: namazonClub/docs/img/sliderEng/slide1.jpg … slide6.jpg
const SLIDES_EN = [
  '/assets/img/sliderEng/slide1.jpg',
  '/assets/img/sliderEng/slide2.jpg',
  '/assets/img/sliderEng/slide3.jpg',
  '/assets/img/sliderEng/slide4.jpg',
  '/assets/img/sliderEng/slide5.jpg',
  '/assets/img/sliderEng/slide6.jpg',
]

const HeaderSlider = () => {
  const [locale] = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = useMemo(
    () => (locale === 'ru' ? SLIDES_RU : SLIDES_EN),
    [locale],
  )

  // Reset to the first slide on locale change so indicators stay in sync with the carousel.
  useEffect(() => {
    setActiveIndex(0)
  }, [locale])

  return (
    <div className={s.wrapper}>
      <div className={s.slider}>
        <Carousel
          key={locale} // remount carousel when locale changes
          fade
          interval={5000}
          controls={false}
          indicators={false} // custom bar indicators below, matching the legacy site
          touch={false}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        >
          {slides.map((src, index) => (
            <Carousel.Item key={src}>
              <img src={src} alt={`Namazon Club slide ${index + 1}`} className={s.slideImg}/>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {/* Custom indicators — horizontal bars below the slider */}
      <div className={s.indicators}>
        {slides.map((src, index) => (
          <button
            key={src}
            type="button"
            className={cn(s.indicator, index === activeIndex && s.indicatorActive)}
            onClick={() => setActiveIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeaderSlider
