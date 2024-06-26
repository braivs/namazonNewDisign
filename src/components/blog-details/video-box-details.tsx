import React from "react"
import {WithChildren} from "@/shared/assets/types/types"

export default function VideoBoxDetails({children}: WithChildren) {
  return (
    <>
      <div
        className="postbox__area pt-130 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-20">
              {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};



