import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'
import menu_data from '@/layout/header/menu-data'

function pathEquals(asPath: string, link: string): boolean {
  if (link.startsWith('http')) return false
  return asPath.split('?')[0] === link
}

function competitionsNavActive(asPath: string): boolean {
  const path = asPath.split('?')[0]
  return path === '/competitions' || path.startsWith('/competition/')
}

const NavMenu = ({num = false}) => {
  const {asPath} = useRouter()

  return (
    <ul>
      {menu_data.map((menu, index) => {
        const selfActive =
          menu.link === '/competitions' ? competitionsNavActive(asPath) : pathEquals(asPath, menu.link)
        const isActive = selfActive

        return (
          <li key={menu.id} className={`has-dropdown ${isActive ? 'active' : ''}`}>
            <Link className={isActive ? 'active' : ''} href={menu.link}>
              {num && index <= 9 ? `0${index + 1}.` : num ? `${index + 1}.` : null}
              {menu.title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavMenu
