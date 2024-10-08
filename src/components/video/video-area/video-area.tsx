import Link from "next/link"
import React from "react"
import {formatNumber} from "@/common/helpers"
import s from './video-area.module.scss'
import cn from "classnames"
import {Category} from "@/common/types"
import {useAppSelector} from "@/app/store/store"
import {videosSelector} from "@/data/video-data/video-data.slice"

const stylePicker = (category: Category) => {
  switch(category) {
    case "SUBMISSION WRESTLING":
      return s.blue
    case 'MIXED WRESTLING':
      return s.green
    case 'MMA':
      return s.red
    case "BOXING":
      return s.violet
    default:
    return ''
  }
}

const VideoArea = () => {
  const videos = useAppSelector(videosSelector )

  return (
    <>
      <section className="research-area pt-130 pb-130">
        <div className="container">
          <div className="row">
            {videos.map((item) => {
              return (
                <div key={item.id} className="col-lg-3 col-md-6">
                  <div
                    className={`research-item ${item.color} mb-50p`}
                  >
                    <div className="research-item__thum fix mb-20">
                      <img src={item.img} alt="research-thumb" />
                    </div>
                    <div className={`research-item__content `}>
                      <div className={cn(s.previousStyle, stylePicker(item.category))}>{item.category} - NC{item.id}</div>
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
        </div>
      </section>
    </>
  );
};

export default VideoArea;

//todo: add gap between rows

