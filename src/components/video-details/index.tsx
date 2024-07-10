import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import VideoDetailsArea from "./video-details-area";
import {WithChildren} from "@/shared/assets/types/types"

export default function VideoDetails ({children}: WithChildren) {
  return (
    <>
      <HeaderTwo />
      {/*<Banner />*/}
      <VideoDetailsArea>{children}</VideoDetailsArea>
      <FooterFour />
    </>
  );
};

