'use client'

import imgMain from 'public/assets/img/girl/irina/irina.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_IRINA_BEACHGR, DIR_IRINA_SUBGR} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

const transComponents = {
  b: <b />,
  br: <br />,
}

export const IrinaDesc = () => {
  const {t} = useTranslation('girls')
  const ns = 'descriptions.irina'
  const buttonName = t(`${ns}.seePhotos`, {defaultValue: 'See photos'})

  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Irina" />
      </Col>
      <p>
        <Trans
          i18nKey={`${ns}.intro`}
          ns="girls"
          components={transComponents}
          defaults={`<b>Irina</b> ( 5'9" / 154 lb ) - one of the strongest participants of tournaments, the championships and separate fights on <b>Submission grappling</b>, organized by club "Namazon". Spending each fight vigorously and uncompromisingly, Irina could make a competition to any opponent.`}
        />
      </p>
      <h4>{t(`${ns}.sgSection`, {defaultValue: 'Submission grappling'})}</h4>
      <p>
        <Trans
          i18nKey={`${ns}.vsIzida`}
          ns="girls"
          components={transComponents}
          defaults={`<b>Irina</b> vs. <b>Izida</b>`}
        />
      </p>
      <ButtonGallery
        images={DIR_IRINA_SUBGR}
        imagesSize={{width: 320, height: 245}}
        buttonName={buttonName}
      />
      <h4>{t(`${ns}.beachSection`, {defaultValue: 'Beach grappling'})}</h4>
      <p>
        <Trans
          i18nKey={`${ns}.vsTais`}
          ns="girls"
          components={transComponents}
          defaults={`<b>Irina</b> vs. <b>Tais</b>`}
        />
      </p>
      <ButtonGallery
        images={DIR_IRINA_BEACHGR}
        imagesSize={{width: 330, height: 220}}
        buttonName={buttonName}
      />
    </>
  )
}
