import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR04} from "@/common/constants/ImageContexts"

export const NC4Desc = () => {
  return (
    <>
      <p>
        Participants in the tournament included: <b>Natalia Mysik</b> (5'11" / 154 lb), <b>Ksenia Voloshina</b> (5'3" /
        141 lb), and <b>Valentina Perfilyeva</b> (5'8" / 139 lb). A notable feature of the competition was the
        significant disparity in weight and height among the wrestlers.<br/>
        Natalia, being much heavier and taller than her opponents, frequently used this advantage to secure pinning
        holds, particularly School Girl Pins, which she would then easily convert into armlocks or chokes. One of these
        chokes even resulted in a knockout for her opponent.<br/>
        Additionally, outside of the tournament, there was a prize fight between Tais (5'7" / 132 lb) and Natalia Mysik.
      </p>
      <p>If you enjoy watching long pinning holds, head scissors, and chokes in women’s fights, you will love this
        film.</p>
      <ButtonGallery images={DIR04}/>
    </>
  )
}