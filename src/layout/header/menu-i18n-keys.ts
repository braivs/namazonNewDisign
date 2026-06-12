export const menuI18nKeys: Record<number, string> = {
  0: 'home',
  1: 'video',
  2: 'girls',
  6: 'competitions',
  3: 'shop',
  4: 'contact',
  5: 'joinUs',
  8: 'debug',
}

export const subMenuI18nKeys: Record<string, string> = {
  '/': 'homeNamazon',
  '/home-1': 'homeStyle1',
  '/home-2': 'homeStyle2',
  '/home-3': 'homeStyle3',
}

type TranslateMenu = (key: string) => string

export function getMenuTitle(
  menuId: number,
  fallback: string,
  t: TranslateMenu,
  ready: boolean,
): string {
  if (!ready) return fallback
  const key = menuI18nKeys[menuId]
  return key ? t(key) : fallback
}

export function getSubMenuTitle(
  link: string,
  fallback: string,
  t: TranslateMenu,
  ready: boolean,
): string {
  if (!ready) return fallback
  const key = subMenuI18nKeys[link]
  return key ? t(key) : fallback
}
