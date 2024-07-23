import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR14_1, DIR14_2} from "@/common/constants/ImageContexts"

export const NC14Desc = () => {
  return (
    <>
      <p>
        This video features a short improvised mixed wrestling tournament held on one of the beaches of St. Petersburg.
        The men were represented by <b>Alex</b> (5’9” / 154 lb) and <b>Villian</b> (5'8” / 177 lb). The female fighter
        was <b>Tais</b> (5’7” / 130 lb), the strongest girl of the Namazon Club. The competition was organized in two
        rounds.<br/>
        In the 1st part of the video series, you will see two short male and four mixed fights.
      </p>
      <p>
        If you like sporting mixed wrestling (in a submission grappling style) on a beach, then you will love our film.
        Purchase it if you want to see mixed fights with a strong and skilled female wrestler!
      </p>
      <h5>Tais vs Alex</h5>
      <ButtonGallery images={DIR14_1}/>
      <h5>Tais vs Villian</h5>
      <ButtonGallery images={DIR14_2}/>
    </>
  )
}

// todo: in this file should be second video. Or maybe combine videos.