import Link from 'next/link'
import React, {useState} from 'react'
import menu_data from './menu-data'

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string>('')

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
        {menu_data.map((menu, i) => (
          <React.Fragment key={menu.id}>
            {menu.has_dropdown && menu.sub_menus?.length ? (
              <li className="has-dropdown">
                <Link href={menu.link}>{menu.title}</Link>
                <ul
                  className="submenu"
                  style={{
                    display: navTitle === menu.title ? 'block' : 'none',
                  }}
                >
                  {menu.sub_menus.map((sub) => (
                    <li key={sub.link}>
                      <Link href={sub.link}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
                <a
                  className={`mean-expand ${navTitle === menu.title ? 'mean-clicked' : ''}`}
                  onClick={() => openMobileMenu(menu.title)}
                  style={{fontSize: '18px', cursor: 'pointer'}}
                >
                  <i className="fal fa-plus"></i>
                </a>
              </li>
            ) : (
              <li>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  )
}

export default MobileMenus
