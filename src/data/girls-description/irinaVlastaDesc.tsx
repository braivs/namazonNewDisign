'use client'

import imgMain from 'public/assets/img/girl/irina_vlasta/vlasta.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_VLASTA_BEACHGR, DIR_VLASTA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'
import {Trans, useTranslation} from 'react-i18next'

export const IrinaVlastaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.irina-vlasta'

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Irina (Vlasta)" />
      </Col>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={{b: <b />}}
          defaults={`<b>Irina (Vlasta)</b> (5'9" / 154 lb) - participant in club tournaments on submission grappling.<br/>She also engages in muay thai and pole dance.`}
        />
      </p>
      <ButtonGallery
        images={DIR_VLASTA_SUBGR}
        buttonName={t(`${ns}.gallerySubgr`, {defaultValue: 'Submission grappling'})}
      />
      <ButtonGallery
        images={DIR_VLASTA_BEACHGR}
        buttonName={t(`${ns}.galleryBeach`, {defaultValue: 'Beach wrestling'})}
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
            <th>{t(`${ns}.table1col1`, {defaultValue: 'Vlasta (Irina) vs. Tais'})}</th>
            <th>{t(`${ns}.table1col2`, {defaultValue: 'Vlasta (Irina) vs. Elena Vasilyeva'})}</th>
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
        </tbody>
      </Table>
    </>
  )
}
