import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR31_2} from "@/common/constants/ImageContexts"

export const NC31_2Desc = () => {
  return (
    <>
      <p>
        This is the second part of the fifth video in the series titled <b>«Mixed wrestling - the best fights»</b>. It
        features four intense bouts between <b>Tais</b> (5'7" / 135 lb) and <b>Villian</b> (5'8" / 177 lb). Refer to the
        description of Part 5.1 for more details.
      </p>
      <p>
        Our mixed wrestling contests are always purely competitive (not semi-competitive!) and showcase high-standard
        wrestling performances. On the mat, there are only fighters, regardless of gender.
      </p>
      <p>To discover the outcomes of these matches (including who scored the most submissions and emerged victorious),
        watch the video.</p>
      <ButtonGallery images={DIR31_2}/>
    </>
  )
}