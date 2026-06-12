import {IS_DEBUG} from '@/common/constants/constants'

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

const homeMenuItem: MenuItem = {
  id: 0,
  mega_menu: false,
  has_dropdown: false,
  title: 'Home',
  link: '/',
  active: 'active',
}

const homeMenuItemDebug: MenuItem = {
  ...homeMenuItem,
  has_dropdown: true,
  sub_menus: [
    {link: '/', title: 'Namazon'},
    {link: '/home-1', title: 'Home Style 1'},
    {link: '/home-2', title: 'Home Style 2'},
    {link: '/home-3', title: 'Home Style 3'},
  ],
}

const debugMenuItem: MenuItem = {
  id: 8,
  mega_menu: false,
  has_dropdown: true,
  title: 'Debug',
  link: '/blog',
  active: '',
  sub_menus: [
    {link: '/', title: 'Namazon Home'},
    {link: '/home-1', title: 'Home Style 1'},
    {link: '/home-2', title: 'Home Style 2'},
    {link: '/home-3', title: 'Home Style 3'},
    {link: '/blog', title: 'Blog'},
    {link: '/blog-details', title: 'Blog Details'},
    {link: '/about', title: 'About'},
    {link: '/team-details', title: 'Team Details'},
    {link: '/shop', title: 'Shop'},
    {link: '/product-details', title: 'Product Details'},
    {link: '/cart', title: 'Cart'},
    {link: '/project-details', title: 'Project Details'},
    {link: '/faq', title: "Faq's"},
  ],
}

const menu_data_production: MenuItem[] = [
  homeMenuItem,
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

const menu_data: MenuItem[] = IS_DEBUG
  ? [homeMenuItemDebug, ...menu_data_production.slice(1), debugMenuItem]
  : menu_data_production

export default menu_data
