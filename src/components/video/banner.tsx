import React from "react";

const Banner = () => {

  const onAll = () => {
    alert('all')
  }

  const onWrestling = () => {
    alert('wrestling')
  }

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
                <div className="tp-breadcrumb__element">MMA</div>
                <div className="tp-breadcrumb__element">Mixed wresting</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
