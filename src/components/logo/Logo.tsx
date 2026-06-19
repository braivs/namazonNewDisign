'use client'

import Link from 'next/link'
import cn from 'classnames'
import {useTranslation} from 'react-i18next'
import s from './Logo.module.scss'

export const Logo = ({isSidebarVer = false}: {isSidebarVer?: boolean}) => {
  const {t} = useTranslation('common')

  return (
    <Link href="/">
      <div className={cn(s.logoContainer, isSidebarVer && s.isSidebarVer)}>
        <img src="/assets/img/logo/namazon.jpg" alt="logo" className={s.logo} />
        {!isSidebarVer ? (
          <div className={s.text}>{t('clubName')}</div>
        ) : (
          <div className={s.text}>
            {t('clubNameLine1')}
            <br /> {t('clubNameLine2')}
          </div>
        )}
      </div>
    </Link>
  )
}
