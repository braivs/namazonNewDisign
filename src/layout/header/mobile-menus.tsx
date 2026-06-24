import Link from 'next/link'
import React, {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useLocale} from '@/hooks/use-locale'
import menu_data from './menu-data'
import {getMenuTitle, getSubMenuTitle} from './menu-i18n-keys'

type MobileMenusProps = {
  onNavigate?: () => void
}

const MobileMenus = ({onNavigate}: MobileMenusProps) => {
  const [navTitle, setNavTitle] = useState<string>('')
  const {t} = useTranslation('menu')
  const [, , ready] = useLocale()

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle('')
    } else {
      setNavTitle(menu)
    }
  }

  return (
    <nav className="mean-nav">
      <ul>
        {menu_data.map((menu) => {
          const menuTitle = getMenuTitle(menu.id, menu.title, t, ready)

          return (
            <React.Fragment key={menu.id}>
              {menu.has_dropdown && menu.sub_menus?.length ? (
                <li className="has-dropdown">
                  <Link href={menu.link} onClick={onNavigate}>{menuTitle}</Link>
                  <ul
                    className="submenu"
                    style={{
                      display: navTitle === menuTitle ? 'block' : 'none',
                    }}
                  >
                    {menu.sub_menus.map((sub) => (
                      <li key={sub.link}>
                        <Link href={sub.link} onClick={onNavigate}>
                          {getSubMenuTitle(sub.link, sub.title, t, ready)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`mean-expand ${navTitle === menuTitle ? 'mean-clicked' : ''}`}
                    onClick={() => openMobileMenu(menuTitle)}
                    style={{fontSize: '18px', cursor: 'pointer'}}
                  >
                    <i className="fal fa-plus"></i>
                  </a>
                </li>
              ) : (
                <li>
                  <Link href={menu.link} onClick={onNavigate}>{menuTitle}</Link>
                </li>
              )}
            </React.Fragment>
          )
        })}
      </ul>
    </nav>
  )
}

export default MobileMenus
