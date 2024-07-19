import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR24} from "@/common/constants/ImageContexts"

export const NC24Desc = () => {
  return (
    <>
      <p>
        <b>Irina</b> (5’9” / 154 lb) is a strong young athlete engaged in Muay Thai and pole dancing, but she is still
        a
        newcomer in her wrestling matches in the Namazon Club’s tournaments. <b>Tais</b> (5’7” / 130 lb) is a
        well-known, strong, and skilled lady who specializes in Submission Grappling and MMA.
      </p>
      <p>In this competitive match, Irina, using her height and weight advantage, tried to force her experienced
        opponent into a hard body-to-body fight. You will see what came out of it if you watch our video.</p>
      <p>
        If you like real female wrestling and want to see two trained women struggling hard against each other in a
        competitive ground fight, then this video is just for you.
      </p>
      <ButtonGallery images={DIR24}/>
    </>
  )
}