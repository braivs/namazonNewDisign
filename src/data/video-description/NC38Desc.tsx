import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR38} from "@/common/constants/ImageContexts"

export const NC38Desc = ()  => {
  return (
    <>
      <p>
        Here you can see another real wrestling fight between a man and woman. <b>Alexandr</b> (5'10" / 187 lb)
        is pretty big and very strong. <b>Tais</b> (5'7" / 137 lb) has difficulties applying her technique due
        to his size. However, she is strong and fast enough to efficiently use Alex's relative slowness.
      </p>
      <p>
        If you are a lover of real competitive mixed wrestling and enjoy aggressive and uncompromised struggle
        between a man and woman on a mat, then we recommend you to watch this video.
      </p>
      <ButtonGallery images={DIR38}/>
    </>
  )
}