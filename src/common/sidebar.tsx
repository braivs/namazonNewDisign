import MobileMenus from '@/layout/header/mobile-menus'
import React, {FC} from 'react'

import {Logo} from "@/components/logo/Logo"
import {SocialIcons} from "@/components/social-icons/SocialIcons"

// Define types for images
interface ImageItem {
  img: string;
}

// Define types for Sidebar props
interface SidebarProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isActive, setIsActive }) => {

  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${isActive ? "tp-sidebar-opened" : ""}`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Logo isSidebarVer={true}/>
        </div>

        <div className="mobile-menu mean-container d-block">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          {/*<p className="d-none d-xl-block">
            Club of single combats for women.
          </p>*/}
          <span>Contact Us</span>
          <a href="mailto:namazonclub@gmail.com">
            <i className="fa-solid fa-star"></i>namazonclub@gmail.com
          </a>
        </div>
        <SocialIcons />
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>
    </>
  );
};

export default Sidebar;
