import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR32} from "@/common/constants/ImageContexts"

export const NC32Desc = () => {
  return (
    <>
      <p>
        This unique wrestling match took place during Tais's (5'7" / 135 lb) summer vacation in the south of Ukraine in
        2013. Her opponent, <b>Artem</b> (5'11" / 177 lb), had prior experience in competitive wrestling against women,
        including bouts with the well-known bodybuilder <b>Izida</b> early in his career.
      </p>
      <p>
        Despite not being exceptionally strong, Artem was ambitious and challenged Tais to this "duel" to prove to both
        her and himself that he could compete. The match took place in the woods near the banks of the Dnieper River,
        with sunny weather adding to the excitement of the physical contest under the open sky. The picturesque natural
        setting highlighted the unusualness of the event - a competitive fight between a man and a woman.
      </p>
      <p>If you enjoy this type of wrestling and are curious to see who emerged victorious, watch this video!</p>
      <ButtonGallery images={DIR32}/>
    </>
  )
}