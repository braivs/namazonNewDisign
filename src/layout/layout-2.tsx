import React, {ReactNode} from "react"
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";
import {FC} from "react"
import {WithChildren} from "@/common/types"

const LayoutTwo: FC<WithChildren> = ({ children }) => {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      <FooterTwo />
    </>
  );
};

export default LayoutTwo;
