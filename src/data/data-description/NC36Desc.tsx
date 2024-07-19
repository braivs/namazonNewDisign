import Link from "next/link"
import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR36} from "@/common/constants/ImageContexts"

export const NC36Desc = ()  => {
  return (
    <>
      <p>
        In this competition, five fighters participated: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6
        lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb), and Victoria (70.7 kg / 155.9 lb). Rules:
        fights with submissions or pins counted to 10.
      </p>
      <p>
        All the girls except Victoria Vardugina, who has already wrestled once before at the Namazon Club, are
        beginners in submission grappling and are participating here for the first time.<br/>
        About half a year ago, in October 2013, Vika won a women&apos;s <Link href="/video/nc33">crossfit
        wrestling</Link> competition in our club by forcing the uncompromising wrestler Lidiya Oslopovskih
        to submit in the final fight. Vika is a physically strong young woman who not only learns how to wrestle
        but also competes successfully in college arm wrestling tournaments.
      </p>
      <p>
        Our competition today is notable for its typically FEMALE wrestling. The rules require the winner of a
        match to win at least 2 rounds out of 3. Each round has a 4-minute time limit.<br/>
        The video includes three matches, the first two consisting of two rounds each, and the last one
        (Vika vs Christina) going three rounds.
      </p>
      <ButtonGallery images={DIR36}/>
      <p>We recommend you watch this video (Video 36) if you like to see ambitious, athletic girls with
        beautiful bodies competing with each other in a hard-fought contest where everything is allowed:
        choking, pinning, and submission holds.</p>
    </>
  )
}

type Props = {
  id?: number
}