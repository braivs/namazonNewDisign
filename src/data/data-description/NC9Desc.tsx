import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR09_1, DIR09_2, DIR09_3} from "@/common/constants/ImageContexts"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

export const NC8Desc = () => {
  return (
    <>
      <p>
        Three fighters participated in this tournament: <b>Elena Vasilyeva</b> (St. Petersburg, 5’6” / 132 lb),
        <b>Kara Teller</b>, a newcomer from Namazon Club (Moscow, 5’7” / 119 lb), and <b>Tais</b> (St. Petersburg,
        5’7” / 130 lb). The tournament was conducted in a single round format, with each fighter having two matches.
        Each match consisted of three 4-minute rounds with a 1-minute rest period between rounds.
      </p>
      <p>The fighters competed fiercely and uncompromisingly in all three matches.</p>
      <p>If you enjoy competitive fights involving strikes with arms and legs, as well as wrestling with armlocks and
        chokes, then you will definitely enjoy our film.</p>
      <h5><u>First fight:</u> Elena Vasilyeva vs Kara Teller</h5>
      <ButtonGallery images={DIR09_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      <h5><u>Second fight:</u> Kara Teller vs Tais</h5>
      <ButtonGallery images={DIR09_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      <h5><u>Third fight:</u> Elena Vasilyeva vs Tais</h5>
      <ButtonGallery images={DIR09_3} buttonName={COMPETITIONS_BUTTON_TEXT}/>
    </>
  )
}