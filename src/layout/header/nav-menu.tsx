import React, {useState} from "react"
import {useRouter} from "next/router"
import menu_data from "@/layout/header/menu-data"

type MenuItem = {
  id: number;
  mega_menu: boolean;
  has_dropdown: boolean;
  title: string;
  link: string;
  active: string;
  handler?: () => void; // Optional function handler
  sub_menus?: { link: string; title: string; handler?: () => void }[];
};

const NavMenu: React.FC<{ num?: boolean }> = ({ num = false }) => {
  const { asPath, push } = useRouter(); // Get the current path and router's push method
  const [openMenu, setOpenMenu] = useState<number | null>(null); // State to track open menu
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null); // State to track hovered menu

  // Handle menu click and execute function or navigate
  const handleMenuClick = (menu: MenuItem, event: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link behavior

    if (menu.handler) {
      menu.handler(); // Execute menu item function
    } else {
      // Allow link navigation if no handler is defined
      window.location.href = menu.link;
    }

    // Close the menu after clicking
    setOpenMenu(null);
    event.stopPropagation(); // Ensure that the click does not bubble up
  };

  // Handle sub-menu click and execute function or navigate
  const handleSubMenuClick = (subMenu: { link: string; handler?: () => void }, event: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>, parentLink?: string) => {
    event.preventDefault(); // Prevent default link behavior

    if (subMenu.handler) {
      subMenu.handler(); // Execute sub-menu item function
      setHoveredMenu(null);
    }

    if (parentLink) {
      // Redirect to the parent menu's link (e.g., /video)
      push(parentLink);
    } else if (subMenu.link) {
      // Redirect to the sub-menu's link if no parent link is provided
      window.location.href = subMenu.link;
    }

    // Close the menu after clicking
    setOpenMenu(null);
    event.stopPropagation(); // Ensure that the click does not bubble up
  };

  // Manage menu hover
  const handleMenuMouseEnter = (menuId: number) => {
    setHoveredMenu(menuId);
  };

  const handleMenuMouseLeave = () => {
    setHoveredMenu(null);
  };

  // Manage menu item click
  const handleMenuItemClick = (menuId: number) => {
    if (openMenu === menuId) {
      // If clicking the already open menu, close it
      setOpenMenu(null);
    } else {
      // Open the clicked menu
      setOpenMenu(menuId);
    }
  };

  return (
    <>
      <ul>
        {menu_data.map((menu: MenuItem, index: number) => {
          // Determine if the current path matches the menu link or any of its sub-menu links
          const isActive = asPath === menu.link ||
            (menu.sub_menus && menu.sub_menus.some(sub => asPath === sub.link));

          // Determine if this menu is currently open
          const isMenuOpen = openMenu === menu.id || hoveredMenu === menu.id;

          return (
            <li
              key={menu.id}
              className={`has-dropdown ${isActive ? 'active' : ''} ${isMenuOpen ? 'open' : ''}`}
              onMouseEnter={() => handleMenuMouseEnter(menu.id)}
              onMouseLeave={handleMenuMouseLeave}
              onClick={(event) => {
                // Prevent default link behavior
                event.preventDefault();
                // Handle menu item click
                handleMenuItemClick(menu.id);
                event.stopPropagation(); // Ensure that the click does not bubble up
              }}
            >
              <a
                className={`${isActive ? 'active' : ''}`}
                href={menu.link || "#"}
                onClick={(event) => handleMenuClick(menu, event)}
              >
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </a>
              {menu.has_dropdown && isMenuOpen && (
                <ul className="sub-menu">
                  {menu.sub_menus?.map((sub_m, i) => (
                    <li
                      key={i}
                      className={asPath === sub_m.link ? 'active' : ''}
                      onClick={(event) => handleSubMenuClick(sub_m, event, menu.link)}
                    >
                      <a
                        className={asPath === sub_m.link ? 'active' : ''}
                        href={sub_m.link || "#"}
                        onClick={(event) => handleSubMenuClick(sub_m, event, menu.link)}
                      >
                        {sub_m.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavMenu;
