import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR13} from "@/common/constants/ImageContexts"

export const NC13Desc = () => {
  return (
    <>
      <p>In this video, you will witness two kickboxing matches where low kicks are allowed. <b>Valentina
        Perfilyeva</b> (5'8" / 132 lb) specializes in karate (kumite), while <b>Nadezhda Akhmerova</b> (5'6"
        / 128 lb) practices kickboxing.</p>
      <p>Both fights were intense and uncompromising, featuring aggressive exchanges of kicks and punches, with many
        strikes landing accurately and powerfully.</p>
      <p>If kickboxing is your passion, this film is likely to captivate you. Watch it to find out who emerged
        victorious.</p>
      <ButtonGallery images={DIR13}/>
    </>
  )
}