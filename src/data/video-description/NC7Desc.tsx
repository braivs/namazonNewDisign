import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR07} from "@/common/constants/ImageContexts"

export const NC7Desc = () => {
  return (
    <>
      <p><b>Alex</b> (5'7" / 150 lb) hadn’t forgotten the loss to <b>Tais</b> (5'7" / 128 lb) in their previous
        beach wrestling match (<b>Video 3</b>), and now, having a transit stay in St. Petersburg, he tried to
        take every opportunity for a rematch. With not enough time to go to the sports hall, it was decided to
        hold the rematch in the forest on the lake shore.<br/>
        A strong cold wind blew on the shore. Tais arrived wearing a red cap …
      </p>
      <p>
        Who eventually won the fight between the modern Little Red Cap and Gray Wolf? Watch our film and find
        out! If you enjoy sporting mixed wrestling, then this film is for you.
      </p>
      <ButtonGallery images={DIR07}/>
    </>
  )
}