'use client'

import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {Collapse} from '@mui/material'
import {useTranslation} from 'react-i18next'
import {getGalleryPhotosFromRequireFromArray, getSlides} from '@/common/helpers'
import {LightboxMy, PhotoAlbumMy} from '@/common/ModdedComponents/ModdedComponents'

const ARM_BASE = '/assets/img/competitions/2017/Shrove_Tuesday/armwrestling'
const WRESTLE_BASE = '/assets/img/competitions/2017/Shrove_Tuesday/wrestling'

const armImages = Array.from({length: 4}, (_, i) => `${ARM_BASE}/${i + 1}.jpg`)
const wrestleImages = Array.from({length: 29}, (_, i) => `${WRESTLE_BASE}/${i + 1}.jpg`)

export const Maslenitsa2017Desc: React.FC = () => {
  const {t} = useTranslation('competitions')
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [index, setIndex] = useState(-1)
  const [index2, setIndex2] = useState(-1)

  const photos = getGalleryPhotosFromRequireFromArray(armImages)
  const slides = getSlides(photos)
  const photos2 = getGalleryPhotosFromRequireFromArray(wrestleImages)
  const slides2 = getSlides(photos2)

  return (
    <>
      <p>{t('maslenitsa-2017.intro')}</p>
      <ul>
        <li>{t('maslenitsa-2017.participantVardugina')}</li>
        <li>{t('maslenitsa-2017.participantVasileva')}</li>
        <li>{t('maslenitsa-2017.participantGrigorenko')}</li>
        <li>{t('maslenitsa-2017.participantPiven')}</li>
      </ul>
      <p>{t('maslenitsa-2017.clubNote')}</p>
      <p>{t('maslenitsa-2017.armwrestling')}</p>
      <Button variant="primary" onClick={() => setOpen(!open)}>
        {t('maslenitsa-2017.armPhotos')}
      </Button>
      <Collapse in={open}>
        <div>
          <PhotoAlbumMy photos={photos} openCallback={setIndex} layout="rows" />
          <LightboxMy slides={slides} index={index} closeCallback={setIndex} />
        </div>
      </Collapse>
      <p>{t('maslenitsa-2017.wrestling')}</p>
      <Button variant="primary" onClick={() => setOpen2(!open2)}>
        {t('maslenitsa-2017.wrestlePhotos')}
      </Button>
      <Collapse in={open2}>
        <div>
          <PhotoAlbumMy photos={photos2} openCallback={setIndex2} layout="rows" />
          <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2} />
        </div>
      </Collapse>
      <p>{t('maslenitsa-2017.closing')}</p>
    </>
  )
}
