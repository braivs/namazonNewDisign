import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR27} from "@/common/constants/ImageContexts"

export const NC27Desc = () => {
  return (
    <>
      <p>
        This is a continuation of the multi-round sand-wrestling contest between <b>Tais</b> (5&quot;7&quot; / 130 lb)
        and <b>Elena
        Vasilyeva</b> (5&quot;6&quot; / 135 lb). The first nine rounds of this exciting match were featured in our
        Video 26
        (scroll down to see the initial description). In Part 2, you can see eight more rounds fought with the same
        rules as in Part 1.
      </p>
      <p>Although both women are very ambitious, they are not quite equal in experience and skill. One of them is
        still
        using nice wrestling combinations, applying effective choking and submission holds, while the other is just
        struggling heavily, showing her fighting spirit and refusing to give up.</p>
      <p>If you enjoy watching strong, skilled, and athletic women in real wrestling, then we recommend you purchase
        this video.</p>
      <ButtonGallery images={DIR27}/>
    </>
  )
}