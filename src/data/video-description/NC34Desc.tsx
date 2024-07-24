import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR34} from "@/common/constants/ImageContexts"

export const NC34Desc = () => {
  return (
    <>
      <p>
        This video features several competitive wrestling matches of <b>Tais</b> (5’7” / 133 lb) against two male
        opponents, <b>Villian</b> (5’7” / 173 lb) and <b>Alexander</b> (5’10” / 183 lb). Both men outweigh her by more
        than 40 pounds and possess superior physical strength. The rules are straightforward - victory is achieved by
        making the opponent submit.
      </p>
      <p>
        The video includes seven fights totaling 14 minutes of intense action filled with hard and strenuous struggles.
        Tais needed exceptional concentration and speed to withstand the attacks from these larger opponents. Each of
        her victories was hard-won, and each defeat drained her energy significantly.
      </p>
      <ButtonGallery images={DIR34}/>
    </>
  )
}