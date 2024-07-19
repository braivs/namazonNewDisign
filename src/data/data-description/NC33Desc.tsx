import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR_LIDA_VIKA, DIR_TAIS_YULIA} from "@/common/ImageContexts"

export const NC33Desc = () => {
  return (
    <>
      <p>
        This video features two submission grappling matches held as the final part of a Crossfit tournament organized
        by the St. Petersburg Athletic Center in cooperation with the Namazon Club.<br/>
        The matches were to determine winners in two weight categories: up to 70 kg / 155 lb between <b>Lidia
        Oslopovskih</b> (53 kg / 117 lb) and <b>Victoria Vardugina</b> (69 kg / 152 lb), and in the absolute category
        between <b>Yulia Borovik</b> (91 kg / 201 lb) and <b>Tais</b> (61 kg / 135 lb).
      </p>
      <p>
        Despite significant weight differences between the opponents in each pair, their struggle on the mat was
        strenuous, entertaining, and exciting. The girls fought hard and bravely to win this last decisive part of the
        tournament.
      </p>
      <h5>Lidia Oslopovskih vs Victoria Vardugina</h5>
      <ButtonGallery images={DIR_LIDA_VIKA}/>
      <h5>Yulia Borovik vs Tais</h5>
      <ButtonGallery images={DIR_TAIS_YULIA}/>
    </>
  )
}