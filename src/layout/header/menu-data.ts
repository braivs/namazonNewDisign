const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Video",
    link: "/video",
    active: "active",
    sub_menus: [
      { link: "/video/wrestling", title: "Wrestling" },
      { link: "/video/mma", title: "MMA" },
      { link: "/video/mixed", title: "Mixed wrestling" },
      { link: "/video/all", title: "All categories" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Girls",
    link: "/girls",
    active: "",
    sub_menus: [
      { link: "/girls/2010-2011", title: "2010 - 2011" },
      { link: "/girls/2012-2013", title: "2012 - 2013" },
      { link: "/girls/all", title: "All girls" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Shop",
    link: "/shop",
    active: "",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  /*{
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Other",
    link: "/other",
    active: "",
    sub_menus: [
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },
      { link: "/blog", title: "Blog" },
      { link: "/blog-details", title: "Blog Details" },
      { link: "/about", title: "About" },
      { link: "/team-details", title: "Team Details" },
      { link: "/shop", title: "Shop" },
      { link: "/product-details", title: "Product Details" },
      { link: "/cart", title: "cart" },
      { link: "/project-details", title: "Project Details" },
      { link: "/faq", title: "Faq's" },
    ],
  },*/
  /*{
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Competitions",
    link: "/competitions",
    active: "",
  },*/
  /*{
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
    sub_menus: [
      { link: "/", title: "Home Style 1" },
    ],
  },*/
];
export default menu_data;

// todo: when I return to this project: add new tabs
