import FooterFour from "@/layout/footer/footer-4/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import ElementDetailsArea from "./element-details-area"
import {WithChildren} from "@/shared/assets/types/types"
import {BannerVideoElement} from "@/components/video/banner-video-element"
import {BannerGirlElement} from "@/components/girls/banner-girl-element"

export default function ElementDetails ({children, variant}: Props) {
  return (
    <>
      <HeaderTwo />
      {variant === 'video' && <BannerVideoElement />}
      {variant === 'girl' && <BannerGirlElement />}
      <ElementDetailsArea>{children}</ElementDetailsArea>
      <FooterFour />
    </>
  );
};

type Props = WithChildren & {
  variant: 'video' | 'girl'
}

