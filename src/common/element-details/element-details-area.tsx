import React from "react"
import {WithChildren} from "@/shared/assets/types/types"

export default function ElementDetailsArea ({children}: WithChildren) {
  return (
    <>
      <section className="shop-area pt-70 pb-70">
        <div className="container">
          {children}
        </div>
      </section>
    </>
  );
};

