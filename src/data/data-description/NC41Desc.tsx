import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR41_KZ, DIR41_VZ} from "@/common/ImageContexts"

export const NC41Desc = ({id}: Props)  => {
  return (
    <>
      <p>Our HD video featuring the submission grappling mini-tournament that was held on October 13, 2014, has been
        divided into two parts: <b>VIDEO 41</b> and <b>VIDEO 42</b>. The first part includes four fights featuring <b>Zoya
          Dorofeeva</b> (56 kg / 123.5 lb), who is a newcomer to our competitions.</p>
      <p>Prior to this event, Zoya participated in Russian hand-to-hand fighting. Here, her opponents were two
        competitors who previously faced off in the May 2014 Grappling tournament for beginners – <b>Christina
          Shvets</b> (68.9 kg / 151.9 lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). The rules remained
        the same – pins-and-submissions, requiring a wrestler to either force her opponent to submit or hold her
        in a pin for a count of five to win an individual fight.
        Zoya proved to be a brave and resilient fighter. Despite being outweighed by her opponents, she
        fought tenaciously, avoiding submissions.</p>
      <p>In the first fight between Zoya and Christina, neither the 4 minutes of regular time nor the 2 extra minutes
        produced a winner. Only in their second encounter did Christina manage to secure a pinfall victory after a
        hard-fought struggle.</p>
      <h5>Christina Shvets vs Zoya Dorofeeva</h5>
      <ButtonGallery images={DIR41_KZ}/>
      <p>Victoria proved to be an even more formidable opponent for Zoya, defeating her twice with chokeholds. Despite
        this, Zoya had several opportunities to defeat Victoria in both their first and second fights. Unfortunately,
        due to her lack of experience in such competitions, she was unable to capitalize on those chances.</p>
      <h5>Victoria Vardugina vs Zoya Dorofeeva</h5>
      <ButtonGallery images={DIR41_VZ}/>
    </>
  )
}

type Props = {
  id?: number
}