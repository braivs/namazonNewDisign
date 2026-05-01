import React, {useState} from 'react'
import {Button} from 'react-bootstrap'
import {Collapse} from '@mui/material'
import {getGalleryPhotosFromRequireFromArray, getSlides} from '@/common/helpers'
import {LightboxMy, PhotoAlbumMy} from '@/common/ModdedComponents/ModdedComponents'

const ARM_BASE = '/assets/img/competitions/2016/Shrove_Tuesday/armwrestling'
const WRESTLE_BASE = '/assets/img/competitions/2016/Shrove_Tuesday/wrestling'

const armImages = Array.from({length: 13}, (_, i) => `${ARM_BASE}/${i + 1}.jpg`)
const wrestleImages = Array.from({length: 38}, (_, i) => `${WRESTLE_BASE}/${i + 1}.jpg`)

export const Maslenitsa2016Desc: React.FC = () => {
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
      <p>
        The female power competition for this year&apos;s Maslenitsa Festival took place at Namazon Club on Thursday,
        March 10th. The event featured three categories: arm wrestling, leg wrestling, and pins-and-submissions wrestling,
        where a wrestler could win by either submission or pin. There were three participants, all competing in the same
        weight category - up to 60 kg:
      </p>
      <ul>
        <li>
          Viktoria Vardugina - a well-known arm wrestler with numerous victories in combative sports competitions at
          Namazon Club;
        </li>
        <li>Viktoria Smorodina - an ambitious fighter specializing in Wushu, boxing, and powerlifting;</li>
        <li>Oxana Grigorenko - the representative of Namazon Club.</li>
      </ul>
      <p>
        Viktoria Vardugina emerged as the winner in the arm wrestling category, confidently defeating both opponents in
        left and right-hand matches.
      </p>
      <Button variant="primary" onClick={() => setOpen(!open)}>
        Arm wrestling photos
      </Button>
      <Collapse in={open}>
        <div>
          <PhotoAlbumMy photos={photos} openCallback={setIndex} layout="rows" />
          <LightboxMy slides={slides} index={index} closeCallback={setIndex} />
        </div>
      </Collapse>
      <p>In the leg-wrestling contest, Viktoria Vardugina and Oxana Grigorenko shared 1st and 2nd places.</p>
      <p>
        The pins-and-submission matches were the most thrilling part of the competition. Each participant wrestled against
        each other, with victories achieved by holding an opponent in a pin for a count of 7 or forcing her into
        submission. The time limit for each match was 5 minutes. Oxana Grigorenko was the absolute winner of this
        category. Viktoria Smorodina, who proved to be a strong competitor, secured 2nd place.
      </p>
      <Button variant="primary" onClick={() => setOpen2(!open2)}>
        Wrestling photos
      </Button>
      <Collapse in={open2}>
        <div>
          <PhotoAlbumMy photos={photos2} openCallback={setIndex2} layout="rows" />
          <LightboxMy slides={slides2} index={index2} closeCallback={setIndex2} />
        </div>
      </Collapse>
      <p>
        Overall, it was an interesting sporting event. Despite the small number of participants, their high fitness and
        wrestling skills made up for it.
      </p>
    </>
  )
}
