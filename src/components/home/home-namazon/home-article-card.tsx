import Link from 'next/link'
import React from 'react'
import type {HomeCard} from '@/data/home/home-cards-data'
import s from './home-page.module.scss'

type Props = {
  card: HomeCard
}

export default function HomeArticleCard({card}: Props) {
  return (
    <div className={s.card}>
      <Link href={card.href}>
        <h3 className={s.title}>{card.title}</h3>
      </Link>
      <img src={card.imgRef} alt="" className={s.thumb} />
      <p>{card.excerpt}</p>
      <Link href={card.href}>
        <button type="button" className={s.readMore}>
          Read more...
        </button>
      </Link>
    </div>
  )
}
