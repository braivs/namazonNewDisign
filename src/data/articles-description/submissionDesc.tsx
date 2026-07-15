'use client'

import sC from '@/common/styles.module.scss'
import ArticleTitleRow from '@/components/articles/article-title-row'
import cn from 'classnames'
import {Col, Row, Table} from 'react-bootstrap'
import React from 'react'
import {useTranslation} from 'react-i18next'

const IMG = '/assets/img/home/sg.jpg'

function listItems(t: (key: string, options?: {returnObjects?: boolean}) => string, key: string) {
  const items = t(key, {returnObjects: true}) as unknown as string[]
  return items.map((item) => <li key={item}>{item}</li>)
}

export const SubmissionDesc: React.FC = () => {
  const {t, i18n} = useTranslation('articles')
  const isRu = i18n.language === 'ru'
  const weightRows = isRu ? [] : (t('submission.weightRows', {returnObjects: true}) as unknown as string[][])

  return (
    <>
      <ArticleTitleRow id="submission" />
      <Row>
        <Col xl={2}>
          <img src={IMG} alt="" className={cn(sC.videosMainImg)} />
        </Col>
        <Col xl={10}>
          <p>{t('submission.intro1')}</p>
          <p>{t('submission.iswa')}</p>
        </Col>
      </Row>
      <h5>
        <b>{t('submission.rulesTitle')}</b>
      </h5>
      <p>{t('submission.rulesIntro')}</p>
      <h5>
        <b>{t('submission.timeTitle')}</b>
      </h5>
      <p>{t('submission.timeText')}</p>
      <h5>
        <b>{t('submission.pointsTitle')}</b>
      </h5>
      <p>{t('submission.pointsIntro')}</p>
      <ul>{listItems(t, 'submission.pointsItems')}</ul>
      {isRu ? (
        <>
          <h5>
            <b>{t('submission.illegalTitle')}</b>
          </h5>
          <p>{t('submission.illegalIntro')}</p>
          <ul>{listItems(t, 'submission.illegalItems')}</ul>
          <p>{t('submission.illegalNote')}</p>
          <h5>
            <b>{t('submission.legalTitle')}</b>
          </h5>
          <ul>{listItems(t, 'submission.legalItems')}</ul>
        </>
      ) : (
        <>
          <h5>
            <b>{t('submission.legalTitle')}</b>
          </h5>
          <ul>{listItems(t, 'submission.legalItems')}</ul>
          <h5>
            <b>{t('submission.illegalTitle')}</b>
          </h5>
          <ul>{listItems(t, 'submission.illegalItems')}</ul>
        </>
      )}
      <h5>
        <b>{t('submission.penaltiesTitle')}</b>
      </h5>
      {isRu && <p>{t('submission.penaltiesIntro')}</p>}
      <ul>{listItems(t, 'submission.penaltiesItems')}</ul>
      <p>{t('submission.penaltiesNote')}</p>
      <h5>
        <b>{t('submission.uniformTitle')}</b>
      </h5>
      <ul>{listItems(t, 'submission.uniformItems')}</ul>
      <h5>
        <b>{t('submission.winningTitle')}</b>
      </h5>
      <p>{t('submission.winningIntro')}</p>
      <ul>{listItems(t, 'submission.winningItems')}</ul>
      <h5>
        <b>{t('submission.weighInsTitle')}</b>
      </h5>
      <ul>{listItems(t, 'submission.weighInsItems')}</ul>
      {!isRu && (
        <Table bordered>
          <thead>
            <tr>
              <th scope="col">{t('submission.tableCol1')}</th>
              <th scope="col">{t('submission.tableCol2')}</th>
            </tr>
          </thead>
          <tbody>
            {weightRows.map(([name, limit]) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{limit}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}
