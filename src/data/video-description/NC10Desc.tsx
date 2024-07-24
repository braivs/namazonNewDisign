import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR10} from "@/common/constants/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

export const NC10Desc = () => {
  return (
    <>
      <p>We are starting a new series titled "Mixed wrestling - the best fights". In the first part of our film,
        two guys confront <b>Tais</b> (5'7" / 128 lb). One of them - <b>Pasha</b> (5'9" / 143 lb) - is relatively light
        and fast, while the other - <b>Villian</b> (5'8" / 177 lb) - is heavier compared to Tais and slower. We have
        selected what we believe are the most interesting fights of Pasha and Villian against Tais, both on a mat and a
        beach.</p>
      <p>If you want to watch highly competitive mixed wrestling matches fought in a submission grappling style, then
        watch our film.</p>
      <ButtonGallery images={DIR10} buttonName={COMPETITIONS_BUTTON_TEXT}/>
    </>
  )
}