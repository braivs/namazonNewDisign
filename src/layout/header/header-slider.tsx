import cn from 'classnames'
import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import s from './header-slider.module.scss'

const SLIDES = [
  '/assets/img/sliderEng/slide1.jpg',
  '/assets/img/sliderEng/slide2.jpg',
  '/assets/img/sliderEng/slide3.jpg',
  '/assets/img/sliderEng/slide4.jpg',
  '/assets/img/sliderEng/slide5.jpg',
  '/assets/img/sliderEng/slide6.jpg',
]

const HeaderSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={s.wrapper}>
      <div className={s.slider}>
        <Carousel
          fade
          interval={5000}
          controls={false}
          indicators={false}
          touch={false}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        >
          {SLIDES.map((src, index) => (
            <Carousel.Item key={src}>
              <img src={src} alt={`Namazon Club slide ${index + 1}`} className={s.slideImg}/>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={s.indicators}>
        {SLIDES.map((src, index) => (
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
