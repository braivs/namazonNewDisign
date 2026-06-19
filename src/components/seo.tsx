'use client'

import Head from 'next/head'
import {useTranslation} from 'react-i18next'

type SeoPageKey = 'home' | 'video' | 'girls' | 'competitions' | 'contact' | 'joinUs' | 'article'

interface SEOProps {
  pageTitleKey?: SeoPageKey
  pageTitle?: string
}

const SEO = ({pageTitleKey, pageTitle}: SEOProps) => {
  const {t} = useTranslation('seo')
  const title = pageTitleKey ? t(`pages.${pageTitleKey}`) : pageTitle

  return (
    <Head>
      <title>{title && `${title} - ${t('suffix')}`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content={t('description')} />
      <meta name="robots" content="noindex, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO
