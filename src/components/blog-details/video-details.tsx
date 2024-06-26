import FooterFour from "@/layout/footer/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import Banner from "./banner"
import {WithChildren} from "@/shared/assets/types/types"
import VideoBoxDetails from "@/components/blog-details/video-box-details"

export default function VideoDetails({children}: WithChildren) {
  return (
    <>
      <HeaderTwo/>
      <Banner/>
      <VideoBoxDetails>{children}</VideoBoxDetails>
      <FooterFour/>
    </>
  )
}
