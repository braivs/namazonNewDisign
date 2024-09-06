import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import menu_data from "@/layout/header/menu-data";

const NavMenu = ({ num = false }) => {
  const { asPath } = useRouter(); // Get the current path

  return (
    <>
      <ul>
        {menu_data.map((menu, index) => {
          // Determine if the current path matches the menu link or any of its sub-menu links
          const isActive = asPath === menu.link

          return (
            <li key={menu.id} className={`has-dropdown ${isActive ? 'active' : ''}`}>
              <Link className={`${isActive ? 'active' : ''}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
              
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavMenu;
