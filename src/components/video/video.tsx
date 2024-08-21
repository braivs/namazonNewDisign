import FooterFour from "@/layout/footer/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import VideoArea from "./video-area/video-area"
import Banner from "@/components/video/banner"

const Video = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <VideoArea />
      <FooterFour />
    </>
  );
};

export default Video;
