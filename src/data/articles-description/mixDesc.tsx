'use client'

import sC from '@/common/styles.module.scss'
import ArticleTitleRow from '@/components/articles/article-title-row'
import cn from 'classnames'
import {Col, Row} from 'react-bootstrap'
import React from 'react'
import {useTranslation} from 'react-i18next'

const IMG = '/assets/img/home/mw.jpg'

export const MixDesc: React.FC = () => {
  const {t} = useTranslation('articles')

  return (
    <>
      <ArticleTitleRow id="mix" />
      <Row>
        <Col xl={2}>
          <img src={IMG} alt="" className={cn(sC.videosMainImg)} />
        </Col>
        <Col xl={10}>
          <p>{t('mix.p1')}</p>
          <p>{t('mix.p2')}</p>
        </Col>
      </Row>
    </>
  )
}
