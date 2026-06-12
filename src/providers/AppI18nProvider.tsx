'use client'

import {LocaleContext} from '@/hooks/use-locale'
import {fallbackLng, supportedLngs} from '@/i18n/config'
import type {AppLocale} from '@/i18n/config'
import {readStoredLocale, writeStoredLocale} from '@/i18n/locale-storage'
import {en} from '@/locales/en'
import {ru} from '@/locales/ru'
import {createInstance} from 'i18next'
import {PropsWithChildren, useCallback, useEffect, useMemo, useState} from 'react'
import {I18nextProvider, initReactI18next} from 'react-i18next'

export const i18n = createInstance({
  lng: fallbackLng,
  supportedLngs: [...supportedLngs],
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  resources: {
    en: {
      menu: en.menu,
      language: en.language,
      common: en.common,
    },
    ru: {
      menu: ru.menu,
      language: ru.language,
      common: ru.common,
    },
  },
}).use(initReactI18next)

void i18n.init()

export function AppI18nProvider({children}: PropsWithChildren) {
  const [locale, setLocaleState] = useState<AppLocale>(fallbackLng)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const storedLocale = readStoredLocale()
    setLocaleState(storedLocale)
    writeStoredLocale(storedLocale)
    void i18n.changeLanguage(storedLocale)
    setReady(true)
  }, [])

  const setLocale = useCallback((nextLocale: AppLocale) => {
    setLocaleState(nextLocale)
    writeStoredLocale(nextLocale)
    void i18n.changeLanguage(nextLocale)
  }, [])

  const contextValue = useMemo(
    () => ({locale, setLocale, ready}),
    [locale, setLocale, ready],
  )

  return (
    <LocaleContext.Provider value={contextValue}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocaleContext.Provider>
  )
}
