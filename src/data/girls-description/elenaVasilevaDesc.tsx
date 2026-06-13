'use client'

import imgMain from 'public/assets/img/girl/elena-vasileva/elena.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_ELENA_VASILEVA_MMA, DIR_ELENA_VASILEVA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const elenaVasilevaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.elena-vasileva'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Elena Vasilyeva" />
      </Col>
      <p>
        {t(`${ns}.intro`, {
          defaultValue:
            'Elena Vasilyeva (5\'6" / 135 lb) - a rising star in the club. Specializes in Submission grappling, MMA, Judo, and Arm wrestling (candidate for the Master of Sports).',
        })}
      </p>
      <ButtonGallery
        images={DIR_ELENA_VASILEVA_SUBGR}
        buttonName={t(`${ns}.gallerySubgr`, {defaultValue: 'Submission grappling'})}
      />
      <ButtonGallery
        images={DIR_ELENA_VASILEVA_MMA}
        buttonName={t(`${ns}.galleryMma`, {defaultValue: 'MMA'})}
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
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Elena Vasilyeva vs. Tais'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Elena Vasilyeva vs. Vlasta'})}</th>
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
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
