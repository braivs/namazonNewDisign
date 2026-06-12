import HomeArticleCard from '@/components/home/home-namazon/home-article-card'
import {home_cards} from '@/data/home/home-cards-data'
import React from 'react'
import s from './home-page.module.scss'

export default function HomePage() {
  const [firstRow, secondRow] = [home_cards.slice(0, 2), home_cards.slice(2, 4)]

  return (
    <section className={s.home}>
      <div className="container">
        <div className={`row ${s.row}`}>
          {firstRow.map((card) => (
            <div key={card.id} className="col-md-6">
              <HomeArticleCard card={card} />
            </div>
          ))}
        </div>
        <div className={`row ${s.row}`}>
          {secondRow.map((card) => (
            <div key={card.id} className="col-md-6">
              <HomeArticleCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
