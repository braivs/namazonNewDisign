import React from "react"
import {videoActions} from "@/data/video-data/video-data.slice"
import {useAppDispatch} from "@/shared/hooks/useAppDispatch"

const BannerGirls = () => {
  const dispatch = useAppDispatch()
  
  const onAll = () => dispatch(videoActions.allVideos())
  const onWrestling = () => dispatch(videoActions.filterVideos('SUBMISSION WRESTLING'))
  const onMMA = () => dispatch(videoActions.filterVideos('MMA'))

  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Girls :</h2>
                <div className="tp-breadcrumb__element" onClick={onAll}>ALL</div>
                <div className="tp-breadcrumb__element" onClick={onWrestling}>2010-2011</div>
                <div className="tp-breadcrumb__element" onClick={onMMA}>2012 - 2013</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerGirls;
