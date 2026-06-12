import Article from '@/components/articles/article'
import {ARTICLE_SLUGS, isArticleSlug} from '@/data/articles/articles-data'
import SEO from '@/components/seo'
import Wrapper from '@/layout/wrapper'
import React from 'react'

type PageProps = {
  article: string
}

function ArticlePage({article}: PageProps) {
  return (
    <Wrapper>
      <SEO pageTitle="Article" />
      <Article article={article} />
    </Wrapper>
  )
}

export const getStaticPaths = async () => {
  const paths = ARTICLE_SLUGS.map((article) => ({
    params: {article},
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}: {params: {article: string}}) {
  const article = params?.article
  if (typeof article !== 'string' || !isArticleSlug(article)) {
    return {notFound: true}
  }
  return {
    props: {article},
  }
}

export default ArticlePage
