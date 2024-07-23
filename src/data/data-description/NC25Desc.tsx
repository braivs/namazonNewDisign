import React from "react"
import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {DIR25_VILLIAN_ELENA, DIR25_VILLIAN_LYUDMILA} from "@/common/constants/ImageContexts"

export const NC25Desc = () => {
  return (
    <>
      <p>
        This is the second video of the series titled "<b>Mixed wrestling - the best fights</b>". Here you can
        see <b>Villian</b> (5'7" / 177 lb) wrestle three strong female fighters: <b>Tais</b> (5'7" / 130
        lb), <b>Elena Vasilyeva</b> (5'6" / 135 lb), and <b>Lyudmila</b> (5'11" / 154 lb).<br/>
        Each of these ladies presents a unique challenge: tall blonde Lyudmila, a newcomer in competitions, is engaged
        in Muay Thai; strong and ambitious Elena competes successfully in arm wrestling, submission grappling, and MMA;
        and Tais, the strongest and most experienced fighter among them.
      </p>
      <p>This video features five submission grappling fights (Tais and Elena wrestled Villian twice). The fights
        take place both in a gym on a mat and outdoors on a sandy beach and on grass. If you like mixed
        wrestling, then don’t miss this video.</p>
      <p>If you enjoy mixed wrestling, then this video is a must-watch.</p>
      <h5>Villian vs Elena Vasilyeva</h5>
      <ButtonGallery images={DIR25_VILLIAN_ELENA}/>
      <h5>Villian vs Lyudmila</h5>
      <ButtonGallery images={DIR25_VILLIAN_LYUDMILA}/>
    </>
  )
}