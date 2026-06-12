import type {AppLocale} from '@/i18n/config'

export const LOCALE_STORAGE_KEY = 'locale'

export function readStoredLocale(): AppLocale {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored === 'en' || stored === 'ru') return stored

  const browserLang = window.navigator.language.slice(0, 2)
  return browserLang === 'ru' ? 'ru' : 'en'
}

export function writeStoredLocale(locale: AppLocale): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
}
