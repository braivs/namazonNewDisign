'use client'

import imgMain from 'public/assets/img/girl/kseniya-voloshina/kseniya.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_KSENIYA_VOLOSHINA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const KseniyaVoloshinaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.kseniya-voloshina'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Ksenia Voloshina" />
      </Col>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />, br: <br />}}
          defaults={`<b>Ksenia Voloshina</b> (5'3" / 141 lb) - a participant in the club's tournaments on Submission Grappling.<br/>She is a prize winner of the "Christmas Cup 2011" tournament in Submission Grappling.`}
        />
      </p>
      <ButtonGallery
        images={DIR_KSENIYA_VOLOSHINA_SUBGR}
        buttonName={t(`${ns}.gallerySubgr`, {defaultValue: 'Submission grappling'})}
      />
      <h4>
        <u>
          <Trans
            i18nKey={`${ns}.resultsSection`}
            ns="girls"
            components={{b: <b />}}
            defaults="Results of Fights"
          />
        </u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Ksenia Voloshina vs. Natalia Mysik'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Ksenia Voloshina vs. Valentina Perfilyeva'})}</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc04">
                {t('videoLinks.nc04', {defaultValue: 'VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling'})}
              </Link>
            </td>
            <td>
              <Link href="/video/nc04">
                {t('videoLinks.nc04', {defaultValue: 'VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling'})}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
