import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR08_1, DIR08_2, DIR08_3} from "@/common/constants/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

export const NC8Desc = () => {
  return (
    <>
      <p>
        This film documents the Submission Grappling tournament held in April 2010, featuring <b>Natalia
        Mysik</b> (5'11" / 154 lb), <b>Maria Rylyova</b> (5'8" / 126 lb), and <b>Valentina Perfilyeva</b> (5'8" / 132
        lb). The
        wrestlers competed across different weight categories, essentially making it a club competition based on total
        weight.
        Natalia, being the heaviest wrestler, was a favorite in the tournament, while Maria was favored for her
        exceptional skill. Maria and Valentina engaged in a closely contested match, showcasing their comparable
        abilities. Natalia demonstrated her superiority over Valentina in their bouts.
      </p>
      <p>If you enjoy female wrestling not only indoors, but also under the open sky, this film is perfect for
        you.</p>
      <h5>Elena Vasilyeva vs Tais</h5>
      <ButtonGallery images={DIR08_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      <h5>Irina (Vlasta) vs Tais</h5>
      <ButtonGallery images={DIR08_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      <h5>Elena Vasilyeva vs Irina (Vlasta)</h5>
      <ButtonGallery images={DIR08_3} buttonName={COMPETITIONS_BUTTON_TEXT}/>
    </>
  )
}