import React from "react"
import DescriptionComponent from "@/common/DescriptionComponent"
import {formatNumber} from "@/common/helpers"
import {Category} from "@/common/types"



const video_data_src_all: Array<Video_data_src_all> = [
  {
    id: 1,
    mvtubeId: 'JmW4Pw6XXqPRVcg',
    title: 'Submission Grappling. Part 1. June, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc01-submission-grappling-tournament-1-301844',
  },
  {
    id: 2,
    mvtubeId: 'S1zzA3flUeKrKtt',
    title: 'Submission Grappling. Part 2. June, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc02-submission-grappling-tournament-2-301832'
  },
  {
    id: 3,
    mvtubeId: 'iOxRsL6uO8d52dP',
    title: 'Beach Wrestling. Mixed Tournament. 2010',
    category: 'MIXED WRESTLING',
    patreonId: 'nc03wm-beach-wrestling-mixed-tournament-301818'
  },
  {
    id: 4,
    mvtubeId: 'wDGeP3GNRuHsFH8',
    title: 'Submission Grappling. Christmas Cup 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc04-christmas-cup-2011-tournament-on-301595'
  },
  {
    id: 5,
    mvtubeId: 'oLCqqIRC23PwJfT',
    mvtubeId2: 'm3mBV9sCaMf7sej',
    title: 'Villian vs Tais. Mixed Wrestling. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc05a-villain-vs-tais-mixed-wrestling-1-301564',
    patreonId2: 'nc05b-villain-vs-tais-mixed-wrestling-2-301581'
  },
  {
    id: 6,
    mvtubeId: 'BxxeGAKl2CZ8ZP9',
    title: 'Maria Rylyova vs Tais. Armwrestling and Wrestling',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc06-maria-rylyova-vs-tais-submission-301557'
  },
  {
    id: 7,
    mvtubeId: 'BwmPc6arNpTL6BV',
    title: 'Alex vs Tais. Extreme fight. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc07-alex-vs-tais-extreme-fight-2011-301540',
  },
  {
    id: 8,
    mvtubeId: 'xVPlVJFlkPYP4wy',
    title: 'Women\'s Beach Tournament. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc08-beach-tournament-submission-june-298410'
  },
  {
    id: 9,
    mvtubeId: 'xaGx13rwQbv9csS',
    title: 'MMA tournament “Christmas Cup 2012',
    category: 'MMA',
    patreonId: 'nc09-mma-tournament-christmas-cup-2012-298352'
  },
  {
    id: 10,
    mvtubeId: 'lpiBTJexnhvx3dL',
    title: 'Mixed Wrestling. Best Fights. Part 1. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc10-mixed-wrestling-best-fights-part-1-298291'
  },
  {
    id: 11,
    mvtubeId: '9Ph7IFLV45VQ9Dp',
    title: 'Alex vs Elena. Beach Wrestling. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc11-alex-vs-gladiatriks-mixed-beach-298265'
  },
  {
    id: 12,
    mvtubeId: 'tE6hsv92caOcSkW',
    title: 'Submission Grappling. Tournament. April, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc12-submission-grappling-tournament-298243'
  },
  {
    id: 13,
    mvtubeId: 'dsB3vypcBjPcfjm',
    title: 'Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011',
    category: "BOXING",
    patreonId: 'nc13-valentina-perfilyeva-vs-nadezhda-298205'
  },
  {
    id: 14,
    mvtubeId: 'Guhl5a5KFy8BUD8',
    title: 'Two men against one woman. Part 1. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc14-1-two-men-against-one-woman-mixed-1-298161'
  },
  {
    id: 15,
    title: 'Two men against one woman. Part 2. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc15-two-men-against-one-woman-mixed-on-298110'
  },
  {
    id: 16,
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc16-elena-vasilyeva-vs-tais-submission-296712'
  },
  {
    id: 17,
    title: 'MMA and Submission Grappling. February, 2012',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc17-mma-and-submission-grappling-2012-296635'
  },
  {
    id: 18,
    title: 'MMA. Kara Teller vs Darya. Balina and Tais. May, 2012',
    category: 'MMA',
    patreonId: 'nc18-mma-kara-teller-vs-darya-balina-and-296597'
  },
  {
    id: 19,
    title: 'Varvara Akulova vs Tais. Submission Grappling. 2012',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc19-varvara-akulova-vs-tais-submission-296544'
  },
  {
    id: 20,
    title: 'MMA. Kara Teller vs Darya. Balina and Tais. May, 2012',
    category: 'MMA',
    patreonId: 'nc20-mma-yulia-fedutenko-vs-kara-teller-296522'
  },
  {
    id: 21,
    title: 'MMA. Darya Balina vs Olga. July, 2012',
    category: 'MMA',
    patreonId: 'nc21-mma-darya-balina-vs-olga-july-2012-296468'
  },
  {
    id: 22,
    title: 'Irina and Elena vs Villian. Mixed Wrestling. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc22-irina-and-elena-vs-villian-mixed-296366'
  },
  {
    id: 23,
    title: 'Irina (Vlasta) vs Tais. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc23-irina-vlasta-vs-tais-submission-may-296334'
  },
  {
    id: 24,
    title: 'Lyudmila vs Tais Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc24-lyudmila-vs-tais-submission-october-296220'
  },
  {
    id: 25,
    title: 'Mixed Wrestling. Best Fights. Part 2. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc25-mixed-wrestling-best-fights-part-2-296203'
  },
  {
    id: 26,
    title: 'Female Beach Wrestling. Part 1. June, 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc26-female-beach-wrestling-part-1-june-296112'
  },
  {
    id: 27,
    title: 'Female Beach Wrestling Part 2. June, 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc27-female-beach-wrestling-part-2-june-296064'
  },
  {
    id: 28,
    title: 'Mixed Wrestling. Best Fights. Part 3. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc28-mixed-wrestling-best-fights-part-3-296037'
  },
  {
    id: 29,
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2013',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc29-elena-vasilyeva-vs-tais-submission-296001'
  },
  {
    id: 30,
    title: 'Mixed Wrestling. Best Fights. Part 4. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc30-mixed-wrestling-best-fights-part-4-295973'
  },
  {
    id: 31.1,
    title: 'Mixed Wrestling. Best Fights. Part 5.1. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc31-1-mixed-wrestling-best-fights-part-295438'
  },
  {
    id: 31.2,
    title: 'Mixed Wrestling. Best Fights. Part 5.2. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc31-2-mixed-wrestling-best-fights-part-295964'
  },
  {
    id: 32,
    title: 'Mixed Wrestling. Artem vs Tais. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc32-mixed-wrestling-artem-vs-tais-2013-295426'
  },
  {
    id: 33,
    title: 'Crossfit tournament. Submission Grappling. 2013',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc33-crossfit-tournament-submission-2013-295417'
  },
  {
    id: 34,
    title: 'Mixed Wrestling. Alexander and Villian against Tais. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc34-mixed-wrestling-alexander-and-tais-295404'
  },
  {
    id: 35,
    title: 'Lidiya Oslopovskih vs Tais. Pins matches. 2013',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc35-lidiya-oslopovskih-vs-tais-pins-295364'
  },
  {
    id: 36,
    title: 'Tournament between beginners. Part 1. Preliminary fights. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc36-tournament-between-beginners-part-1-295379'
  },
  {
    id: 37,
    title: 'Tournament between beginners. Part 2. Final fights. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc37-tournament-between-beginners-part-2-295319'
  },
  {
    id: 38,
    title: 'Mixed Wrestling Alexander vs Tais. 2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc38-mixed-wrestling-alexander-against-295273'
  },
  {
    id: 39,
    title: 'Mixed Wrestling Villian vs Tais. Part 1. 2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc39-mixed-wrestling-villian-vs-tais-1-295259'
  },
  {
    id: 40,
    title: 'Mixed Wrestling Villian vs Tais. Part 2. 2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc40-mixed-wrestling-villian-vs-tais-2-295238'
  },
  {
    id: 41,
    title: 'Mixed Wrestling Elena vs Tais. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc41-submission-grappling-tournament-1-295210'
  },
  {
    id: 42,
    title: 'Mixed Wrestling. Tournament. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc42-submission-grappling-tournament-2-295188'
  },
 /* {
    id: 43,
    title: 'Lidiya Oslopovskih vs Tais. Final of the Cup. 2014',
    category: 'SUBMISSION WRESTLING',
  },*/ //todo v2: this unallocated
  {
    id: 44,
    title: 'Training Submission Wrestling. November, 2016',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc44-maslenitsa-festival-2016-pins-and-290002'
  },
  {
    id: 45,
    title: 'Braivs vs Alyona 11.10.2016',
    category: 'MIXED WRESTLING',
    patreonId: 'nc45-braivs-vs-alyona-13-10-2016-294185',
    duration: 15,
  },
  {
    id: 46,
    title: 'Mixed Wrestling. Training. 2017',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc46-alena-kurmandi-30-03-2017-06-04-294096'
  },
  {
    id: 47,
    title: 'Women’s Submission Wrestling. Tournament. 2017',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc47-competitions-at-maslenitsa-16-02-294121'
  },
  {
    id: 48,
    title: 'Training Submission Wrestling. August, 2017',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc48-competitions-spring-2017-294141'
  },
  {
    id: 49,
    title: 'Braivs vs Alyona collection 2016-2017',
    category: 'MIXED WRESTLING',
    patreonId: 'nc49-braivs-vs-alyona-collection-2016-293193',
    duration: 56,
  },
  {
    id: 50,
    title: 'Tais vs Braivs collection 2014-2017',
    category: 'MIXED WRESTLING',
    patreonId: 'nc50-braivs-vs-tais-collection-2014-2017-290070',
    duration: 23,
  },
  {
    id: 51,
    title: 'Kara, Darya, Tais. 08.05.2012',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc51-kara-darya-tais-2012-290104',
  },
  {
    id: 52,
    title: 'Braivs vs MMA girl. 06.10.2016',
    category: 'MIXED WRESTLING',
    patreonId: 'nc52-braivs-vs-mma-girl-06-10-2016-290101',
  },
  {
    id: 53,
    title: 'Tais vs Alexsander. 05.08.2012',
    category: 'MIXED WRESTLING',
    patreonId: 'nc53-tais-vs-alexsander-05-08-2012-290083',
  },
  {
    id: 54,
    title: 'Tais vs Alyona collection 2016',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc54-tais-vs-alyona-collection-2016-289972',
  },
  {
    id: 55,
    title: '1 vs 2. Tais vs Kristina & Natasha. Pins. 25.05.2015',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc55-1-vs-2-tais-vs-kristina-natasha-25-289954',
  },
  {
    id: 56,
    title: 'Tais, Braivs, Nastya. 10.02.2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc56-tais-braivs-nastya-10-02-2014-289942',
  },
  {
    id: 57,
    title: 'Tais vs Villian. 16.02.2017',
    category: 'MIXED WRESTLING',
    patreonId: 'nc57-tais-vs-villian-16-02-2017-289868',
  },
  {
    id: 58,
    title: 'Namazon girls vs Newcomers. 2015',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc58-namazon-girls-vs-newcomers-2015-289819',
  },
  {
    id: 59,
    title: 'Alex vs JudoGirlAmrita',
    category: 'MIXED WRESTLING',
    patreonId: 'nc59-fm-alex-vs-157250136',
    isPost: true,
    duration: 15,
  },
  {
    id: 60,
    title: 'Siya vs Skuf - round 1',
    category: 'MIXED WRESTLING',
    patreonId: 'nc60-fm-siya-vs-157276901',
    isPost: true,
    isClickable: true,
    mvtubeId: 'k7IAbybh84TnQro',
    duration: 30,
  },
  {
    id: 61,
    title: 'Siya vs Skuf - round 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc61-fm-siya-vs-157346614',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4f/NC61_FM_Siya_vs_Skuf_round2_preview.mp4',
      'https://files.catbox.moe/umbng1.mp4'
    ],
    duration: 19,
  },
  {
    id: 62,
    title: 'Siya vs Tryapka',
    category: 'MIXED WRESTLING',
    patreonId: 'nc62-siya-vs-157533888',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4g/NC62_Siya_vs_Tryapka_preview_v2.mp4',
      'https://files.catbox.moe/b050nq.mp4'
    ],
    duration: 21,
  },
  {
    id: 63,
    title: 'Siya vs Skuf - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc63-siya-vs-2-157655160',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4h/NC63_Siya_vs_Skuf_fight_2_preview.mp4',
      'https://files.catbox.moe/l1dtmv.mp4'
    ],
    duration: 20,
  },
  {
    id: 64,
    title: 'Siya in socks',
    category: 'MIXED WRESTLING',
    patreonId: 'nc64-siya-in-157720494',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4i/NC64_Siya_in_socks_preview2.mp4',
      'https://files.catbox.moe/iaqmqh.mp4'
    ],
    duration: 29,
  },
  {
    id: 65,
    title: 'Aizet vs Alex',
    category: 'MIXED WRESTLING',
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4j/NC65_Aizet_vs_Alex_preview.mp4',
      'https://files.catbox.moe/pew83m.mp4'
    ],
    patreonId: 'nc65-aizet-vs-157731669',
    isPost: true,
    duration: 14,
  },
  {
    id: 66,
    title: 'Aizet in kimono vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc66-aizet-in-vs-157950269',
    isPost: true,
    duration: 13,
  },
  {
    id: 67,
    title: 'Aizet vs Alex wrestling & shibari',
    category: 'MIXED WRESTLING',
    patreonId: 'nc67-aizet-vs-157954076',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4k/NC67_Aizet_vs_Alex_wrestling___shibari_preview.mp4',
      'https://files.catbox.moe/ri4qtu.mp4'
    ],
    duration: 11,
  },
  {
    id: 68,
    title: 'Angelina vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc68-angelina-vs-157976798',
    isPost: true,
    facebookPreview: 'https://www.facebook.com/share/v/1CswLNz6JV/',
    duration: 27,
  },
  {
    id: 69,
    title: 'Simona vs Alex - fight 1',
    category: 'MIXED WRESTLING',
    patreonId: 'nc69-simona-vs-1-159381795',
    isPost: true,
    mvtubeId: 'hf4N7tVyhllOilh',
  },
  {
    id: 70,
    title: 'Simona vs Alex - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc70-simona-vs-2-159379562',
    isPost: true,
    mvtubeId: 'inMebeYw1MuozTy',
  },
  {
    id: 71,
    title: 'Simona vs Alex - fight 3',
    category: 'MIXED WRESTLING',
    patreonId: 'nc71-simona-vs-159383997',
    isPost: true,
    mvtubeId: '7wqmxpwcpwFygwE',
  },
  {
    id: 72,
    title: 'Nastya vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc72-nastya-vs-159387030',
    isPost: true,
    mvtubeId: 'CxURntYDiJAxxMP',
  },
  {
    id: 73,
    title: 'Candy vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc73-candy-vs-160023333',
    isPost: true,
    mvtubeId: 'k4AGMnMhkdF7sLe',
  },
  {
    id: 74,
    title: 'Radmila vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc74-radmila-vs-161324586',
    isPost: true,
    mvtubeId: 'aRxF6KkbZmKakBL',
  },
  {
    id: 75,
    title: 'Lilya vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc75-lilya-vs-161325573',
    isPost: true,
    mvtubeId: 'b3SlUDpxrasuPb4',
  },
  {
    id: 76,
    title: 'Sveta vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc76-sveta-vs-161326775',
    isPost: true,
    mvtubeId: 'Ah2b6fPeCDQYLEK',
  },
  {
    id: 77,
    title: 'Siya vs Cherviak',
    category: 'MIXED WRESTLING',
    patreonId: 'nc77-siya-vs-163923789',
    isPost: true,
    mvtubeId: '6lVdprR4br7llcK',
    duration: 14,
  },
  {
    id: 78,
    title: 'Sima vs Cherviak - fight 4',
    category: 'MIXED WRESTLING',
    patreonId: 'nc78-sima-vs-4-163971597',
    isPost: true,
    mvtubeId: 'zPz9hCrEOlAFt1D',
    duration: '20:36',
  },
  {
    id: 79,
    title: 'Sima vs Cherviak - fight 5',
    category: 'MIXED WRESTLING',
    patreonId: 'nc79-sima-vs-5-163972314',
    isPost: true,
    mvtubeId: 'PPllWWxHRkLvKoM',
    duration: 12,
  },
  {
    id: 80,
    title: 'Sima vs Alex - fight 6',
    category: 'MIXED WRESTLING',
    patreonId: 'nc80-sima-vs-6-163972724',
    isPost: true,
    mvtubeId: 'xE8kU2VK24l9M2p',
    duration: '12:55',
  },
  {
    id: 81,
    title: 'Amrita vs Alex - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc81-amrita-vs-2-163974393',
    isPost: true,
    mvtubeId: '7r8bTlQ6VqrDUHH',
    duration: '40:26'
  },
  {
    id: 82,
    title: 'Sveta vs Alex - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc82-sveta-vs-2-163975412',
    isPost: true,
    mvtubeId: 'EMD3fMHCLQHFTit',
    duration: '34:56'
  },
  {
    id: 83,
    title: 'Alfia vs Alex 2026',
    category: 'MIXED WRESTLING',
    patreonId: 'nc83-alfia-vs-166669247',
    isPost: true,
    mvtubeId: 'gn3wuoWncNBfO8m',
    duration: '36:12'
  },
  {
    id: 84,
    title: 'Rada vs Alex 2026 - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc84-rada-vs-2-166667619',
    isPost: true,
    mvtubeId: 'FClrxFsWpc7Wup3',
    duration: '24:21'
  }
];

