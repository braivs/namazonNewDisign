import React from "react"
import {useAppDispatch} from "@/shared/hooks/useAppDispatch"
import {girlsActions, GirlsSelected_categorySelector} from "@/data/girls_data/girls-data.slice"
import {useAppSelector} from "@/app/store/store"
import sC from '@/common/styles.module.scss'
import cn from "classnames"

const BannerGirls = () => {
  const dispatch = useAppDispatch()
  
  const onAll = () => dispatch(girlsActions.setCategory('ALL'))
  const on2010_2011 = () => dispatch(girlsActions.setCategory('2010 - 2011'))
  const on2012_2013 = () => dispatch(girlsActions.setCategory('2012 - 2013'))

  const selected_category = useAppSelector(GirlsSelected_categorySelector )

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
                <div className={cn(selected_category === 'ALL' && sC.selectedCategory, "tp-breadcrumb__element")} onClick={onAll}>ALL</div>
                <div className={cn(selected_category === '2010 - 2011' && sC.selectedCategory, "tp-breadcrumb__element")} onClick={on2010_2011}>2010 - 2011</div>
                <div className={cn(selected_category === '2012 - 2013' && sC.selectedCategory, "tp-breadcrumb__element")} onClick={on2012_2013}>2012 - 2013</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerGirls;
