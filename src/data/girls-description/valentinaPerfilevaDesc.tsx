'use client'

import imgMain from 'public/assets/img/girl/valentina_perfileva/valentina.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_VALENTINA_KICK, DIR_VALENTINA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const ValentinaPerfilevaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.valentina-perfileva'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Valentina Perfilyeva" />
      </Col>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />}}
          defaults={`<b>Valentina Perfilyeva</b> (5'8" / 132 lb) - participant in tournaments of the "Namazon" club in Submission Grappling, winner of the Olympic Games of martial arts "EAST-WEST" in karate (kumite).`}
        />
      </p>
      <ButtonGallery
        images={DIR_VALENTINA_SUBGR}
        buttonName={t(`${ns}.gallerySubgr`, {defaultValue: 'Submission Grappling'})}
      />
      <ButtonGallery
        images={DIR_VALENTINA_KICK}
        buttonName={t(`${ns}.galleryKick`, {defaultValue: 'Kickboxing'})}
      />
      <h4>
        <u>
          <Trans
            i18nKey={`${ns}.resultsSection`}
            ns="girls"
            components={{b: <b />}}
            defaults={`Results of Fights`}
          />
        </u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Valentina Perfilyeva vs Maria Rylyova'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Valentina Perfilyeva vs Natalia Mysik'})}</th>
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
            <th>{t(`${ns}.table2col1`, {defaultValue: 'Valentina Perfilyeva vs Ksenia Voloshina'})}</th>
            <th>{t(`${ns}.table2col2`, {defaultValue: 'Valentina Perfilyeva vs Nadezhda Akhmerova'})}</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc04">
                {t('videoLinks.nc04', {defaultValue: 'VIDEO 4. "Christmas Cup 2011". Tournament on Submission Grappling'})}
              </Link>
            </td>
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
