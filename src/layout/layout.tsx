import React, {FC} from "react"
import Footer from "./footer/footer";
import Header from "./header/header";
import {WithChildren} from "@/common/types"

const Layout: FC<WithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
