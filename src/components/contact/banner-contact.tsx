import React from "react"

const BannerContact = () => {
  return (
    <>
      <section
        className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url("/assets/img/banner/breadcrumb-01.jpg")`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Contact us</h2>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BannerContact;
