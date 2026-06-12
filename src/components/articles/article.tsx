import ArticleContent from '@/components/articles/article-content'
import BannerArticle from '@/components/articles/banner-article'
import FooterFour from '@/layout/footer/footer-4/footer-4'
import HeaderTwo from '@/layout/header/header-two'
import React from 'react'

type Props = {
  article: string
}

export default function Article({article}: Props) {
  return (
    <>
      <HeaderTwo />
      <BannerArticle />
      <section className="shop-area pt-70 pb-70">
        <div className="container">
          <ArticleContent article={article} />
        </div>
      </section>
      <FooterFour />
    </>
  )
}
