'use client'

import sC from '@/common/styles.module.scss'
import imgMain from 'public/assets/img/girl/mariya-ryljova/7.jpg'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_MARIYA_RYLJOVA} from '@/common/constants/ImageContexts'
import {Table} from 'react-bootstrap'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const MariyaRyljovaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.mariya_ryljova'

  return (
    <>
      <Image className={sC.MainImg} src={imgMain} alt="imgMain"/>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />}}
          defaults={`<b>Maria Rylyova</b> (5'8" / 130 lb) is a winner of the championship of the Namazon Club in submission grappling in 2010.<br/>Maria is a master of sports in the Russian Federation in arm wrestling.`}
        />
      </p>
      <h4>{t(`${ns}.sgSection`, {defaultValue: 'Submission grappling'})}</h4>
      <ButtonGallery
        images={DIR_MARIYA_RYLJOVA}
        buttonName={t(`${ns}.seePhotos`, {defaultValue: 'See photos'})}
      />
      <h4>
        <u>{t(`${ns}.resultsSection`, {defaultValue: 'Results of fights'})}</u>
      </h4>
      <Table bordered>
        <tbody>
        <tr>
          <th>{t(`${ns}.table1col1`, {defaultValue: 'Maria Rylyova vs. Valentina Perfilyeva'})}</th>
          <th>{t(`${ns}.table1col2`, {defaultValue: 'Maria Rylyova vs. Natalia Mysik'})}</th>
        </tr>
        <tr>
          <td>
            <Link href="/video/nc12">
              {t('videoLinks.nc12', {defaultValue: 'VIDEO 12. Submission grappling. Tournament. April, 2010'})}
            </Link>
          </td>
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
          <th>{t(`${ns}.table2col1`, {defaultValue: 'Maria Rylyova vs. Tais'})}</th>
          <th>{t(`${ns}.table2col2`, {defaultValue: 'Maria Rylyova vs. Nadezhda Akhmerova'})}</th>
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
              {t('videoLinks.nc06', {defaultValue: 'VIDEO 6. Maria Rylyova vs. Tais. March, 2011'})}
            </Link>
          </td>
        </tr>
        </tbody>
      </Table>
    </>
  )
}
