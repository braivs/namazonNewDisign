import React from "react";
import {useAppDispatch} from "@/shared/hooks/useAppDispatch"
import {videoActions} from "@/data/video-data/video-data.slice"

const BannerVideo = () => {
  const dispatch = useAppDispatch()

  const onAll = () => dispatch(videoActions.allVideos())
  const onWrestling = () => dispatch(videoActions.filterVideos('SUBMISSION WRESTLING'))
  const onMMA = () => dispatch(videoActions.filterVideos('MMA'))
  const onMixedWrestling = () => dispatch(videoActions.filterVideos('MIXED WRESTLING'))

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
            <div className="col-lg-6 col-md-6 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Video : </h2>
                <div className="tp-breadcrumb__element" onClick={onAll}>ALL</div>
                <div className="tp-breadcrumb__element" onClick={onWrestling}>Wrestling</div>
                <div className="tp-breadcrumb__element" onClick={onMMA}>MMA</div>
                <div className="tp-breadcrumb__element" onClick={onMixedWrestling}>Mixed wresting</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerVideo;
