import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'
import {useTranslation} from 'react-i18next'
import {useLocale} from '@/hooks/use-locale'
import menu_data from '@/layout/header/menu-data'
import {getMenuTitle, getSubMenuTitle} from '@/layout/header/menu-i18n-keys'

function pathEquals(asPath: string, link: string): boolean {
  if (link.startsWith('http')) return false
  return asPath.split('?')[0] === link
}

function competitionsNavActive(asPath: string): boolean {
  const path = asPath.split('?')[0]
  return path === '/competitions' || path.startsWith('/competition/')
}

function homeNavActive(asPath: string): boolean {
  const path = asPath.split('?')[0]
  return path === '/' || path === '/home-1' || path === '/home-2' || path === '/home-3'
}

const NavMenu = ({num = false}) => {
  const {asPath} = useRouter()
  const {t} = useTranslation('menu')
  const [, , ready] = useLocale()
  const path = asPath.split('?')[0]

  return (
    <ul>
      {menu_data.map((menu, index) => {
        const subActive = menu.sub_menus?.some((sub) => path === sub.link) ?? false
        const selfActive =
          menu.link === '/competitions'
            ? competitionsNavActive(asPath)
            : menu.link === '/' && menu.has_dropdown
              ? homeNavActive(asPath)
              : pathEquals(asPath, menu.link)
        const isActive = selfActive || subActive
        const menuTitle = getMenuTitle(menu.id, menu.title, t, ready)

        return (
          <li key={menu.id} className={`${menu.has_dropdown ? 'has-dropdown' : ''} ${isActive ? 'active' : ''}`}>
            <Link className={isActive ? 'active' : ''} href={menu.link}>
              {num && index <= 9 ? `0${index + 1}.` : num ? `${index + 1}.` : null}
              {menuTitle}
            </Link>
            {menu.has_dropdown && menu.sub_menus?.length ? (
              <ul className="sub-menu">
                {menu.sub_menus.map((sub) => (
                  <li key={sub.link} className={path === sub.link ? 'active' : ''}>
                    <Link className={path === sub.link ? 'active' : ''} href={sub.link}>
                      {getSubMenuTitle(sub.link, sub.title, t, ready)}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
