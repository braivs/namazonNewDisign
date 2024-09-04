import Link from "next/link"
import s from "./Logo.module.scss"
import cn from "classnames"
import React from "react"

export const Logo = ({isSidebarVer = false}: { isSidebarVer?: boolean }) => {
  return (
    <Link href="/">
      <div className={cn(s.logoContainer, isSidebarVer && s.isSidebarVer)}>
        <img src="/assets/img/logo/namazon.jpg" alt="logo" className={s.logo}/>
        <div className={s.text}>NAMAZON CLUB</div>
      </div>
    </Link>
  )
}