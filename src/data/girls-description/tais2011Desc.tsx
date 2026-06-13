'use client'

import sC from '@/common/styles.module.scss'
import imgMain from 'public/assets/img/girl/tais2011/main/08.jpg'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_TAIS2011_MAIN,
  DIR_TAIS2011_SUBGR,
  DIR_TAIS2011_MMA,
  DIR_TAIS2011_KARATE,
} from '@/common/constants/ImageContexts'
import {Table} from 'react-bootstrap'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const Tais2011Desc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.tais2011'

  return (
    <>
      <Image className={sC.MainImg} src={imgMain} alt="Tais" />
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />}}
          defaults={`<b>Tais</b> (5'7" / 130 lb) is a many-time winner of the submission grappling championships at the Namazon Club. She is also regarded as the best MMA fighter at our club.`}
        />
      </p>
      <ButtonGallery
        images={DIR_TAIS2011_MAIN}
        buttonName={t(`${ns}.galleryMain`, {defaultValue: 'Tais. Gallery'})}
      />
      <ButtonGallery
        images={DIR_TAIS2011_SUBGR}
        buttonName={t(`${ns}.gallerySubgr`, {defaultValue: 'Submission grappling'})}
      />
      <ButtonGallery
        images={DIR_TAIS2011_MMA}
        buttonName={t(`${ns}.galleryMma`, {defaultValue: 'MMA'})}
      />
      <ButtonGallery
        images={DIR_TAIS2011_KARATE}
        buttonName={t(`${ns}.galleryKarate`, {defaultValue: 'Karate'})}
      />
      <h4>
        <u>{t(`${ns}.resultsSection`, {defaultValue: 'Results of fights'})}</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Tais vs. Maria Rylyova'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Tais vs. Nadezhda Akhmerova'})}</th>
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
          <tr>
            <td>
              <Link href="/video/nc06">
                {t('videoLinks.nc06', {defaultValue: 'VIDEO 6. Maria Rylyova vs Tais. March, 2011'})}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr>
            <th>{t(`${ns}.table2col1`, {defaultValue: 'Tais vs. Elena Vasilyeva'})}</th>
            <th>{t(`${ns}.table2col2`, {defaultValue: 'Tais vs. Vlasta'})}</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc08">
                {t('videoLinks.nc08', {defaultValue: 'VIDEO 8. Beach Tournament. Submission grappling. June, 2011'})}
              </Link>
            </td>
            <td>
              <Link href="/video/nc08">
                {t('videoLinks.nc08', {defaultValue: 'VIDEO 8. Beach Tournament. Submission grappling. June, 2011'})}
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc16">
                {t('videoLinks.nc16', {defaultValue: 'VIDEO 16. Youth vs Experience. Submission grappling. June, 2011'})}
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