// Add data to video_data_src
export const video_data: Array<Video_data> = video_data_src_all.reverse().map(video => {
  const formattedId = video.id < 10 ? `0${video.id}` : formatNumber(video.id)
  return {
    ...video,
    color: 'pink-icon',
    img: `/assets/img/video/NC${formattedId}.jpg`,
    des: video.des ?? '',
    description: video.description ?? function () {
      return <DescriptionComponent id={video.id} duration={video.duration}/>
    }
  }
})

export const video_data_blank: Video_data = {
  id: 0,
  color: '',
  img: '',
  category: "SUBMISSION WRESTLING",
  title: '',
  des: '',
  description: () => {
    return <></>
  },
  patreonId: ''
}

type Video_data_src_all = {
  id: number
  category: Category
  youtubeID?: string
  youtubeID2?: string
  title: string
  des?: string,
  description?: () => React.ReactNode
  patreonId: string
  /** Optional second Patreon product when the page has two separately purchasable videos. */
  patreonId2?: string
  /** If true, Patreon link is `patreon.com/posts/{patreonId}` instead of shop. */
  isPost?: boolean
  /** If true, second Patreon link uses `patreon.com/posts/{patreonId2}` instead of shop. */
  isPost2?: boolean
  /** If true, video page shows poster `img` linking to YouTube instead of an embed. */
  isClickable?: boolean
  /** One or more direct MP4 URLs; if several, the video page shows tabs (primary / alternative player). */
  directVideoUrl?: string | string[]
  /** MixedWrestling.Video embed id to render via iframe when set. */
  mvtubeId?: string
  /** Optional second MixedWrestling.Video embed shown below the primary player. */
  mvtubeId2?: string
  /** If set (non-empty), poster links to this URL with “click to see the video” overlay (e.g. Facebook). */
  facebookPreview?: string
  /** Full video duration: minutes as number, or exact time as string (e.g. '20:36'). */
  duration?: number | string
  /** i18n key under `video.details` — shows poster with overlay text instead of a video player. */
  willBeAvailableString?: string
}

export type Video_data = Video_data_src_all & {
  des: string,
  color: string
  img: string
  description: () => React.ReactNode
}

// todo: solve NC43
// todo: v2 after release: remake pictures size for video
// todo: v2: integrate shop into app
// todo: v2: fix video previews that is not available