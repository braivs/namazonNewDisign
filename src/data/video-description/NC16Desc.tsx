import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR16} from "@/common/constants/ImageContexts"

export const NC16Desc = () => {
  return (
    <>
      <p>
        <b>Elena Vasilyeva (Gladiatriks)</b> (5'6" / 135 lb) specializes in submission grappling, MMA, judo, and arm
        wrestling. <b>Tais</b> (5'7" / 130 lb) also specializes in submission grappling and MMA. To win this
        competition, the girls needed not only physical strength and wrestling skill but also a lot of endurance.
        The fight consisted of 9 rounds, each with no time limit, lasting until there was a clear winner. Between each
        round, the fighters had only 1 minute to rest.
      </p>
      <p>Each round was fought hard and aggressively, with the girls giving all their strength to win the battle.</p>
      <p>
        Which of the girls was more exhausted? And who was the winner in the end? You can find out by purchasing our
        film.
      </p>
      <ButtonGallery images={DIR16}/>
    </>
  )
}