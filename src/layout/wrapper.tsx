import ScrollToTop from "hooks/scroll-to-top";
import React, {FC, useEffect} from "react"
import {WithChildren} from "@/common/types"

const Wrapper: FC<WithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
