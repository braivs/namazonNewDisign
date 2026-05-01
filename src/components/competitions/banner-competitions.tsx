import React from 'react'
import {useAppDispatch} from '@/shared/hooks/useAppDispatch'
import {useAppSelector} from '@/app/store/store'
import {
  competitionsActions,
  competitionsVariantSelector,
} from '@/data/competitions/competitions.slice'
import type {CompetitionsVariant} from '@/data/competitions/competitions-data'
import cn from 'classnames'
import sC from '@/common/styles.module.scss'

const BannerCompetitions = () => {
  const dispatch = useAppDispatch()
  const selected = useAppSelector(competitionsVariantSelector)

  const set = (v: CompetitionsVariant) => dispatch(competitionsActions.setCompetitionsVariant(v))

  return (
    <section
      className="breadcrumb__area pt-100 pb-120 breadcrumb__overlay"
      style={{
        backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className={sC.tpBreadcrumb}>
              <h2 className={sC.title}>Competitions : </h2>
              <div className={sC.group}>
                <div
                  className={cn(sC.element, selected === 'all' && sC.selectedCategory)}
                  onClick={() => set('all')}
                >
                  ALL
                </div>
                <div
                  className={cn(sC.element, selected === '2015-2017' && sC.selectedCategory)}
                  onClick={() => set('2015-2017')}
                >
                  2015–2017
                </div>
                <div
                  className={cn(sC.element, selected === '2013-2014' && sC.selectedCategory)}
                  onClick={() => set('2013-2014')}
                >
                  2013–2014
                </div>
                <div
                  className={cn(sC.element, selected === '2012' && sC.selectedCategory)}
                  onClick={() => set('2012')}
                >
                  2012
                </div>
                <div
                  className={cn(sC.element, selected === '2011' && sC.selectedCategory)}
                  onClick={() => set('2011')}
                >
                  2011
                </div>
                <div
                  className={cn(sC.element, selected === 'Archive' && sC.selectedCategory)}
                  onClick={() => set('Archive')}
                >
                  Archive
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerCompetitions
