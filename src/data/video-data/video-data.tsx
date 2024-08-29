import React from "react"
import DescriptionComponent from "@/common/DescriptionComponent"
import {formatNumber} from "@/common/helpers"
import {Category} from "@/common/types"

const video_data_src_all: Array<Video_data_src_all> = [
  {
    id: 1,
    youtubeID: 'G7RTYfRO4B4',
    title: 'Submission Grappling. Part 2. June, 2010',
    category: 'SUBMISSION WRESTLING',
    patreonId: 'nc01-submission-grappling-tournament-1-301844',
  },
  {
    id: 2,
    youtubeID: 'Y_ixTzxIj44',
    title: 'Submission Grappling. Part 1. June, 2010',
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
    youtubeID: 'mXLIzt6ZBFk', /*todo: add second youtube id here*/
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
    description: () => (
      <p>
        Braivs and Alyona are evenly matched in strength. The full video contains 15 minutes of action.
      </p>
    ),
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
    description: () => (
      <p>
        This is a collection of wrestling clips featuring Braivs and Alyona, compiled into a single film. Filmed over 5 days between late 2016 and early 2017. The full clip is 56 minutes long! Please note, it is more male-dominated.
      </p>
    ),
    patreonId: 'nc49-braivs-vs-alyona-collection-2016-293193'
  },
  {
    id: 50,
    youtubeID: 'W8TqBxzEMaI',
    title: 'Tais vs Braivs collection 2014-2017',
    category: 'MIXED WRESTLING',
    description: () => (
      <p>
        This is a collection of wrestling clips featuring Braivs and Tais, compiled into a single film. Filmed over 8 days between 2014 and 2017, Braivs put forth his best effort, but Tais proved to be stronger. The full clip is 23 minutes long.
      </p>
    ),
    patreonId: 'nc50-braivs-vs-tais-collection-2014-2017-290070'
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

// todo: this is very duplicate type with Video_data_src. Need to combine or del one.
type Video_data_src_all = {
  category: Category
  id: number
  youtubeID: string
  title: string
  des?: string,
  description?: () => React.ReactNode
  patreonId: string
}

// todo: this is very duplicate type with Video_data_src_all. Need to combine.
export type Video_data = {
  id: number
  youtubeID: string
  color: string
  img: string
  category: Category
  title: string
  des: string,
  description: () => React.ReactNode
  patreonId: string
}

//todo: understand what to do with nc03

// todo: v2 after release: remake pictures size for video
// todo: v2: integrate shop into app
// todo: v2: add new NC clips
// todo: v2: pud age restricted videos on hosting directly