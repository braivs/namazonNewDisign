import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR22} from "@/common/constants/ImageContexts"

export const NC22Desc = () => {
  return (
    <>
      <p>
        In these wrestling matches, <b>Villian</b> (5’8” / 177 lb) takes on two experienced women (though not
        both at once but one after the other). <b>Irina</b> (5’9” / 154 lb) is a strong woman who has been
        engaged in Muay Thai and pole dancing. <b>Elena</b> (5’6” / 135 lb), the youngest one of the three
        participants, is a talented and very ambitious fighter with good performances in arm wrestling, submission
        grappling, and MMA competitions.
      </p>
      <p>If you like mixed wrestling and want to enjoy competitive matches fought in a submission grappling style, then
        this video is for you.</p>
      <ButtonGallery images={DIR22}/>
    </>
  )
}