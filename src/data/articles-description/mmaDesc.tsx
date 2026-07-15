'use client'

import sC from '@/common/styles.module.scss'
import ArticleTitleRow from '@/components/articles/article-title-row'
import cn from 'classnames'
import {Col, Row, Table} from 'react-bootstrap'
import React from 'react'
import {useTranslation} from 'react-i18next'

const IMG = '/assets/img/home/mma.jpg'

function listItems(t: (key: string, options?: {returnObjects?: boolean}) => string, key: string) {
  const items = t(key, {returnObjects: true}) as unknown as string[]
  return items.map((item) => <li key={item}>{item}</li>)
}

export const MmaDesc: React.FC = () => {
  const {t, i18n} = useTranslation('articles')
  const isRu = i18n.language === 'ru'
  const weightHeaders = t('mma.weightHeaders', {returnObjects: true}) as unknown as string[]
  const weightRows = t('mma.weightRows', {returnObjects: true}) as unknown as string[][]

  return (
    <>
      <ArticleTitleRow id="mma" />
      <Row>
        <Col xl={2}>
          <img src={IMG} alt="" className={cn(sC.videosMainImg)} />
        </Col>
        <Col xl={10}>
          <p>{t('mma.intro1')}</p>
          <p>{t('mma.intro2')}</p>
        </Col>
      </Row>
      <h5>
        <b>{t('mma.weightTitle')}</b>
      </h5>
      <p>{t('mma.weightIntro')}</p>
      <Table bordered>
        <thead>
          <tr>
            {weightHeaders.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weightRows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <h5>
        <b>{t('mma.legalTitle')}</b>
      </h5>
      <ul>{listItems(t, 'mma.legalItems')}</ul>
      <h5>
        <b>{t('mma.illegalTitle')}</b>
      </h5>
      <ul>{listItems(t, 'mma.illegalItems')}</ul>
      {!isRu && (
        <>
          <h5>
            <b>{t('mma.penaltiesTitle')}</b>
          </h5>
          <ul>{listItems(t, 'mma.penaltiesItems')}</ul>
        </>
      )}
      <h5>
        <b>{t('mma.victoryTitle')}</b>
      </h5>
      <h6>
        <b>{t('mma.koTitle')}</b>
      </h6>
      <p>{t('mma.koText')}</p>
      <h6>
        <b>{t('mma.tkoTitle')}</b>
      </h6>
      <u>{t('mma.refStopTitle')}</u>
      <p>{t('mma.refStopIntro')}</p>
      <ul>{listItems(t, 'mma.refStopItems')}</ul>
      <u>{t('mma.cornerStopTitle')}</u>
      <p>{t('mma.cornerStopText')}</p>
      <p>
        <b>{t('mma.retirementTitle')}</b>
        <br />
        {t('mma.retirementText')}
      </p>
      <h6>
        <b>{t('mma.submissionTitle')}</b>
      </h6>
      <p>{t('mma.submissionIntro')}</p>
      <ul>{listItems(t, 'mma.submissionItems')}</ul>
      <h6>
        <b>{t('mma.techSubmissionTitle')}</b>
      </h6>
      <p>{t('mma.techSubmissionIntro')}</p>
      <ul>{listItems(t, 'mma.techSubmissionItems')}</ul>
      <h6>
        <b>{t('mma.decisionTitle')}</b>
      </h6>
      <p>{t('mma.decisionIntro')}</p>
      {isRu ? (
        <ul>{listItems(t, 'mma.decisionItems')}</ul>
      ) : (
        <>
          <u>{t('mma.unanimousTitle')}</u>
          <p>{t('mma.unanimousText')}</p>
          <u>{t('mma.splitTitle')}</u>
          <p>{t('mma.splitText')}</p>
          <u>{t('mma.majorityTitle')}</u>
          <p>{t('mma.majorityText')}</p>
          <u>{t('mma.drawTitle')}</u>
          <p>{t('mma.drawText')}</p>
          <u>{t('mma.splitDrawTitle')}</u>
          <p>{t('mma.splitDrawText')}</p>
          <u>{t('mma.majorityDrawTitle')}</u>
          <p>{t('mma.majorityDrawText')}</p>
        </>
      )}
      <h6>
        <b>{t('mma.techDecisionTitle')}</b>
      </h6>
      <p>{t('mma.techDecisionText')}</p>
      <h6>
        <b>{t('mma.techDrawTitle')}</b>
      </h6>
      <p>{t('mma.techDrawText')}</p>
      <h6>
        <b>{t('mma.forfeitTitle')}</b>
      </h6>
      <p>{t('mma.forfeitText')}</p>
      <h6>
        <b>{t('mma.dqTitle')}</b>
      </h6>
      <p>{t('mma.dqText')}</p>
      {isRu ? (
        <p>{t('mma.noContestText')}</p>
      ) : (
        <>
          <h6>
            <b>{t('mma.noContestTitle')}</b>
          </h6>
          <p>{t('mma.noContestText')}</p>
        </>
      )}
      {isRu ? (
        <>
          <h5>
            <b>{t('mma.roundsTitle')}</b>
          </h5>
          <p>{t('mma.roundsText')}</p>
          <h5>
            <b>{t('mma.attireTitle')}</b>
          </h5>
          <p>{t('mma.attireText')}</p>
        </>
      ) : (
        <>
          <h5>
            <b>{t('mma.attireTitle')}</b>
          </h5>
          <p>{t('mma.attireText')}</p>
          <h5>
            <b>{t('mma.roundsTitle')}</b>
          </h5>
          <p>{t('mma.roundsText')}</p>
        </>
      )}
    </>
  )
}
