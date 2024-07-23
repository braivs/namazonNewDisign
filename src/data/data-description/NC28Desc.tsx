import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR28_TAIS_ALEXANDER, DIR28_TAIS_VILLIAN} from "@/common/constants/ImageContexts"

export const NC28Desc = () => {
  return (
    <>
      <p>
        This is the third video of the series titled "<b>Mixed wrestling - the best fights</b>". Here you can
        see two separate wrestling matches featuring <b>Tais</b> (5'7" / 132 lb) against two male
        opponents: <b>Villian</b> (5'8" / 177 lb) and <b>Alexander</b> (5’10’’ / 205 lb). Despite Tais's strength
        and experience, she faced challenging opponents, particularly against the significantly heavier Alexander,
        who outweighed her by 73 lb.
      </p>
      <p>To discover the outcomes of these tough matches, watch this video.</p>
      <h5>Tais vs Alexander</h5>
      <ButtonGallery images={DIR28_TAIS_ALEXANDER}/>
      <h5>Tais vs Villian</h5>
      <ButtonGallery images={DIR28_TAIS_VILLIAN}/>
    </>
  )
}