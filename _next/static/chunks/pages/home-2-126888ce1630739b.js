(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[265],{62789:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home-2",function(){return i(12537)}])},94571:function(e,s,i){"use strict";var a=i(67294);s.Z=()=>{let[e,s]=(0,a.useState)(!1),i=()=>{window.scrollY>80?s(!0):s(!1)};return(0,a.useEffect)(()=>{window.addEventListener("scroll",i)},[]),{sticky:e}}},59523:function(e,s,i){"use strict";var a=i(85893),l=i(67294),t=i(17857),r=i(97650);s.Z=e=>{let{number:s,text:i,add_style:c=!1}=e,[n,o]=(0,l.useState)(!1),d=e=>{e&&!n&&o(!0)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(t.ZP,{start:n?0:void 0,end:s,duration:1,children:e=>{let{countUpRef:s}=e;return(0,a.jsxs)("div",{className:"d-flex ".concat(c?"align-items-center justify-content-center":""),children:[(0,a.jsx)("span",{ref:s}),(0,a.jsx)(r.df,{as:"span",onChange:e=>d(e),children:i&&(0,a.jsx)("span",{children:i})})]})}})})}},43179:function(e,s,i){"use strict";var a=i(85893);i(67294);var l=i(59523);let t=[{id:1,color:"blue-hard",counter:1492,text:"Laboratories in 100+ states"},{id:2,color:"pink-hard",counter:152,text:"Laboratory specialists"},{id:3,color:"sky-hard",counter:1022,text:"Material collection points"},{id:4,color:"green-hard",counter:24332,text:"Patients diagnosed in 2022"}];s.Z=e=>{let{cls:s="pt-40 pb-100"}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"counter-area ".concat(s),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:t.map(e=>(0,a.jsx)("div",{className:"col-xl-3 col-md-6",children:(0,a.jsxs)("div",{className:"counter__item blue-border mb-30",children:[(0,a.jsx)("div",{className:"counter__icon ".concat(e.color," mb-15"),children:(0,a.jsx)("i",{})}),(0,a.jsxs)("div",{className:"counter__content",children:[(0,a.jsx)("h4",{className:"counter__title",children:(0,a.jsx)("span",{className:"counter",children:(0,a.jsx)(l.Z,{number:e.counter})})}),(0,a.jsx)("p",{children:e.text})]})]})},e.id))})})})})}},11051:function(e,s,i){"use strict";i.d(s,{Z:function(){return m}});var a=i(85893),l=i(41664),t=i.n(l),r=i(67294),c=i(4253),n=()=>{let[e,s]=(0,r.useState)(""),i=i=>{e===i?s(""):s(i)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("nav",{className:"mean-nav",children:(0,a.jsx)("ul",{children:c.Z.map((s,l)=>(0,a.jsxs)(r.Fragment,{children:[s.has_dropdown&&(0,a.jsxs)("li",{className:"has-dropdown",children:[(0,a.jsx)(t(),{href:s.link,children:s.title}),(0,a.jsx)("ul",{className:"submenu",style:{display:e===s.title?"block":"none"}}),(0,a.jsx)("a",{className:"mean-expand ".concat(e===s.title?"mean-clicked":""),onClick:()=>i(s.title),style:{fontSize:"18px",cursor:"pointer"},children:(0,a.jsx)("i",{className:"fal fa-plus"})})]}),!s.has_dropdown&&(0,a.jsx)("li",{children:(0,a.jsx)(t(),{href:s.link,children:s.title})})]},l))})})})},o=i(59448),d=i(27481),m=e=>{let{isActive:s,setIsActive:i}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"tpsideinfo tp-side-info-area ".concat(s?"tp-sidebar-opened":""),children:[(0,a.jsx)("button",{onClick:()=>i(!1),className:"tpsideinfo__close",children:(0,a.jsx)("i",{className:"fal fa-times"})}),(0,a.jsx)("div",{className:"tpsideinfo__logo mb-40",children:(0,a.jsx)(o.T,{isSidebarVer:!0})}),(0,a.jsx)("div",{className:"mobile-menu mean-container d-block",children:(0,a.jsx)("div",{className:"mean-bar",children:(0,a.jsx)(n,{})})}),(0,a.jsxs)("div",{className:"tpsideinfo__content mb-60",children:[(0,a.jsx)("span",{children:"Contact Us"}),(0,a.jsxs)("a",{href:"mailto:namazonclub@gmail.com",children:[(0,a.jsx)("i",{className:"fa-solid fa-star"}),"namazonclub@gmail.com"]})]}),(0,a.jsx)(d.H,{})]}),(0,a.jsx)("div",{onClick:()=>i(!1),className:"body-overlay ".concat(s?"opened":"")})]})}},59448:function(e,s,i){"use strict";i.d(s,{T:function(){return d}});var a=i(85893),l=i(41664),t=i.n(l),r=i(22721),c=i.n(r),n=i(93967),o=i.n(n);i(67294);let d=e=>{let{isSidebarVer:s=!1}=e;return(0,a.jsx)(t(),{href:"/",children:(0,a.jsxs)("div",{className:o()(c().logoContainer,s&&c().isSidebarVer),children:[(0,a.jsx)("img",{src:"/assets/img/logo/namazon.jpg",alt:"logo",className:c().logo}),s?(0,a.jsxs)("div",{className:c().text,children:["NAMAZON",(0,a.jsx)("br",{})," CLUB"]}):(0,a.jsx)("div",{className:c().text,children:"NAMAZON CLUB"})]})})}},36911:function(e,s,i){"use strict";var a=i(85893),l=i(9008),t=i.n(l);s.Z=e=>{let{pageTitle:s}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(t(),{children:[(0,a.jsx)("title",{children:s&&"".concat(s," - Namazon - Club of single combats for women")}),(0,a.jsx)("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"robots",content:"noindex, follow"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.png"})]})})}},27481:function(e,s,i){"use strict";i.d(s,{H:function(){return l}});var a=i(85893);i(67294);let l=()=>(0,a.jsxs)("div",{className:"tp-footer-widget__social fw-social",children:[(0,a.jsx)("a",{href:"https://t.me/namazonclub",children:(0,a.jsx)("i",{className:"fa-brands fa-telegram"})}),(0,a.jsx)("a",{href:"https://www.youtube.com/@namazonclub",children:(0,a.jsx)("i",{className:"fa-brands fa-youtube"})}),(0,a.jsx)("a",{href:"https://www.facebook.com/groups/namazonclub",children:(0,a.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,a.jsx)("a",{href:"https://vk.com/namazon",children:(0,a.jsx)("i",{className:"fa-brands fa-vk"})})]})},62287:function(e,s,i){"use strict";i.d(s,{Z:function(){return h}});var a=i(85893),l=i(11051),t=i(94571),r=i(67294),c=i(51043),n=i(82244),o=i.n(n),d=i(59448);let m=()=>(0,a.jsxs)("div",{className:"header-top-mob",children:[(0,a.jsx)("img",{src:"/_next/static/media/youtube_small_color.a5b6b36c.png",alt:"youtube"}),(0,a.jsx)("span",{children:"YouTube :"}),(0,a.jsx)("a",{href:"https://www.youtube.com/@namazonclub",children:" @namazonclub "})]});var h=()=>{let{sticky:e}=(0,t.Z)(),[s,i]=(0,r.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{id:"header-mob-sticky",className:"tp-mobile-header-area pt-15 pb-15 d-xl-none ".concat(e?"header-sticky":""," "),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-md-4 col-10",children:(0,a.jsx)(d.T,{})}),(0,a.jsx)("div",{className:"col-md-8 col-2",children:(0,a.jsxs)("div",{className:"tp-mobile-bar d-flex align-items-center justify-content-end",children:[(0,a.jsx)("div",{className:"tp-bt-btn-banner d-none d-md-block d-xl-none mr-30",children:(0,a.jsx)(m,{})}),(0,a.jsx)("button",{onClick:()=>i(!0),className:"tp-menu-toggle",children:(0,a.jsx)("i",{className:"far fa-bars"})})]})})]})})}),(0,a.jsx)("header",{className:"d-none d-xl-block",children:(0,a.jsxs)("div",{className:"header-custom ".concat(e?"header-sticky":""),id:"header-sticky",children:[(0,a.jsx)(d.T,{}),(0,a.jsxs)("div",{className:"header-menu-box",children:[(0,a.jsx)("div",{className:"header-menu-top",children:(0,a.jsx)("div",{className:"row align-items-center",children:(0,a.jsx)("div",{className:"col-lg-4",children:(0,a.jsx)("div",{className:o().headerTopMob,children:(0,a.jsx)(m,{})})})})}),(0,a.jsx)("div",{className:"header-menu-bottom",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-7",children:(0,a.jsx)("div",{className:"main-menu main-menu-second",children:(0,a.jsx)("nav",{id:"mobile-menu",children:(0,a.jsx)(c.Z,{})})})})})})]})]})}),(0,a.jsx)(l.Z,{isActive:s,setIsActive:i})]})}},4253:function(e,s){"use strict";s.Z=[{id:1,mega_menu:!1,has_dropdown:!1,title:"Video",link:"/video",active:"active"},{id:2,mega_menu:!1,has_dropdown:!1,title:"Girls",link:"/girls",active:""},{id:3,mega_menu:!1,has_dropdown:!1,title:"Shop",link:"https://www.patreon.com/namazon/shop",active:""},{id:4,mega_menu:!1,has_dropdown:!1,title:"Contact",link:"/contact",active:""}]},51043:function(e,s,i){"use strict";var a=i(85893),l=i(41664),t=i.n(l);i(67294);var r=i(11163),c=i(4253);s.Z=e=>{let{num:s=!1}=e,{asPath:i}=(0,r.useRouter)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("ul",{children:c.Z.map((e,l)=>{let r=i===e.link;return(0,a.jsx)("li",{className:"has-dropdown ".concat(r?"active":""),children:(0,a.jsxs)(t(),{className:"".concat(r?"active":""),href:e.link,children:[s&&l<=9?"0".concat(l+1+"."):s&&l+1+".",e.title]})},e.id)})})})}},77840:function(e,s,i){"use strict";i.d(s,{Z:function(){return c}});var a=i(85893),l=i(67294),t=i(94571),r=()=>{let{sticky:e}=(0,t.Z)(),[s,i]=(0,l.useState)(!1),r=()=>{!s&&window.pageYOffset>400?i(!0):s&&window.pageYOffset<=400&&i(!1)};return(0,l.useEffect)(()=>(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:"scroll-top scroll-to-target ".concat(e?"open":""),"data-target":"html",children:(0,a.jsx)("i",{className:"fas fa-angle-up"})})})},c=e=>{let{children:s}=e;return(0,a.jsxs)(a.Fragment,{children:[s,(0,a.jsx)(r,{})]})}},56096:function(e,s,i){"use strict";var a=i(85893);i(67294);var l=i(61239);s.Z=e=>{let{isVideoOpen:s,setIsVideoOpen:i,videoId:t="d8w5SICzzxc"}=e;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l.Z,{channel:"youtube",isOpen:s,videoId:t,onClose:()=>i(!1)})})}},12537:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return E}});var a=i(85893),l=i(43179),t=i(67294),r=i(56096),c=i(41664),n=i.n(c),o=()=>{let{about_bg:e,about_img:s,popup_video:i,about_thumb:l,sub_title:c,title:o,des_1:d,dex_2:m,btn:h,booking_bg:x,b_sub_title:j,b_title:g,b_btn:b,b_img:u}={about_bg:"/assets/img/shape/shape-bg-05.png",about_img:"/assets/img/about/about-bg-02.png",popup_video:"https://www.youtube.com/watch?v=-BpXNPHiB2U",about_thumb:"/assets/img/about/about-bg-03.png",title:"Best Laboratory For Testing And Research",sub_title:"About",des_1:(0,a.jsx)(a.Fragment,{children:"Your full service lab for clinical trials. Our mission is to ensure the generation of accurate and precise findings"}),dex_2:(0,a.jsx)(a.Fragment,{children:"Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl aliquip ex ea commodo habent claritatem insitamconse quat."}),btn:"Talk with Expart",booking_bg:"/assets/img/shape/shape-bg-04.png",b_sub_title:"book Free sampling",b_title:(0,a.jsxs)(a.Fragment,{children:["Free Sampling at your ",(0,a.jsx)("br",{})," Home Adress"]}),b_btn:"Book Now",b_img:"/assets/img/shape/logo-shape-1.png"},[p,f]=(0,t.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"about-area grey-bg pt-130 tp-box-space pb-130 ml-30 mr-30",style:{backgroundImage:"url(".concat(e,")")},children:[(0,a.jsx)("div",{className:"about-wrapper",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-6 col-lg-12 col-12",children:(0,a.jsxs)("div",{className:"about-thumb text-lg-center p-relative ml-85 mb-60",children:[(0,a.jsx)("img",{src:s,alt:"about-thumb"}),(0,a.jsx)("div",{className:"about-video",children:(0,a.jsx)("button",{onClick:()=>f(!0),className:"popup-video",children:(0,a.jsx)("i",{className:"fa-solid fa-play"})})}),(0,a.jsx)("div",{className:"about-thumb-shape d-none d-md-block",children:(0,a.jsx)("img",{src:l,alt:"about-shape"})})]})}),(0,a.jsx)("div",{className:"col-xl-6 col-lg-12 col-12",children:(0,a.jsxs)("div",{className:"about-content ml-60 mb-60",children:[(0,a.jsxs)("div",{className:"tp-section",children:[(0,a.jsx)("span",{className:"tp-section__sub-title left-line mb-25",children:c}),(0,a.jsx)("h3",{className:"tp-section__title mb-45",children:o}),(0,a.jsx)("i",{children:d}),(0,a.jsx)("p",{className:" mr-20 mb-35",children:m})]}),(0,a.jsx)("div",{className:"about-content__btn",children:(0,a.jsx)(n(),{href:"/src/pages/about",className:"tp-btn",children:h})})]})})]})})}),(0,a.jsx)("div",{className:"cta-area pt-75 ",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("div",{className:"tp-cta-bg p-relative theme-light-bg pt-65 pb-70",style:{backgroundImage:"url(".concat(x,")")},children:(0,a.jsxs)("div",{className:"cta-content ml-90",children:[(0,a.jsx)("div",{className:"tp-section",children:(0,a.jsx)("span",{className:"tp-section__sub-title sub-title-white left-line-white mb-20",children:j})}),(0,a.jsx)("h2",{className:"cta-title mb-30",children:g}),(0,a.jsx)("div",{className:"cta-btn",children:(0,a.jsx)("button",{className:"tp-btn-second",children:b})}),(0,a.jsx)("div",{className:"cta-shape d-none d-md-block",children:(0,a.jsx)("img",{src:u,alt:"cta-logo-shape"})})]})})})})})})]}),(0,a.jsx)(r.Z,{isVideoOpen:p,setIsVideoOpen:f,videoId:"d8w5SICzzxc"})]})};let d=[{id:1,class:"col-lg-4 col-md-6",img:"/assets/img/gallery/gallery-thumb-bg-1.jpg",title:"COVID ANALYSIS"},{id:2,class:"col-lg-8 col-md-6 d-none d-lg-block",img:"/assets/img/gallery/gallery-thumb-bg-2.jpg",title:"Hiv Analysis & Testing"},{id:3,class:"col-lg-4 col-md-6",img:"/assets/img/gallery/gallery-thumb-bg-3.jpg",title:"Zyrtec Analysis"},{id:4,class:"col-lg-4 col-md-6",img:"/assets/img/gallery/gallery-thumb-bg-4.jpg",title:"Asthma Apply"},{id:5,class:"col-lg-4 col-md-6",img:"/assets/img/gallery/gallery-thumb-bg-5.jpg",title:"Urine ANALYSIS"},{id:6,class:"col-lg-8 col-md-12 d-lg-none",img:"/assets/img/gallery/gallery-thumb-bg-2.jpg",title:"Urine ANALYSIS"}];var m=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"gallery-area pb-50",children:[(0,a.jsx)("div",{className:"gallery-bg-title theme-light-bg tp-box-space pt-125 pb-200 mr-30 ml-30",style:{backgroundImage:"url(/assets/img/shape/shape-bg-06.png)"},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"tp-section text-center",children:[(0,a.jsx)("span",{className:"tp-section__sub-title sub-title-white left-line-white right-line-white mb-25",children:"Work Gallery"}),(0,a.jsx)("h3",{className:"tp-section__title title-white mb-80",children:"Bioxlab Gallery"})]})})})})}),(0,a.jsx)("div",{className:"gallery-item-bg",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"row",children:d.map(e=>(0,a.jsx)("div",{className:e.class,children:(0,a.jsxs)("div",{className:"gallery-item p-relative mb-30",children:[(0,a.jsx)("img",{src:e.img,alt:"gallery-thumb"}),(0,a.jsxs)("div",{className:"gallery-item__content",children:[(0,a.jsx)("h4",{className:"gallery-item__title",children:(0,a.jsx)(n(),{href:"/portfolio-details",children:e.title})}),(0,a.jsxs)("span",{children:[(0,a.jsx)("i",{className:"fa-solid fa-tag"}),(0,a.jsx)(n(),{href:"/services-details",children:"Genetics"})]})]})]})},e.id))}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("div",{className:"gallery-btn text-center mt-30",children:(0,a.jsx)(n(),{href:"/portfolio-details",className:"tp-btn",children:"Explore More"})})})})]})})]})}),h=i(30719),x=i(965);let j=[{id:1,title:(0,a.jsxs)(a.Fragment,{children:["Our Passion is to ",(0,a.jsx)("br",{})," Give you Better ",(0,a.jsx)("br",{})," Service"]}),des:(0,a.jsxs)(a.Fragment,{children:["Your full service lab for clinical trials. Our mission is to ensure the"," ",(0,a.jsx)("br",{})," generation of accurate and precise findings"]}),appointment:"Appointment",about:"About us",img_1:"/assets/img/slider/slider-bg-1.png",img_2:"/assets/img/slider/slider-bg-2.png"},{id:2,title:(0,a.jsxs)(a.Fragment,{children:["Our Passion is to ",(0,a.jsx)("br",{})," Give you Better ",(0,a.jsx)("br",{})," Service"]}),des:(0,a.jsxs)(a.Fragment,{children:["Your full service lab for clinical trials. Our mission is to ensure the"," ",(0,a.jsx)("br",{})," generation of accurate and precise findings"]}),appointment:"Appointment",about:"About us",img_1:"/assets/img/slider/slider-bg-3.png",img_2:"/assets/img/slider/slider-bg-2.png"}],g={slidesPerView:1,effect:"fade",autoplay:{delay:4e3,disableOnInteraction:!0},navigation:{nextEl:".slider-n",prevEl:".slider-p"}},b=[{name:"facebook",link:"http://facebook.com",target:"_blank",icon:"fab fa-facebook-f",color:"facebook-2"},{name:"youtube",link:"https://www.youtube.com/",target:"_blank",icon:"fab fa-youtube",color:"youtub-2"},{name:"twitter",link:"http://twitter.com",target:"_blank",icon:"fab fa-twitter",color:"twitter-2"}];var u=()=>{let[e,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{s(!0)},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("section",{className:"slider-area slider-tp-top pt-100 p-relative",children:[(0,a.jsx)("div",{className:"slider-social",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 col-md-10 d-none d-md-block",children:(0,a.jsx)("div",{className:"slider-content__social",children:b.map((e,s)=>(0,a.jsxs)(n(),{target:e.target,className:e.color,href:e.link,children:[(0,a.jsx)("i",{className:e.icon})," ",e.name]},s))})}),(0,a.jsx)("div",{className:"col-lg-6 col-md-2 col-12 d-none d-md-block",children:(0,a.jsxs)("div",{className:"slider-content__arrow d-flex align-items-center",children:[(0,a.jsx)("div",{className:"slider-p",children:(0,a.jsx)("i",{className:"fa-regular fa-arrow-left"})}),(0,a.jsx)("div",{className:"slider-n",children:(0,a.jsx)("i",{className:"fa-regular fa-arrow-right"})})]})})]})})}),(0,a.jsx)(h.tq,{modules:[x.W_],loop:e,...g,className:"swiper-container tp-slider slider-active",children:j.map(e=>(0,a.jsx)(h.o5,{children:(0,a.jsx)("div",{className:"swiper-slide bg-white",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-lg-6 col-md-12 col-12 order-2 order-lg-1",children:(0,a.jsxs)("div",{className:"slider-content pt-60",children:[(0,a.jsx)("h2",{className:"slider-content__title mb-45",children:e.title}),(0,a.jsx)("p",{children:e.des}),(0,a.jsxs)("div",{className:"slider-content__btn mb-165",children:[(0,a.jsx)(n(),{className:"tp-btn",href:"/src/pages/contact",children:e.appointment}),(0,a.jsx)(n(),{className:"tp-btn-second ml-25",href:"/src/pages/about",children:e.about})]})]})}),(0,a.jsxs)("div",{className:"col-lg-6 col-md-6 col-12 order-1 order-lg-2",children:[(0,a.jsx)("div",{className:"slider-content__bg",children:(0,a.jsx)("img",{src:e.img_1,alt:"slider-img"})}),(0,a.jsx)("div",{className:"slider-content__shape d-none d-md-block",children:(0,a.jsx)("img",{src:e.img_2,alt:"slider-shape"})})]})]})})})},e.id))})]})})},p=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"news-letter-area pt-110 pb-110 news-round-shape p-relative tp-box-space mr-30 ml-30 theme-light-bg fix",style:{backgroundImage:'url("/assets/img/shape/shape-bg-05.png")'},children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row justify-content-center",children:(0,a.jsx)("div",{className:"col-xl-6 col-lg-8 col-md-10 col-12",children:(0,a.jsxs)("div",{className:"newsletter-content text-center",children:[(0,a.jsx)("h3",{className:"newsletter-title mb-15",children:"Newslatter"}),(0,a.jsx)("span",{children:"#Subscribe newsletter for get every update"}),(0,a.jsx)("div",{className:"newsletter-form p-relative ml-10 mr-10",children:(0,a.jsxs)("form",{action:"#",children:[(0,a.jsx)("input",{type:"email",placeholder:"info.yourwebmail@gmail.com"}),(0,a.jsxs)("button",{className:"newsletter-btn",children:["Subscribe",(0,a.jsx)("i",{className:"fa-solid fa-paper-plane"})]})]})})]})})})})})});let f=[{id:1,icon:"flaticon-hemoglobin-test-meter",title:"Hemoglobin Test",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"",color:"",ml:0},{id:2,icon:"flaticon-blood-test",title:"Blood Testing",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"pink-icon",color:"pink-hexa",ml:20},{id:3,icon:"flaticon-biochemistry",title:"BIOCHEMISTRY",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"green-icon",color:"green-hexa",ml:35},{id:4,icon:"flaticon-dna-1",title:"Microbiology",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"sky-icon",color:"sky-hexa",ml:55},{id:5,icon:"flaticon-heart",title:"Histopatology",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"green-icon",color:"green-hexa",ml:0},{id:6,icon:"flaticon-dna",title:"Biochemistry",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"sky-icon",color:"sky-hexa",ml:20},{id:7,icon:"flaticon-dna-1",title:"Genetics",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"",color:"",ml:35},{id:8,icon:"flaticon-ct-scan",title:"Blood Testing",des:(0,a.jsxs)(a.Fragment,{children:["Nam eget dui vel quam sodales ",(0,a.jsx)("br",{}),"semper quis porttitor tortor. Vivamus ",(0,a.jsx)("br",{}),"quis ex nulla."]}),color_icon:"pink-icon",color:"pink-hexa",ml:55}];var v=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"services-area pt-120 pb-75",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row align-items-end  mb-45",children:[(0,a.jsx)("div",{className:"col-lg-5 col-md-12 col-12",children:(0,a.jsxs)("div",{className:"tp-section",children:[(0,a.jsx)("span",{className:"tp-section__sub-title left-line mb-20",children:"our Services"}),(0,a.jsx)("h3",{className:"tp-section__title mb-30",children:"Service Area"})]})}),(0,a.jsx)("div",{className:"col-lg-7 col-md-12 col-12",children:(0,a.jsx)("div",{className:"services-link text-md-start text-lg-end mb-30",children:(0,a.jsxs)("span",{children:["Well ensure you always get the best results:",(0,a.jsxs)(n(),{href:"/src/pages/contact",children:["Contact us",(0,a.jsx)("i",{className:"fa-solid fa-arrow-right"})]})]})})})]}),(0,a.jsx)("div",{className:"row",children:f.map(e=>(0,a.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"services-item tp-services-item mb-50 ml-".concat(e.ml),children:[(0,a.jsx)("div",{className:"services-item__icon ".concat(e.color_icon," mb-30"),children:(0,a.jsx)("i",{className:e.icon})}),(0,a.jsxs)("div",{className:"services-item__content",children:[(0,a.jsx)("h5",{className:"services-item__tp-title mb-30",children:(0,a.jsx)(n(),{href:"/services-details",children:e.title})}),(0,a.jsx)("p",{children:e.des})]})]})},e.id))})]})})}),N=[{id:1,img:"/assets/img/team/kara-teller.png",name:"Cameron Williamson",title:"Genetic Specialist",social_links:[{link:"http://facebook.com",target:"_blank",icon:"fab fa-facebook-f",name:"Facebook"},{link:"http://twitter.com",target:"_blank",icon:"fab fa-twitter",name:"Twitter"},{link:"https://www.instagram.com/",target:"_blank",icon:"fa-brands fa-instagram",name:"instagram"},{link:"https://www.basketball.com/",target:"_blank",icon:"fa-light fa-basketball",name:"basketball"}]},{id:2,img:"/assets/img/team/kara-teller.png",name:"Savannah Nguyen",title:"Microbiology Expart",social_links:[{link:"http://facebook.com",target:"_blank",icon:"fab fa-facebook-f",name:"Facebook"},{link:"http://twitter.com",target:"_blank",icon:"fab fa-twitter",name:"Twitter"},{link:"https://www.instagram.com/",target:"_blank",icon:"fa-brands fa-instagram",name:"instagram"},{link:"https://www.basketball.com/",target:"_blank",icon:"fa-light fa-basketball",name:"basketball"}]},{id:3,img:"/assets/img/team/kara-teller.png",name:"Darlene Robertson",title:"Genetic Specialist",social_links:[{link:"http://facebook.com",target:"_blank",icon:"fab fa-facebook-f",name:"Facebook"},{link:"http://twitter.com",target:"_blank",icon:"fab fa-twitter",name:"Twitter"},{link:"https://www.instagram.com/",target:"_blank",icon:"fa-brands fa-instagram",name:"instagram"},{link:"https://www.basketball.com/",target:"_blank",icon:"fa-light fa-basketball",name:"basketball"}]},{id:4,img:"/assets/img/team/kara-teller.png",name:"Marvin McKinney",title:"MEDICAL DOCTOR",social_links:[{link:"http://facebook.com",target:"_blank",icon:"fab fa-facebook-f",name:"Facebook"},{link:"http://twitter.com",target:"_blank",icon:"fab fa-twitter",name:"Twitter"},{link:"https://www.instagram.com/",target:"_blank",icon:"fa-brands fa-instagram",name:"instagram"},{link:"https://www.basketball.com/",target:"_blank",icon:"fa-light fa-basketball",name:"basketball"}]}];let w={slidesPerView:4,autoplay:{delay:6e3},breakpoints:{1400:{slidesPerView:4},1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},navigation:{nextEl:".team-nxt",prevEl:".team-prv"}};var _=()=>{let[e,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{s(!0)},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"team-area pb-55",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"p-relative",children:[(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"tp-section text-center",children:[(0,a.jsx)("span",{className:"tp-section__sub-title left-line right-line mb-25",children:"OUr Team"}),(0,a.jsx)("h3",{className:"tp-section__title mb-70",children:"Our Specialist"})]})})}),(0,a.jsx)(h.tq,{...w,modules:[x.W_],loop:e,className:"swiper-container tp-team-active",children:N.map(e=>(0,a.jsx)(h.o5,{children:(0,a.jsx)("div",{className:"swiper-slide",children:(0,a.jsxs)("div",{className:"team-item mb-30",children:[(0,a.jsx)("div",{className:"team-item__thumb mb-40",children:(0,a.jsx)("img",{src:e.img,alt:"team-thumb"})}),(0,a.jsxs)("div",{className:"team-item__content",children:[(0,a.jsx)("h5",{className:"team-item__title mb-15",children:(0,a.jsx)(n(),{href:"/src/pages/team-details",children:e.name})}),(0,a.jsx)("span",{children:e.title}),(0,a.jsx)("div",{className:"team-item__social-info",children:e.social_links.map((e,s)=>(0,a.jsx)("a",{href:e.link,target:e.target,children:(0,a.jsx)("i",{className:e.icon})},s))})]})]})})},e.id))}),(0,a.jsxs)("div",{className:"team-arrow",children:[(0,a.jsx)("div",{className:"team-prv",children:(0,a.jsx)("i",{className:"fa-regular fa-arrow-left"})}),(0,a.jsx)("div",{className:"team-nxt",children:(0,a.jsx)("i",{className:"fa-regular fa-arrow-right"})})]})]})})})})};let k=[{id:1,img:"/assets/img/blog/blog-thumb-04.jpg",title:"Coronavirus global health emergency",des:"Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",date:"Dec 28, 2022",views:"1,526 views"},{id:2,img:"/assets/img/blog/blog-thumb-05.jpg",title:"The Healthy Ageing 50 organ (Secound Part)",des:"Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",date:"Dec 28, 2022",views:"1,526 views"},{id:3,img:"/assets/img/blog/blog-thumb-06.jpg",title:"The Healthy Ageing 50 organ (First Part)",des:"Nam eget dui vel quam sodales semper quis porttitor tortor. Vivamus quis ex nulla ...",date:"Dec 28, 2022",views:"1,526 views"}],y={slidesPerView:3,spaceBetween:30,autoplay:{delay:4e3,disableOnInteraction:!0},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:2},768:{slidesPerView:2},576:{slidesPerView:1},0:{slidesPerView:1}},navigation:{nextEl:".blog-nxt",prevEl:".blog-prv"}};var F=()=>{let[e,s]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{s(!0)},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("section",{className:"blog-area pt-125 pb-120",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col-md-8 col-12",children:(0,a.jsxs)("div",{className:"tp-section",children:[(0,a.jsx)("span",{className:"tp-section__sub-title left-line mb-25",children:"Waht’s New"}),(0,a.jsx)("h3",{className:"tp-section__title mb-65",children:"Blog & Article"})]})}),(0,a.jsx)("div",{className:"col-md-4 col-12",children:(0,a.jsxs)("div",{className:"blog-arrow d-flex align-items-center",children:[(0,a.jsx)("div",{className:"blog-prv",children:(0,a.jsx)("i",{className:"fa-regular fa-arrow-left"})}),(0,a.jsx)("div",{className:"blog-nxt",children:(0,a.jsx)("i",{className:"fa-regular fa-arrow-right"})})]})})]}),(0,a.jsx)(h.tq,{modules:[x.W_],loop:e,...y,className:"swiper-container blog-active",children:k.map(e=>(0,a.jsx)(h.o5,{children:(0,a.jsx)("div",{className:"pb-50",children:(0,a.jsxs)("div",{className:"blog-item",children:[(0,a.jsx)("div",{className:"blog-item__thumb fix",children:(0,a.jsx)("img",{src:e.img,alt:"blog-thumb"})}),(0,a.jsxs)("div",{className:"blog-item__content",children:[(0,a.jsx)("h5",{className:"blog-item__title mb-15",children:(0,a.jsx)(n(),{href:"/blog-details",children:e.title})}),(0,a.jsx)("p",{children:e.des}),(0,a.jsx)("div",{className:"blog-item__date-info",children:(0,a.jsxs)("ul",{className:"d-flex align-items-center",children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"fa-light fa-clock"}),"Dec 28, 2022"]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"fa-light fa-eye"}),"1,526 views"]})]})})]})]})})},e.id))}),(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-lg-12",children:(0,a.jsx)("div",{className:"blog-link text-center",children:(0,a.jsxs)("span",{children:["Join our Community for Get Update :",(0,a.jsxs)(n(),{href:"/blog-details",children:["Join our Community",(0,a.jsx)("i",{className:"fa-regular fa-arrow-right"})]})]})})})})]})})})},q=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{}),(0,a.jsx)(o,{}),(0,a.jsx)(v,{}),(0,a.jsx)(m,{}),(0,a.jsx)(l.Z,{cls:"pt-80 pb-100"}),(0,a.jsx)(_,{}),(0,a.jsx)(F,{}),(0,a.jsx)(p,{})]}),S=i(36911),A=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"footer-area pt-105",children:[(0,a.jsx)("div",{className:"tp-footer-top pb-25",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,a.jsxs)("div",{className:"tp-footer-widget footer-2-col-1 mb-40",children:[(0,a.jsxs)("div",{className:"tp-footer-widget__content mb-95",children:[(0,a.jsx)("i",{children:"FEEL FREE TO CONTACT US"}),(0,a.jsx)("h4",{className:"tp-footer-widget__contact mb-20",children:(0,a.jsx)("a",{href:"tel:61383766284",children:"61 383 766 284"})}),(0,a.jsx)("a",{href:"mailto:noreply@envato.com",children:"noreply@envato.com"})]}),(0,a.jsxs)("div",{className:"tp-footer-widget__sub-sec",children:[(0,a.jsx)("span",{className:"tp-footer-widget__sub-title mb-5",children:"Career"}),(0,a.jsxs)("p",{children:["Nam eget dui vel quam sodales semper quis porttitor",(0,a.jsx)("br",{})," tortor. Vivamus quis ex nulla ...Nam eget dui vel quam ",(0,a.jsx)("br",{})," sodales semper quis porttitor tortor."]})]})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,a.jsxs)("div",{className:"tp-footer-widget footer-2-col-2 mb-40",children:[(0,a.jsx)("span",{className:"tp-footer-widget__title mb-15",children:"Useful links"}),(0,a.jsx)("div",{className:"tp-footer-widget__links mb-35",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/src/pages/contact",children:"Contact us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/src/pages/about",children:"Help & About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/shop-details",children:"Shipping & Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/",children:"Refund Policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/src/pages/about",children:"About us"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n(),{href:"/services-details",children:"Services"})})]})}),(0,a.jsxs)("div",{className:"tp-footer-widget__sub-sec",children:[(0,a.jsx)("span",{className:"tp-footer-widget__sub-title mb-10",children:"Opening Hours"}),(0,a.jsx)("div",{className:"tp-footer-widget__list",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Office Hours: 8AM - 11PM"}),(0,a.jsx)("li",{children:"Office Hours: 8AM - 11PM"}),(0,a.jsx)("li",{children:"Sunday - Wekend Day"})]})})]})]})}),(0,a.jsx)("div",{className:"col-lg-2 col-md-6",children:(0,a.jsxs)("div",{className:"tp-footer-widget footer-2-col-3 mb-40",children:[(0,a.jsx)("span",{className:"tp-footer-widget__title mb-15",children:"Customer Service"}),(0,a.jsx)("div",{className:"tp-footer-widget__links",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Orders"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Product"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"shop-details",children:"Shipping & Returns"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Addresses"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Account details"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Shop"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Lost password"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Account"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Downloads"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Orders"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Logout"})})]})})]})}),(0,a.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,a.jsxs)("div",{className:"tp-footer-widget footer-2-col-4 mb-40",children:[(0,a.jsx)("span",{className:"tp-footer-widget__title mb-15",children:"Contact Info"}),(0,a.jsx)("div",{className:"tp-footer-widget__links mb-120",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Ta-134/A, Gulshan Badda Link "}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"tel:(+880)15569569365",children:"(+880)155 69569 365"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"mailto:support@rstheme.com",children:"support@rstheme.com"})}),(0,a.jsx)("li",{children:"Office Hours: 8AM - 11PM"}),(0,a.jsx)("li",{children:"Sunday - Wekend Day"})]})}),(0,a.jsxs)("div",{className:"tp-footer-widget__social fw-social",children:[(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fa-brands fa-twitter"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fa-brands fa-instagram"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fa-light fa-basketball"})}),(0,a.jsx)("a",{href:"#",children:(0,a.jsx)("i",{className:"fa-brands fa-youtube"})})]})]})})]})})}),(0,a.jsx)("div",{className:"footer-area-bottom fw-border",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-12 col-12",children:(0,a.jsx)("div",{className:"footer-widget__copyright copyright-white",children:(0,a.jsxs)("span",{children:["\xa9 Copyright \xa9",new Date().getFullYear(),(0,a.jsx)(n(),{href:"/",children:" Theme_pure"}),".",(0,a.jsx)("i",{children:" All Rights Reserved Copyright"})]})})}),(0,a.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-12 col-12",children:(0,a.jsx)("div",{className:"footer-widget__copyright-info info-direction",children:(0,a.jsxs)("ul",{className:"d-flex align-items-center",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Terms and conditions"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Privacy policy"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",children:"Pricing"})})]})})})]})})})]})})}),C=i(62287),T=e=>{let{children:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C.Z,{}),(0,a.jsx)("main",{children:s}),(0,a.jsx)(A,{})]})},V=i(77840),E=()=>(0,a.jsx)(V.Z,{children:(0,a.jsxs)(T,{children:[(0,a.jsx)(S.Z,{pageTitle:"Home Two"}),(0,a.jsx)(q,{})]})})},22721:function(e){e.exports={logoContainer:"Logo_logoContainer__ceFOE",text:"Logo_text__HJ3NT",isSidebarVer:"Logo_isSidebarVer__ljYd5"}},82244:function(e){e.exports={headerTopMob:"header-two_headerTopMob__hSD44"}}},function(e){e.O(0,[89,239,53,888,774,179],function(){return e(e.s=62789)}),_N_E=e.O()}]);