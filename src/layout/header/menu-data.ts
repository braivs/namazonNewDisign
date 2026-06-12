export type SubMenu = {
  link: string
  title: string
}

export type MenuItem = {
  id: number
  mega_menu: boolean
  has_dropdown: boolean
  title: string
  link: string
  active: string
  sub_menus?: SubMenu[]
}

const menu_data: MenuItem[] = [
  {
    id: 0,
    mega_menu: false,
    has_dropdown: false,
    title: 'Home',
    link: '/',
    active: 'active',
  },
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: 'Video',
    link: '/video',
    active: '',
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: 'Girls',
    link: '/girls',
    active: '',
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: 'Competitions',
    link: '/competitions',
    active: '',
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: 'Shop',
    link: 'https://www.patreon.com/namazon/shop',
    active: '',
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: 'Contact',
    link: '/contact',
    active: '',
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: 'Join Us',
    link: '/join-us',
    active: '',
  },
]

export default menu_data
