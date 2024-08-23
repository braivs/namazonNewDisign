import FooterFour from "@/layout/footer/footer-4"
import HeaderTwo from "@/layout/header/header-two"
import React from "react"
import ElementDetailsArea from "./element-details-area"
import {WithChildren} from "@/shared/assets/types/types"

export default function ElementDetails ({children}: WithChildren) {
  return (
    <>
      <HeaderTwo />
      {/*<BannerVideo />*/} {/*todo: uncommit later*/}
      <ElementDetailsArea>{children}</ElementDetailsArea>
      <FooterFour />
    </>
  );
};

