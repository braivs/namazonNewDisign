import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR29} from "@/common/constants/ImageContexts"

export const NC29Desc = () => {
  return (
    <>
      <p>
        <b>Elena</b> (5&quot;7&quot; / 157 lb) is a strong and ambitious young woman. She had
        fought <b>Tais</b> (5&quot;7&quot; / 130 lb)
        many times two years ago, but then she disappeared from the Club. Now she’s back, stronger, heavier, more
        skillful, and confident than ever.
      </p>
      <p>Right from the start, it’s clear that Elena intends to give her experienced rival a real fight. Despite Tais
        being very strong, she immediately finds herself in trouble against the aggressive Elena. After 15 intense
        minutes of wrestling, she is forced to admit defeat. This marks the first time Tais has lost a competitive
        submission match to Elena.</p>
      <p>If you’re curious to see how it all unfolded, watch this video.</p>
      <ButtonGallery images={DIR29}/>
    </>
  )
}