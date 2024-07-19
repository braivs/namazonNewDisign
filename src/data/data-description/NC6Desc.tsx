import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR06} from "@/common/ImageContexts"

export const NC6Desc = () => {
  return (
    <>
      <p>
        <b>Tais</b> (5’7” / 128 lb) is a multiple winner of Submission Grappling competitions organized by our
        club. <b>Maria
        Rylyova</b> (5’8” / 126 lb) is the winner of the Namazon Club Championship in Submission Grappling in 2010 and
        a
        master of sports in armwrestling.<br/>
        The competition started with an arm wrestling contest using both arms (lying on the floor), which ended in a
        draw. They then continued their rivalry on the wrestling mat, engaging in several rounds of submission
        grappling.
      </p>
      <p>If you enjoy watching skillful wrestling between women who are evenly matched, you will love this film.</p>
      <ButtonGallery images={DIR06}/>
    </>
  )
}