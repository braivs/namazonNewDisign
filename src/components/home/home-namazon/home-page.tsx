import HomeArticleCard from '@/components/home/home-namazon/home-article-card'
import {home_cards} from '@/data/home/home-cards-data'
import React from 'react'
import s from './home-page.module.scss'

export default function HomePage() {
  return (
    <section className={s.home}>
      <div className="container">
        <div className="row">
          {home_cards.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6">
              <div className={s.cardWrap}>
                <HomeArticleCard card={card}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
