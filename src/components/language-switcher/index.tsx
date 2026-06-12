import dynamic from 'next/dynamic'
import s from './LanguageSwitcher.module.scss'

const LanguageSwitcher = dynamic(() => import('./LanguageSwitcher'), {
  ssr: false,
  loading: () => <div className={s.wrapper} aria-hidden style={{minWidth: 102, minHeight: 32}}/>,
})

export default LanguageSwitcher
