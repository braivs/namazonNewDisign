import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR24} from "@/common/constants/ImageContexts"

export const NC24Desc = () => {
  return (
    <>
      <p>
        <b>Lyudmila</b> (5’11” / 154 lb) is a strong sportswoman engaged in Muay Thai, but she is a newcomer in our
        Club’s competitions, while <b>Tais</b> (5’7” / 130 lb) is a repeat winner in the competitions, specializing in
        Submission Grappling and MMA.
      </p>
      <p>As you can see, Lyudmila is much heavier and taller than Tais. In this match, the girls wrestled three rounds.
        Lyudmila managed to place Tais in a very difficult position at the beginning of the first round.</p>
      <p>
        Watch the video to see what followed and how it all ended. If you like real mat wrestling between some of the
        fittest and most beautiful women, then this video is for you.
      </p>
      <ButtonGallery images={DIR24}/>
    </>
  )
}