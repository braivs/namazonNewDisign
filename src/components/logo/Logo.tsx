'use client'

import Link from 'next/link'
import cn from 'classnames'
import {useTranslation} from 'react-i18next'
import s from './Logo.module.scss'

export const Logo = ({isSidebarVer = false}: {isSidebarVer?: boolean}) => {
  const {t, i18n} = useTranslation('common')
  const stackRu = !isSidebarVer && i18n.language.startsWith('ru')

  return (
    <Link href="/">
      <div className={cn(s.logoContainer, isSidebarVer && s.isSidebarVer, stackRu && s.stacked)}>
        <img src="/assets/img/logo/namazon.jpg" alt="logo" className={s.logo} />
        {isSidebarVer ? (
          <div className={s.text}>
            {t('clubNameLine1')}
            <br />
            {t('clubNameLine2')}
          </div>
        ) : stackRu ? (
          <div className={s.text}>
            <span>{t('clubNameLine1')}</span>
            <br className={s.break} />
            <span className={s.secondLine}>{t('clubNameLine2')}</span>
          </div>
        ) : (
          <div className={s.text}>{t('clubName')}</div>
        )}
      </div>
    </Link>
  )
}
