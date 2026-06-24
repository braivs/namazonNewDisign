'use client'

import {useLocale} from '@/hooks/use-locale'
import {AppLocale, supportedLngs} from '@/i18n/config'
import {readStoredLocale} from '@/i18n/locale-storage'
import cn from 'classnames'
import {useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import s from './LanguageSwitcher.module.scss'

type Props = {
  variant?: 'default' | 'sidebar'
  onChange?: () => void
}

function normalizeLocale(language: string | undefined): AppLocale {
  return language?.startsWith('ru') ? 'ru' : 'en'
}

export default function LanguageSwitcher({variant = 'default', onChange}: Props) {
  const {t, i18n} = useTranslation('language')
  const [, setLocale] = useLocale()
  const [activeLocale, setActiveLocale] = useState<AppLocale>(() => readStoredLocale())

  useEffect(() => {
    const syncActiveLocale = () => {
      setActiveLocale(normalizeLocale(i18n.resolvedLanguage || i18n.language))
    }

    syncActiveLocale()
    i18n.on('languageChanged', syncActiveLocale)

    return () => {
      i18n.off('languageChanged', syncActiveLocale)
    }
  }, [i18n])

  return (
    <div className={cn(s.wrapper, variant === 'sidebar' && s.wrapperSidebar)}>
      {supportedLngs.map((lng) => (
        <button
          key={lng}
          type="button"
          className={cn(
            s.button,
            variant === 'sidebar' && s.buttonSidebar,
            activeLocale === lng && s.buttonActive,
            activeLocale === lng && variant === 'sidebar' && s.buttonActiveSidebar,
          )}
          onClick={() => {
            setLocale(lng)
            onChange?.()
          }}
          aria-current={activeLocale === lng}
        >
          {t(lng)}
        </button>
      ))}
    </div>
  )
}
