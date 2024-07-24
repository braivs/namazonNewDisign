import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_NEVSKAYA_ARENA_2} from "@/common/constants/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

export const NC21Desc = () => {
  return (
    <>
      <p>This is the second MMA fight at the <b>"First Nevsky Arena Tournament"</b>. <b>Darya Balina</b> (5'4" /
        124 lb) and <b>Olga</b> (5'7" / 139 lb) are young participants who don't yet have enough experience in
        MMA fights, but that doesn't diminish the interest or entertainment value of their bout; their punches are
        strong, and the struggle is tough.
      </p>
      <p>The fighters engage in three full rounds, with neither willing to concede defeat.</p>
      <p>
        If you prefer fights with minimal striking, this match may not fully satisfy you. However, if you appreciate
        genuine, intense, and uncompromising MMA bouts, this fight will surely captivate you.
      </p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
    </>
  )
}