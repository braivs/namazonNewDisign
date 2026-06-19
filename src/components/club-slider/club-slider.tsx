import cn from 'classnames'
import React, {useEffect, useMemo, useState} from 'react'
import {Carousel} from 'react-bootstrap'
import {useLocale} from '@/hooks/use-locale'
import {FOOTER_SLIDES, SLIDES_EN, SLIDES_RU} from '@/data/slider-slides'
import s from './club-slider.module.scss'

type ClubSliderVariant = 'header' | 'footer'

type ClubSliderProps = {
  variant: ClubSliderVariant
  /** Autoplay interval in ms; footer (index page) uses 2000, header uses 5000. */
  interval?: number
}

const ClubSlider = ({variant, interval}: ClubSliderProps) => {
  const [locale] = useLocale()
  const [activeIndex, setActiveIndex] = useState(0)

  const slides = useMemo(() => {
    if (variant === 'footer') {
      return FOOTER_SLIDES
    }
    return locale === 'ru' ? SLIDES_RU : SLIDES_EN
  }, [locale, variant])

  const autoplayMs = interval ?? (variant === 'footer' ? 2000 : 5000)

  useEffect(() => {
    setActiveIndex(0)
  }, [locale])

  return (
    <div
      className={cn(
        s.wrapper,
        variant === 'header' && s.header,
        variant === 'footer' && s.footer,
        variant === 'footer' && s.onDark,
      )}
    >
      <div className={s.slider}>
        <Carousel
          key={variant === 'footer' ? 'footer' : locale}
          fade
          interval={autoplayMs}
          controls={false}
          indicators={false}
          touch={false}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        >
          {slides.map((src, index) => (
            <Carousel.Item key={`${src}-${index}`}>
              <img
                src={src}
                alt={`Namazon Club slide ${index + 1}`}
                className={s.slideImg}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={s.indicators}>
        {slides.map((src, index) => (
          <button
            key={`${src}-${index}`}
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

export default ClubSlider
