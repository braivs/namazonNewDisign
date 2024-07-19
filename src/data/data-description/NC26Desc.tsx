import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR26} from "@/common/constants/ImageContexts"

export const NC26Desc = () => {
  return (
    <>
      <p>
        This video features a sand-wrestling contest between two ambitious women, <b>Tais</b> (5&quot;7&quot; / 130
        lb)
        and <b>Elena Vasilyeva</b> (5&quot;6&quot; / 134 lb). Tais, who has competed in various grappling and MMA
        tournaments, has more experience than her younger opponent. But Elena is not a pushover either.
      </p>
      <p>
        The two women fought nine rounds with submission grappling rules. It was an interesting and exciting
        wrestling match with many different pins, chokes, and submission holds. Both wrestlers struggled
        arduously for every single point. The weaker woman didn’t give up easily.
      </p>
      <ButtonGallery images={DIR26}/>
    </>
  )
}