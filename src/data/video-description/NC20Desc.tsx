'use client'

import React from 'react'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_NEVSKAYA_ARENA_1} from '@/common/constants/ImageContexts'
import {Trans, useTranslation} from 'react-i18next'

export const NC20Desc = () => {
  const {t, i18n} = useTranslation('video')
  const isRu = i18n.language === 'ru'

  return (
    <>
      <p>
        <Trans i18nKey="descriptions.20.p1" ns="video" components={{b: <b />}} />
      </p>
      <p>
        <Trans i18nKey="descriptions.20.p2" ns="video" components={{b: <b />}} />
      </p>
      {isRu ? (
        <>
          <p>{t('descriptions.20.p3')}</p>
          <p>
            <Trans
              i18nKey="descriptions.20.p4"
              ns="video"
              components={{
                b: <b />,
                br: <br />,
              }}
            />
          </p>
        </>
      ) : (
        <p>{t('descriptions.20.p3')}</p>
      )}
      <ButtonGallery
        images={DIR_NEVSKAYA_ARENA_1}
        buttonName={t('descriptions.20.screenshots', {defaultValue: 'See photos'})}
      />
    </>
  )
}
