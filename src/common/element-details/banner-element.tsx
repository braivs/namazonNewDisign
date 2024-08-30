import React from "react"
import {useAppDispatch} from "@/shared/hooks/useAppDispatch"
import cn from "classnames"
import sC from '@/common/styles.module.scss'
import Link from "next/link"

export const BannerElement = () => {
  const dispatch = useAppDispatch()

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
                <Link className={"tp-breadcrumb__element"} href={'/video'}>
                  <span className="fa fa-arrow-left"/><span className={sC.return}>All videos</span>
                </Link>
                <h2 className={cn(sC.selectedCategory, "tp-breadcrumb__title")}>Video details</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};