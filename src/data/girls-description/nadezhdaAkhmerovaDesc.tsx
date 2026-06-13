'use client'

import imgMain from 'public/assets/img/girl/nadezhda_akhmerova/nadezhda.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_NADEZHDA_AKHMEROVA_KICK,
  DIR_NADEZHDA_AKHMEROVA_SUBGR,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const nadezhdaAkhmerovaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.nadezhda-akhmerova'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Nadezhda Akhmerova" />
      </Col>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />, br: <br />}}
          defaults={`<b>Nadezhda Akhmerova</b> (5'6" / 132 lb) - participant in club tournaments on Submission grappling.<br/>She also competes in kickboxing and MMA.`}
        />
      </p>
      <ButtonGallery
        images={DIR_NADEZHDA_AKHMEROVA_SUBGR}
        buttonName={t(`${ns}.gallerySubgr`, {defaultValue: 'Submission grappling'})}
      />
      <ButtonGallery
        images={DIR_NADEZHDA_AKHMEROVA_KICK}
        buttonName={t(`${ns}.galleryKick`, {defaultValue: 'Kickboxing'})}
      />
      <h4>
        <u>
          <Trans
            i18nKey={`${ns}.resultsSection`}
            ns="girls"
            components={{b: <b />}}
            defaults="Results of fights"
          />
        </u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Nadezhda Akhmerova vs. Maria Rylyova'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Nadezhda Akhmerova vs. Tais'})}</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc01">
                {t('videoLinks.nc01p1', {defaultValue: 'VIDEO 1. Submission grappling. Tournament. Part 1. June, 2010'})}
              </Link>
            </td>
            <td>
              <Link href="/video/nc01">
                {t('videoLinks.nc01p1', {defaultValue: 'VIDEO 1. Submission grappling. Tournament. Part 1. June, 2010'})}
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc02">
                {t('videoLinks.nc02p1', {defaultValue: 'VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010'})}
              </Link>
            </td>
            <td>
              <Link href="/video/nc02">
                {t('videoLinks.nc02p1', {defaultValue: 'VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010'})}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table2col1`, {defaultValue: 'Nadezhda Akhmerova vs. Valentina Perfilyeva'})}</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc13">
                {t('videoLinks.nc13', {defaultValue: 'VIDEO 13. Kickboxing. Nadezhda Akhmerova vs Valentina Perfilyeva. 2011'})}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
