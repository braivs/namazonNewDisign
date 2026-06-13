'use client'

import React from 'react'
import {GirlData} from '@/common/types'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {useTranslation} from 'react-i18next'

const YEARS_TO_PAGE_TITLE_KEY: Record<string, string> = {
  '2012 - 2013': '2012_2013',
  '2010 - 2011': '2010_2011',
}

export default function GirlsData({GirlData}: Props) {
  const {t} = useTranslation('girls')
  const pageTitleKey = GirlData?.years ? YEARS_TO_PAGE_TITLE_KEY[GirlData.years] : undefined
  const pageTitle = pageTitleKey
    ? t(`pageTitle.${pageTitleKey}`, {
        defaultValue: `Participants of competitions ${GirlData?.years}`,
      })
    : `Participants of competitions ${GirlData?.years ?? ''}`
  const name = GirlData?.id
    ? t(`names.${GirlData.id}`, {defaultValue: GirlData.name})
    : GirlData?.name

  return (
    <>
      <h3>{pageTitle}</h3>
      <h4>{name}</h4>
      <section className={cn('pt-10', sC.compArticlesVideoGirl)}>
        {GirlData?.description()}
      </section>
    </>
  )
}

type Props = {
  GirlData: GirlData | undefined
}
