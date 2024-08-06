import ScrollToTop from "hooks/scroll-to-top";
import React, {FC, useEffect} from "react"
import { animationCreate } from "utils/utils";
import {WithChildren} from "@/common/types"

const Wrapper: FC<WithChildren> = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  );
};

export default Wrapper;
