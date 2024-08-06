import React, {FC, ReactNode} from "react"
import FooterThree from "./footer/footer-3";
import HeaderThree from "./header/header-three";
import LayoutTwo from "@/layout/layout-2"
import {WithChildren} from "@/common/types"

interface Props {
  children: ReactNode;
}

const LayoutThree: FC<WithChildren> = ({ children }) => {
  return (
    <>
      <HeaderThree  />
      <main>{children}</main>
      <div className="content-layout-right">
        <FooterThree />
      </div>
    </>
  );
};

export default LayoutThree;
