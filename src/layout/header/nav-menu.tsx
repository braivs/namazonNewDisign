import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import menu_data from "@/layout/header/menu-data";

const NavMenu = ({ num = false }) => {
  const { asPath } = useRouter(); // Get the current path

  return (
    <>
      <ul>
        {menu_data.map((menu, index) =>
          menu.has_dropdown ? (
            <li key={menu.id} className={`has-dropdown ${asPath === menu.link ? 'active' : ''}`}>
              <Link className={`${asPath === menu.link ? 'active' : ''}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
              {menu.has_dropdown && (
                <ul className="sub-menu">
                  {menu.sub_menus?.map((sub_m, i) => (
                    <li key={i}>
                      <Link className={`${asPath === sub_m.link ? 'active' : ''}`} href={sub_m.link}>
                        {sub_m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={menu.id} className={asPath === menu.link ? 'active' : ''}>
              <Link className={asPath === menu.link ? 'active' : ''} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavMenu;
