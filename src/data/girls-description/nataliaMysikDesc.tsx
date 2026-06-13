'use client'

import imgMain from 'public/assets/img/girl/natalia-mysik/natalia.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_NATALIA_MYSIK_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const NataliaMysikDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.natalia-mysik'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Natalia Mysik" />
      </Col>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />, br: <br />}}
          defaults={`<b>Natalia Mysik</b> (5'11" / 154 lb) - a participant in the club's tournaments on Submission Grappling.<br/>She is the winner of the "Christmas Cup 2011" tournament in Submission Grappling.`}
        />
      </p>
      <ButtonGallery
        images={DIR_NATALIA_MYSIK_SUBGR}
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
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Natalia Mysik vs. Maria Rylyova'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Natalia Mysik vs. Valentina Perfilyeva'})}</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc12">
                {t('videoLinks.nc12', {defaultValue: 'VIDEO 12. Submission grappling. Tournament. April, 2010'})}
              </Link>
            </td>
            <td>
              <Link href="/video/nc04">
                {t('videoLinks.nc04', {defaultValue: 'VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling'})}
              </Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/video/nc12">
                {t('videoLinks.nc12', {defaultValue: 'VIDEO 12. Submission grappling. Tournament. April, 2010'})}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table2col1`, {defaultValue: 'Natalia Mysik vs. Ksenia Voloshina'})}</th>
          </tr>
          <tr>
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
