import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR12} from "@/common/ImageContexts"

export const NC12Desc = () => {
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
      <p>However, to find out how the fights between our favorites ended, who won, and how, you will need to watch our
        film.</p>
      <ButtonGallery images={DIR12}/>
    </>
  )
}