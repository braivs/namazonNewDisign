import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR40} from "@/common/constants/ImageContexts"
import Link from "next/link"

export const NC40Desc = ()  => {
  return (
    <>
      <p>
        <b>This video</b> is the continuation of <Link href="/video/nc39">VIDEO 39</Link>. Here you
        can see six more wrestling fights between <b>Villian</b> (180 lb) and <b>Tais</b> (136 lb), which took place in
        2014. The two competitors knew each other very well, having wrestled each other many times over the years,
        resulting in always aggressive and competitive fights.
      </p>
      <p>
        It's noteworthy that although their fights are generally evenly matched, Tais maintains a certain advantage over
        Villian. She adeptly utilizes her legs to control her opponents, a skill Villian lacks expertise in.
        Additionally, Villian's legs are more susceptible to submission holds when on the ground.<br/>
        If you're a fan of competitive wrestling between a man and woman, then this <b>VIDEO</b> is for you!
      </p>
      <ButtonGallery images={DIR40}/>
    </>
  )
}

// todo: check link