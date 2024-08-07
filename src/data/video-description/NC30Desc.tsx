import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR30} from "@/common/constants/ImageContexts"

export const NC30Desc = () => {
  return (
    <>
      <p>
        This is the fourth video in the series titled "Mixed wrestling - the best fights". It showcases a
        four-and-a-half-minute submission match between two long-time rivals: Tais (5'7" / 135 lb) and Villian (5'8" /
        177 lb). These fighters are intimately familiar with each other and are nearly evenly matched. The video
        features three rounds of intense, aggressive, and highly competitive wrestling on a mat, with momentum swinging
        back and forth between the man and the woman in each round.
      </p>
      <p>The winner is determined at the very end of the match. Watch the video to discover who emerges victorious!</p>
      <ButtonGallery images={DIR30}/>
    </>
  )
}