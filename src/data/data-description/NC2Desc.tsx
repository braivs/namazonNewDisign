import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR02} from "@/common/ImageContexts"

export const NC2Desc = () => {
  return (
    <>
      <p>
        This is the continuation of movie 1, featuring all the matches from the second round.<br/>
        Here, you can witness another aggressive fight between two favorites: <b>Tais</b> (5'7" / 128 lb) and <b>Maria
        Rylyova</b> (5'7" / 126 lb). Particularly dramatic were the bouts involving <b>Nadezhda Akhmerova</b> (5'6"
        / 128 lb). In her match against Tais, Nadezhda was knocked down but managed to continue the fight.<br/>
        Against Maria, Nadezhda put up a fierce struggle, with the advantage shifting back and forth between the two
        competitors.
      </p>
      <p>If you want to witness these intense matches and find out the final results, watch the film!</p>
      <ButtonGallery images={DIR02}/>
    </>
  )
}