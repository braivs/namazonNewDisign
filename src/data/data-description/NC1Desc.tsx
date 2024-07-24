import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR01} from "@/common/constants/ImageContexts"

export const NC1Desc = () => {
  return (
    <>
      <p>
        In this tournament participated three fighters: <b>Tais</b> (5'7" / 128 lb), <b>Maria Rylyova</b> (5'7"
        / 126 lb) and <b>Nadezhda Akhmerova</b> (5'6" / 128 lb). Tais has already won such competitions several
        times. Maria has lately improved her skill level significantly, and you could expect that she would have
        a chance to become a winner. Nadezhda is specialized in Kickboxing and ММА. This was her first
        Submission Grappling tournament.
      </p>
      <p>The tournament was held in two rounds. As it was expected, the main struggle in the first round was
        between Tais and Maria. The two girls showed very tough and uncompromising wrestling. This video
        features all the three matches of the first round.</p>
      <ButtonGallery images={DIR01}/>
    </>
  )
}