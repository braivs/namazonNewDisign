import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR08_1, DIR08_2, DIR08_3} from "@/common/constants/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

export const NC8Desc = () => {
  return (
    <>
      <p>
        Two new competitors - <b>Elena Vasilyeva</b> (5'6" / 135 lb) and <b>Irina (Vlasta)</b> (5’9’’ / 154 lb) -
        participated in the beach wrestling tournament alongside <b>Tais</b> (5’7” / 130 lb). Elena specializes in
        submission grappling, judo, and arm wrestling, while Irina specializes in submission grappling, muay thai, and
        pole dancing.<br/>
        The tournament was held in two rounds with no time limits. The struggle for the 2nd place between the newcomers
        was especially tough and intense. Young and skilled Elena fought bravely against the older Irina.
      </p>
      <p>If you enjoy female wrestling not only indoors, but also under the open sky, this film is perfect for you.</p>
      <h5>Elena Vasilyeva vs Tais</h5>
      <ButtonGallery images={DIR08_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      <h5>Irina (Vlasta) vs Tais</h5>
      <ButtonGallery images={DIR08_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      <h5>Elena Vasilyeva vs Irina (Vlasta)</h5>
      <ButtonGallery images={DIR08_3} buttonName={COMPETITIONS_BUTTON_TEXT}/>
    </>
  )
}