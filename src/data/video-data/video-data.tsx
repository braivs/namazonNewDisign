import React from "react"
import DescriptionComponent from "@/common/DescriptionComponent"
import {formatNumber} from "@/common/helpers"
import {Category} from "@/common/types"



const video_data_src_all: Array<Video_data_src_all> = [
  {
    id: 1,
    youtubeID: 'G7RTYfRO4B4',
    title: 'Submission Grappling. Part 1. June, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc01-submission-grappling-tournament-1-301844',
  },
  {
    id: 2,
    youtubeID: 'Y_ixTzxIj44',
    title: 'Submission Grappling. Part 2. June, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc02-submission-grappling-tournament-2-301832'
  },
  {
    id: 3,
    youtubeID: 'sddvDSjafEY',
    title: 'Beach Wrestling. Mixed Tournament. 2010',
    category: 'MIXED WRESTLING',
    patreonId: 'nc03wm-beach-wrestling-mixed-tournament-301818'
  },
  {
    id: 4,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Submission Grappling. Christmas Cup 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc04-christmas-cup-2011-tournament-on-301595'
  },
  {
    id: 5,
    youtubeID: 'hGAZo2Ffrz4',
    title: 'Villian vs Tais. Mixed Wrestling. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc05a-villain-vs-tais-mixed-wrestling-1-301564'
  },
  {
    id: 6,
    youtubeID: 'ARwmIhW7goQ',
    title: 'Maria Rylyova vs Tais. Armwrestling and Wrestling',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc06-maria-rylyova-vs-tais-submission-301557'
  },
  {
    id: 7,
    youtubeID: 'sKIu0T-a4wE',
    title: 'Alex vs Tais. Extreme fight. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc07-alex-vs-tais-extreme-fight-2011-301540',
  },
  {
    id: 8,
    youtubeID: '_7gBrg1KOYw',
    title: 'Women\'s Beach Tournament. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc08-beach-tournament-submission-june-298410'
  },
  {
    id: 9,
    youtubeID: '8NnbhTgPKXE',
    title: 'MMA tournament “Christmas Cup 2012',
    category: 'MMA',
    patreonId: 'nc09-mma-tournament-christmas-cup-2012-298352'
  },
  {
    id: 10,
    youtubeID: 'xbguaf9YTGo',
    title: 'Mixed Wrestling. Best Fights. Part 1. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc10-mixed-wrestling-best-fights-part-1-298291'
  },
  {
    id: 11,
    youtubeID: '_T6qzHq5H60',
    title: 'Alex vs Elena. Beach Wrestling. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc11-alex-vs-gladiatriks-mixed-beach-298265'
  },
  {
    id: 12,
    youtubeID: 'tB47JzDQ-mc',
    title: 'Submission Grappling. Tournament. April, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc12-submission-grappling-tournament-298243'
  },
  {
    id: 13,
    youtubeID: '0-6S3nnMNYk',
    title: 'Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011',
    category: "BOXING",
    patreonId: 'nc13-valentina-perfilyeva-vs-nadezhda-298205'
  },
  {
    id: 14,
    youtubeID: 'mXLIzt6ZBFk',
    youtubeID2: 'dQjBmmyLnC0',
    title: 'Two men against one woman. Part 1. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc14-1-two-men-against-one-woman-mixed-1-298161'
  },
  {
    id: 15,
    youtubeID: 'piZ5J6Rierc',
    title: 'Two men against one woman. Part 2. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc15-two-men-against-one-woman-mixed-on-298110'
  },
  {
    id: 16,
    youtubeID: '-uNa-IIOOQk',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc16-elena-vasilyeva-vs-tais-submission-296712'
  },
  {
    id: 17,
    youtubeID: '93iT7iBJVik',
    title: 'MMA and Submission Grappling. February, 2012',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc17-mma-and-submission-grappling-2012-296635'
  },
  {
    id: 18,
    youtubeID: 'fYEVVlzkUsA',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais. May, 2012',
    category: 'MMA',
    patreonId: 'nc18-mma-kara-teller-vs-darya-balina-and-296597'
  },
  {
    id: 19,
    youtubeID: 'lJwlQIrfGww',
    title: 'Varvara Akulova vs Tais. Submission Grappling. 2012',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc19-varvara-akulova-vs-tais-submission-296544'
  },
  {
    id: 20,
    youtubeID: 'qo9DmpAXT5w',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais. May, 2012',
    category: 'MMA',
    patreonId: 'nc20-mma-yulia-fedutenko-vs-kara-teller-296522'
  },
  {
    id: 21,
    youtubeID: 'WO77phk8NWk',
    title: 'MMA. Darya Balina vs Olga. July, 2012',
    category: 'MMA',
    patreonId: 'nc21-mma-darya-balina-vs-olga-july-2012-296468'
  },
  {
    id: 22,
    youtubeID: 'FTCeUYW5O2g',
    title: 'Irina and Elena vs Villian. Mixed Wrestling. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc22-irina-and-elena-vs-villian-mixed-296366'
  },
  {
    id: 23,
    youtubeID: 'fbESZrys6fc',
    title: 'Irina (Vlasta) vs Tais. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc23-irina-vlasta-vs-tais-submission-may-296334'
  },
  {
    id: 24,
    youtubeID: 'NctqeFj1TG8',
    title: 'Lyudmila vs Tais Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc24-lyudmila-vs-tais-submission-october-296220'
  },
  {
    id: 25,
    youtubeID: '29EMwdnOvJk',
    title: 'Mixed Wrestling. Best Fights. Part 2. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc25-mixed-wrestling-best-fights-part-2-296203'
  },
  {
    id: 26,
    youtubeID: 'iBBVt0JNN-Y',
    title: 'Female Beach Wrestling. Part 1. June, 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc26-female-beach-wrestling-part-1-june-296112'
  },
  {
    id: 27,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Female Beach Wrestling Part 2. June, 2011',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc27-female-beach-wrestling-part-2-june-296064'
  },
  {
    id: 28,
    youtubeID: '6nP3PAUF7hw',
    title: 'Mixed Wrestling. Best Fights. Part 3. 2011',
    category: 'MIXED WRESTLING',
    patreonId: 'nc28-mixed-wrestling-best-fights-part-3-296037'
  },
  {
    id: 29,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2013',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc29-elena-vasilyeva-vs-tais-submission-296001'
  },
  {
    id: 30,
    youtubeID: 'Xf_8wprghvA',
    title: 'Mixed Wrestling. Best Fights. Part 4. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc30-mixed-wrestling-best-fights-part-4-295973'
  },
  {
    id: 31.1,
    youtubeID: '0C9U65HQSxY',
    title: 'Mixed Wrestling. Best Fights. Part 5.1. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc31-1-mixed-wrestling-best-fights-part-295438'
  },
  {
    id: 31.2,
    youtubeID: '-3kHYn2U8Vo',
    title: 'Mixed Wrestling. Best Fights. Part 5.2. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc31-2-mixed-wrestling-best-fights-part-295964'
  },
  {
    id: 32,
    youtubeID: 'hOdvtSS6Nbw',
    title: 'Mixed Wrestling. Artem vs Tais. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc32-mixed-wrestling-artem-vs-tais-2013-295426'
  },
  {
    id: 33,
    youtubeID: 'UdxhMrIku4A',
    title: 'Crossfit tournament. Submission Grappling. 2013',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc33-crossfit-tournament-submission-2013-295417'
  },
  {
    id: 34,
    youtubeID: 'U0Eu-u52FQs',
    title: 'Mixed Wrestling. Alexander and Villian against Tais. 2013',
    category: 'MIXED WRESTLING',
    patreonId: 'nc34-mixed-wrestling-alexander-and-tais-295404'
  },
  {
    id: 35,
    youtubeID: 'tYIIf2sPt4c',
    title: 'Lidiya Oslopovskih vs Tais. Pins matches. 2013',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc35-lidiya-oslopovskih-vs-tais-pins-295364'
  },
  {
    id: 36,
    youtubeID: 'kkbQ7YEQ9nQ',
    title: 'Tournament between beginners. Part 1. Preliminary fights. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc36-tournament-between-beginners-part-1-295379'
  },
  {
    id: 37,
    youtubeID: 'oxAzT_GWSJA',
    title: 'Tournament between beginners. Part 2. Final fights. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc37-tournament-between-beginners-part-2-295319'
  },
  {
    id: 38,
    youtubeID: 'Syc6WtXS2w0',
    title: 'Mixed Wrestling Alexander vs Tais. 2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc38-mixed-wrestling-alexander-against-295273'
  },
  {
    id: 39,
    youtubeID: 'kpBVV_5iaYQ',
    title: 'Mixed Wrestling Villian vs Tais. Part 1. 2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc39-mixed-wrestling-villian-vs-tais-1-295259'
  },
  {
    id: 40,
    youtubeID: '_nBXLJXazc0',
    title: 'Mixed Wrestling Villian vs Tais. Part 2. 2014',
    category: 'MIXED WRESTLING',
    patreonId: 'nc40-mixed-wrestling-villian-vs-tais-2-295238'
  },
  {
    id: 41,
    youtubeID: 'vE6uc_UXaWc',
    title: 'Mixed Wrestling Elena vs Tais. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc41-submission-grappling-tournament-1-295210'
  },
  {
    id: 42,
    youtubeID: 'e8fADPtHm7w',
    title: 'Mixed Wrestling. Tournament. 2014',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc42-submission-grappling-tournament-2-295188'
  },
 /* {
    id: 43,
    youtubeID: 'K6S9UO8XGB8',
    title: 'Lidiya Oslopovskih vs Tais. Final of the Cup. 2014',
    category: 'SUBMISSION WRESTLING',
  },*/ //todo v2: this unallocated
  {
    id: 44,
    youtubeID: 'bc9RU5hP4k4',
    title: 'Training Submission Wrestling. November, 2016',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc44-maslenitsa-festival-2016-pins-and-290002'
  },
  {
    id: 45,
    youtubeID: 'Ew7fMthTt0Q',
    title: 'Braivs vs Alyona 11.10.2016',
    category: 'MIXED WRESTLING',
    patreonId: 'nc45-braivs-vs-alyona-13-10-2016-294185'
  },
  {
    id: 46,
    youtubeID: 'lDgKoh-9KG4',
    title: 'Mixed Wrestling. Training. 2017',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc46-alena-kurmandi-30-03-2017-06-04-294096'
  },
  {
    id: 47,
    youtubeID: 'fb5NUMSB2qg',
    title: 'Women’s Submission Wrestling. Tournament. 2017',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc47-competitions-at-maslenitsa-16-02-294121'
  },
  {
    id: 48,
    youtubeID: 'K_z4YsnNWbs',
    title: 'Training Submission Wrestling. August, 2017',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc48-competitions-spring-2017-294141'
  },
  {
    id: 49,
    youtubeID: 'LETUteJJ724',
    title: 'Braivs vs Alyona collection 2016-2017',
    category: 'MIXED WRESTLING',
    patreonId: 'nc49-braivs-vs-alyona-collection-2016-293193'
  },
  {
    id: 50,
    youtubeID: 'W8TqBxzEMaI',
    title: 'Tais vs Braivs collection 2014-2017',
    category: 'MIXED WRESTLING',
    patreonId: 'nc50-braivs-vs-tais-collection-2014-2017-290070'
  }, {
    id: 59,
    youtubeID: 'e72ZJ7JQt10',
    title: 'Alex vs JudoGirlAmrita',
    category: 'MIXED WRESTLING',
    patreonId: 'nc59-fm-alex-vs-157250136',
    isPost: true
  },
  {
    id: 60,
    youtubeID: '',
    title: 'Siya vs Skuf - round 1',
    category: 'MIXED WRESTLING',
    patreonId: 'nc60-fm-siya-vs-157276901',
    isPost: true,
    isClickable: true,
    mvtubeId: 'k7IAbybh84TnQro'
  },
  {
    id: 61,
    youtubeID: '',
    title: 'Siya vs Skuf - round 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc61-fm-siya-vs-157346614',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4f/NC61_FM_Siya_vs_Skuf_round2_preview.mp4',
      'https://files.catbox.moe/umbng1.mp4'
    ]
  },
  {
    id: 62,
    youtubeID: '',
    title: 'Siya vs Tryapka',
    category: 'MIXED WRESTLING',
    patreonId: 'nc62-siya-vs-157533888',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4g/NC62_Siya_vs_Tryapka_preview_v2.mp4',
      'https://files.catbox.moe/b050nq.mp4'
    ]
  },
  {
    id: 63,
    youtubeID: '',
    title: 'Siya vs Skuf - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc63-siya-vs-2-157655160',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4h/NC63_Siya_vs_Skuf_fight_2_preview.mp4',
      'https://files.catbox.moe/l1dtmv.mp4'
    ]
  },
  {
    id: 64,
    youtubeID: '',
    title: 'Siya in socks',
    category: 'MIXED WRESTLING',
    patreonId: 'nc64-siya-in-157720494',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4i/NC64_Siya_in_socks_preview2.mp4',
      'https://files.catbox.moe/iaqmqh.mp4'
    ]
  },
  {
    id: 65,
    youtubeID: '',
    title: 'Aizet vs Alex',
    category: 'MIXED WRESTLING',
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4j/NC65_Aizet_vs_Alex_preview.mp4',
      'https://files.catbox.moe/pew83m.mp4'
    ],
    patreonId: 'nc65-aizet-vs-157731669',
    isPost: true,
  },
  {
    id: 66,
    youtubeID: 'RIMTtVZDtFA',
    title: 'Aizet in kimono vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc66-aizet-in-vs-157950269',
    isPost: true,
  },
  {
    id: 67,
    youtubeID: '',
    title: 'Aizet vs Alex wrestling & shibari',
    category: 'MIXED WRESTLING',
    patreonId: 'nc67-aizet-vs-157954076',
    isPost: true,
    directVideoUrl: [
      'https://www.udrop.com/file/Ow4k/NC67_Aizet_vs_Alex_wrestling___shibari_preview.mp4',
      'https://files.catbox.moe/ri4qtu.mp4'
    ]
  },
  {
    id: 68,
    youtubeID: '',
    title: 'Angelina vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc68-angelina-vs-157976798',
    isPost: true,
    facebookPreview: 'https://www.facebook.com/share/v/1CswLNz6JV/',
  },
  {
    id: 69,
    youtubeID: '',
    title: 'Simona vs Alex - fight 1',
    category: 'MIXED WRESTLING',
    patreonId: 'nc69-simona-vs-1-159381795',
    isPost: true,
    mvtubeId: 'hf4N7tVyhllOilh',
  },
  {
    id: 70,
    youtubeID: '',
    title: 'Simona vs Alex - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: 'nc70-simona-vs-2-159379562',
    isPost: true,
    mvtubeId: 'inMebeYw1MuozTy',
  },
  {
    id: 71,
    youtubeID: '',
    title: 'Simona vs Alex - fight 3',
    category: 'MIXED WRESTLING',
    patreonId: 'nc71-simona-vs-159383997',
    isPost: true,
    mvtubeId: '7wqmxpwcpwFygwE',
  },
  {
    id: 72,
    youtubeID: 'CxURntYDiJAxxMP',
    title: 'Nastya vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc72-nastya-vs-159387030',
    isPost: true,
    mvtubeId: 'CxURntYDiJAxxMP',
  },
  {
    id: 73,
    youtubeID: 'CxURntYDiJAxxMP',
    title: 'Candy vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc73-candy-vs-160023333',
    isPost: true,
    mvtubeId: 'k4AGMnMhkdF7sLe',
  },
  {
    id: 74,
    youtubeID: '',
    title: 'Radmila vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc74-radmila-vs-161324586',
    isPost: true,
    mvtubeId: 'aRxF6KkbZmKakBL',
  },
  {
    id: 75,
    youtubeID: '',
    title: 'Lilya vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc75-lilya-vs-161325573',
    isPost: true,
    mvtubeId: 'b3SlUDpxrasuPb4',
  },
  {
    id: 76,
    youtubeID: '',
    title: 'Sveta vs Alex',
    category: 'MIXED WRESTLING',
    patreonId: 'nc76-sveta-vs-161326775',
    isPost: true,
    mvtubeId: 'Ah2b6fPeCDQYLEK',
  },
  {
    id: 77,
    youtubeID: '',
    title: 'Siya vs Cherviak',
    category: 'MIXED WRESTLING',
    patreonId: '',
    isPost: true,
    mvtubeId: '6lVdprR4br7llcK',
  },
  {
    id: 78,
    youtubeID: '',
    title: 'Sima vs Cherviak - fight 4',
    category: 'MIXED WRESTLING',
    patreonId: '',
    isPost: true,
    mvtubeId: 'zPz9hCrEOlAFt1D',
  },
  {
    id: 79,
    youtubeID: '',
    title: 'Sima vs Cherviak - fight 5',
    category: 'MIXED WRESTLING',
    patreonId: '',
    isPost: true,
    mvtubeId: 'PPllWWxHRkLvKoM',
  },
  {
    id: 80,
    youtubeID: '',
    title: 'Sima vs Alex - fight 6',
    category: 'MIXED WRESTLING',
    patreonId: '',
    isPost: true,
    mvtubeId: 'xE8kU2VK24l9M2p',
  },
  {
    id: 81,
    youtubeID: '',
    title: 'Amrita vs Alex - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: '',
    isPost: true,
    mvtubeId: '7r8bTlQ6VqrDUHH',
  },
  {
    id: 82,
    youtubeID: '',
    title: 'Sveta vs Alex - fight 2',
    category: 'MIXED WRESTLING',
    patreonId: '',
    isPost: true,
    mvtubeId: '',
    willBeAvailableString: 'previewAvailableInOneDay',
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
      return <DescriptionComponent id={video.id}/>
    }
  }
})

export const video_data_blank: Video_data = {
  id: 0,
  youtubeID: '',
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
  youtubeID: string
  youtubeID2?: string
  title: string
  des?: string,
  description?: () => React.ReactNode
  patreonId: string
  /** If true, Patreon link is `patreon.com/posts/{patreonId}` instead of shop. */
  isPost?: boolean
  /** If true, video page shows poster `img` linking to YouTube instead of an embed. */
  isClickable?: boolean
  /** One or more direct MP4 URLs; if several, the video page shows tabs (primary / alternative player). */
  directVideoUrl?: string | string[]
  /** MixedWrestling.Video embed id to render via iframe when set. */
  mvtubeId?: string
  /** If set (non-empty), poster links to this URL with “click to see the video” overlay (e.g. Facebook). */
  facebookPreview?: string
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