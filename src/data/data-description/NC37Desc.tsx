import Link from "next/link"
import {Row} from "react-bootstrap"
import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR37} from "@/common/ImageContexts"

export const NC37Desc = ({id}: Props)  => {
  return (
    <>
      <p>Weight class: 145 to 160 lb. May, 2014</p>
      <p>
        This video is a continuation of the Video 36 that featured the preliminary fights (see its
        description <Link href="/video/nc36">HERE</Link>). Now here you can see two final fights in
        which the loser and the winner of the tournament
        were determined.
      </p>
      <Row>
      </Row>
      <p>In one of them, Nina and Irina fought with each other for the IV place (for not becoming the outsider),
        and in the other Daria and Victoria decided between themselves who was the best wrestler of the
        competition. The fight Nina vs Irina went fast and ended pretty soon – one of the girls defeated the
        other twice by applying submission holds.</p>
      <p>The final fight was much longer and more strenuous. Suffice it to say that in the first round neither
        wrestler was able to gain a victory within the 4 min of time limit.</p>
      <ButtonGallery images={DIR37}/>
      <p>We recommend this video for those of you who like real female wrestling and young sexy-looking girls with
        competitive spirit. You will find it especially entertaining if you are interested to see a fight in
        which one of the two girls grappling on the mat continuously struggles to pin her opponent down and
        finally succeeds after long hard attempts.</p>
    </>
  )
}

type Props = {
  id?: number
}