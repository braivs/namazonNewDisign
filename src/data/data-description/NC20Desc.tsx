import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_NEVSKAYA_ARENA_1} from "@/common/constants/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

export const NC20Desc = () => {
  return (
    <>
      <p><b>Yulia Fedutenko</b> (5'8" / 130 lb) - from the mixed martial arts Club "Tibron" in St. Petersburg. <b>Kara
        Teller</b> (5'7" / 123 lb) - representing the Vityaz Club in Moscow. This bout took place at the "<b>First
        Nevsky Arena Tournament</b>". Both fighters are technically skilled, showcasing a blend of hard punches,
        kicks,
        and close-quarter power struggles.</p>
      <p>The match extends over three full rounds. Yulia demonstrates more confidence in stand-up fighting, while Kara
        focuses on ground techniques to secure victory.</p>
      <p>If you enjoy intense and uncompromising fights between athletic and charismatic women, this bout is sure to
        captivate you.</p>
      <ButtonGallery images={DIR_NEVSKAYA_ARENA_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
    </>
  )
}