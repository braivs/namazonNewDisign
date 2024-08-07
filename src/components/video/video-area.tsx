import Link from "next/link"
import React from "react"
import {video_data} from "@/data/video-data"
import {formatNumber} from "@/common/helpers"

const VideoArea = () => {
  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            {video_data.map((item) => {
              return (
                <div key={item.id} className="col-lg-3 col-md-6">
                  <div
                    className={`research-item ${item.color} mb-50 wow fadeInUp`}
                    data-wow-delay=".6s"
                  >
                    <div className="research-item__thum fix mb-20">
                      <img src={item.img} alt="research-thumb" />
                    </div>
                    <div className="research-item__content">
                      <span>{item.category} - NC{item.id}</span>
                      <h4 className="research-item__title mb-20" style={{ fontSize: '19px' }}>
                        <Link href={`/video/nc${formatNumber(item.id)}`}>{item.title}</Link>
                      </h4>
                      <p>{item.des}</p>
                      <Link href={`/video/nc${formatNumber(item.id)}`} className="research-item__btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
                <nav>
                  <ul>
                    <li>
                      <Link href="/src/pages/video">
                        <i className="fa-light fa-arrow-left-long"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/src/pages/video">1</Link>
                    </li>
                    <li>
                      <span className="current">2</span>
                    </li>
                    <li>
                      <Link href="/src/pages/video">3</Link>
                    </li>
                    <li>
                      <Link href="/src/pages/video">...</Link>
                    </li>
                    <li>
                      <Link href="/src/pages/video">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoArea;
