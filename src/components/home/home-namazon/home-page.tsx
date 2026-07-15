'use client'

import HomeArticleCard from '@/components/home/home-namazon/home-article-card'
import {HOME_CARDS_INITIAL_VISIBLE, home_cards} from '@/data/home/home-cards-data'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import s from './home-page.module.scss'

export default function HomePage() {
  const {t} = useTranslation('home')
  const [showAll, setShowAll] = useState(false)
  const visibleCards = showAll ? home_cards : home_cards.slice(0, HOME_CARDS_INITIAL_VISIBLE)
  const hasMoreCards = home_cards.length > HOME_CARDS_INITIAL_VISIBLE

  return (
    <section className={s.home}>
      <div className="container">
        <div className="row">
          {visibleCards.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6">
              <div className={s.cardWrap}>
                <HomeArticleCard card={card}/>
              </div>
            </div>
          ))}
        </div>
        {hasMoreCards && !showAll && (
          <div className={s.showAllWrap}>
            <button type="button" className="tp-btn" onClick={() => setShowAll(true)}>
              {t('allArticles')}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
