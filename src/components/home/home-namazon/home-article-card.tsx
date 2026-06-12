import Link from 'next/link'
import React from 'react'
import type {HomeCard} from '@/data/home/home-cards-data'

type Props = {
  card: HomeCard
}

function truncateExcerpt(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()} ...`
}

export default function HomeArticleCard({card}: Props) {
  const excerpt = truncateExcerpt(card.excerpt, 95)

  return (
    <div className="blog-item">
      <Link href={card.href}>
        <div className="blog-item__thumb fix">
          <img src={card.imgRef} alt={card.title} className="w-100"/>
        </div>
      </Link>
      <div className="blog-item__content">
        <h5 className="blog-item__title mb-15">
          <Link href={card.href}>{card.title}</Link>
        </h5>
        <p>{excerpt}</p>
        <div className="blog-item__date-info">
          <ul className="d-flex align-items-center">
            <li>
              <Link href={card.href}>
                Read more
                <i className="fa-regular fa-arrow-right ms-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
