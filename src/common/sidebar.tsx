import MobileMenus from '@/layout/header/mobile-menus'
import ImagePopup from '@/modals/ImagePopup'
import React, {FC, useState} from 'react'

import {Logo} from "@/components/logo/Logo"
import {SocialIcons} from "@/components/social-icons/SocialIcons"

// Define types for images
interface ImageItem {
  img: string;
}

const images: ImageItem[] = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  }
];

// Define types for Sidebar props
interface SidebarProps {
  isActive: boolean;
  setIsActive: (active: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ isActive, setIsActive }) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  // image open state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  // images
  const img = images.map((item) => item.img);

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

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <p className="d-none d-xl-block">
            Club of single combats for women.
          </p>
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

      {/* image light box start */}
      {isOpen && photoIndex !== null && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;
