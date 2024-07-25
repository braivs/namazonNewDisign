import girls_data from "@/data/girls-data";
import Link from "next/link";
import React from "react";

const GirlsArea = () => {
  return (
    <>
      <section className="team-area pt-125 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                  Participants of competitions
                </span>
                <h3 className="tp-section__title mb-70">2012 - 2013</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {girls_data.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="team-item mb-35 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div className="team-item__thumb mb-40">
                    <img src={item.img} alt="team-thumb" />
                  </div>
                  <div className="team-item__content">
                    <h5 className="team-item__title mb-15">
                      <Link href={`/girls/${item.id}`}>{item.name}</Link>
                    </h5>
                    <span>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GirlsArea;
