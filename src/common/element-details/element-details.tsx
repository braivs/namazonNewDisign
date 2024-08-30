import FooterFour from "@/layout/footer/footer-4/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import ElementDetailsArea from "./element-details-area"
import {WithChildren} from "@/shared/assets/types/types"
import BannerVideo from "@/components/video/banner-video"
import {BannerElement} from "@/common/element-details/banner-element"
import sC from '@/common/styles.module.scss'

export default function ElementDetails ({children}: WithChildren) {
  return (
    <>
      <HeaderTwo />
      <BannerElement />
      <ElementDetailsArea>{children}</ElementDetailsArea>
      <FooterFour />
    </>
  );
};

