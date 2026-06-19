'use client'

import React, {useMemo} from 'react'
import cn from 'classnames'
import {useTranslation} from 'react-i18next'
import CompetitionCard from '@/components/competitions/competition-card'
import {useAppSelector} from '@/app/store/store'
import {competitionsFilteredSelector} from '@/data/competitions/competitions.slice'
import {
  competitions_period_order,
  type Competition_data,
} from '@/data/competitions/competitions-data'
import s from '@/components/girls/girls-area/girls-area.module.scss'

const sectionTitle: Record<Competition_data['period'], string> = {
  '2015-2017': '2015 - 2017',
  '2013-2014': '2013 - 2014',
  '2012': '2012',
  '2011': '2011',
  Archive: 'Archive',
}

const CompetitionsArea = () => {
  const {t} = useTranslation('competitions')
  const filtered = useAppSelector(competitionsFilteredSelector)

  const sections = useMemo(() => {
    const byPeriod = new Map<Competition_data['period'], Competition_data[]>()
    for (const c of filtered) {
      const list = byPeriod.get(c.period) ?? []
      list.push(c)
      byPeriod.set(c.period, list)
    }
    return competitions_period_order
      .filter((p) => byPeriod.has(p))
      .map((period) => ({period, items: byPeriod.get(period)!}))
  }, [filtered])

  return (
    <section className="team-area pt-125 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-section">
              <div className="text-center">
                <span
                  className={cn('tp-section__sub-title left-line right-line mb-25', s.subTitle)}
                >
                  {t('subtitle')}
                </span>
              </div>
              <div className="tp-section">
                {sections.map(({period, items}) => (
                  <div className="row" key={period}>
                    <div className="col-12 text-center">
                      <h3 className={cn('tp-section__title mb-70', s.title)}>
                        {sectionTitle[period]}
                      </h3>
                    </div>
                    {items.map((card) => (
                      <CompetitionCard key={card.id} card={card} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompetitionsArea
