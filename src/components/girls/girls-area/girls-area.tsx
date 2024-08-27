import girls_data_2010_2011, {girls_data_2012_2013} from "@/data/girls_data/girls-data"
import Link from "next/link"
import React from "react"
import cn from "classnames"
import {useAppSelector} from "@/app/store/store"
import {GirlsSelected_categorySelector} from "@/data/girls_data/girls-data.slice"
import s from './girls-area.module.scss'

const GirlsArea = () => {
  const selected_category = useAppSelector(GirlsSelected_categorySelector)

  return (
    <>
      <section className="team-area pt-125 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className={cn("tp-section__sub-title left-line right-line mb-25", s.subTitle)}>
                  Participants of competitions
                </span>
                <div className="tp-section text-center">
                  {(selected_category === 'ALL' || selected_category === '2012 - 2013') && <div className="row">
                      <h3 className={cn("tp-section__title mb-70", s.title)}>2012 - 2013</h3>
                    {girls_data_2012_2013.map((item) => (
                      <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div
                          className="team-item mb-35 wow fadeInUp"
                          data-wow-delay=".8s"
                        >
                          <div className="team-item__thumb mb-40">
                            <img src={item.img} alt="team-thumb"/>
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
                  </div>}
                  {(selected_category === 'ALL' || selected_category === '2010 - 2011') && <div className="row">
                      <h3 className={cn("tp-section__title mb-70", s.title)}>2010 - 2011</h3>
                    {girls_data_2010_2011.map((item) => (
                      <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div
                          className="team-item mb-35 wow fadeInUp"
                          data-wow-delay=".8s"
                        >
                          <div className="team-item__thumb mb-40">
                            <img src={item.img} alt="team-thumb" className={item.isInProgress ? s.filter : ''}/>
                          </div>
                          <div className="team-item__content">
                            <h5 className="team-item__title mb-15">
                              {
                                !item.isInProgress
                                  ? <Link href={`/girls/${item.id}`}>{item.name}</Link>
                                  : <div>{item.name}</div>
                              }
                            </h5>
                            <span>{item.title}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>}
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default GirlsArea
