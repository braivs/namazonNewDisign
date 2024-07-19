import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR04} from "@/common/constants/ImageContexts"

export const NC5Desc = () => {
  return (
    <>
      <p>This film features a completely new wrestling encounter between <b>Villian</b> and <b>Tais</b>, spanning 9
        rounds of long and arduous wrestling, presented in HD quality with an optimized file size! <b>Villian</b>
        (5'8" / 177 lb) is a friend of our club and a constant sparring partner of our girls. <b>Tais</b> (5'7" / 132
        lb) is the strongest girl at the Namazon Club.</p>
      <p>
        This is the first video of our NEW SERIES of mixed matches. We showcase only real mixed wrestling, no
        compromises. It's a battle of the sexes to victory!
      </p>
      <ButtonGallery images={DIR04}/>

    </>
  )
}

//todo: there is second chapter there nc05b, need to combine it with with this. Join videos and etc...