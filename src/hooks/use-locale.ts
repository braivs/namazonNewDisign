'use client'

import type {AppLocale} from '@/i18n/config'
import {createContext, useContext} from 'react'

type LocaleContextValue = {
  locale: AppLocale
  setLocale: (locale: AppLocale) => void
  ready: boolean
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)

export function useLocale(): [AppLocale, (locale: AppLocale) => void, boolean] {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error('useLocale must be used within AppI18nProvider')
  }

  return [context.locale, context.setLocale, context.ready]
}
