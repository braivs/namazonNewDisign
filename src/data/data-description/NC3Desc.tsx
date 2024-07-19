import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR03_3} from "@/common/constants/ImageContexts"

export const NC3Desc = ({id}: Desk) => {
  return (
    <>
      <p>
        Female wrestlers from Namazon participated in the tournament: <b>Tais</b> (5’7” / 132 lb) and <b>Natalia
        Mysik</b> (5’11” / 154 lb). Their male opponent was Alex (5’9” / 150 lb). Specifically, the three fights
        between
        Natalia and Tais from <b>VIDEO {id}</b> are featured in the <b>WRESTLING</b> section of the website,
        showcasing <b>FEMALE WRESTLING</b> matches.
      </p>
      <p>These matches followed <b>SUBMISSION</b> only rules with no specified time limits. This time, Tais wrestled
        against a woman who was not only heavier but also physically stronger. The struggle was intense! Both women
        fought aggressively, vying for advantageous positions and attempting effective pins or submission holds.
        Particularly dramatic were the first two matches, which took place mainly on wet sand, with momentum shifting
        back and forth.</p>
      <ButtonGallery images={DIR03_3}/>
    </>
  )
}