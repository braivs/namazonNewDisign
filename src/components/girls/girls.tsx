import FooterFour from "@/layout/footer/footer-4/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import GirlsArea from "./girls-area/girls-area"
import BannerGirls from "@/components/girls/banner-girls"

const Girls = () => {
  return (
    <>
      <HeaderTwo />
      <BannerGirls />
      <GirlsArea />
      <FooterFour />
    </>
  );
};

export default Girls;
