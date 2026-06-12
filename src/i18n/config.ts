export const lng = 'en'
export const fallbackLng = lng
export const supportedLngs = [lng, 'ru'] as const
export type AppLocale = (typeof supportedLngs)[number]
