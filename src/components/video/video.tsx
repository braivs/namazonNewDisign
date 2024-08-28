import FooterFour from "@/layout/footer/footer-4/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import VideoArea from "./video-area/video-area"
import BannerVideo from "@/components/video/banner-video"

const Video = () => {
  return (
    <>
      <HeaderTwo />
      <BannerVideo />
      <VideoArea />
      <FooterFour />
    </>
  );
};

export default Video;
