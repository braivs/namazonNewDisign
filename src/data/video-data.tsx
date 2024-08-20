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
  },
  {
    id: 2,
    youtubeID: 'Y_ixTzxIj44',
    title: 'Submission Grappling. Part 1. June, 2010',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 3,
    youtubeID: 'sddvDSjafEY',
    title: 'Beach Wrestling. Mixed Tournament. 2010',
    category: 'MIXED WRESTLING',
  },
  {
    id: 4,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Submission Grappling. Christmas Cup 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 5,
    youtubeID: 'hGAZo2Ffrz4',
    title: 'Villian vs Tais. Mixed Wrestling. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 6,
    youtubeID: 'ARwmIhW7goQ',
    title: 'Maria Rylyova vs Tais. Armwrestling and Wrestling',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 7,
    youtubeID: 'sKIu0T-a4wE',
    title: 'Alex vs Tais. Extreme fight. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 8,
    youtubeID: '_7gBrg1KOYw',
    title: 'Women\'s Beach Tournament. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 9,
    youtubeID: '8NnbhTgPKXE',
    title: 'MMA tournament “Christmas Cup 2012',
    category: 'MMA',
  },
  {
    id: 10,
    youtubeID: 'xbguaf9YTGo',
    title: 'Mixed Wrestling. Best Fights. Part 1. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 11,
    youtubeID: '_T6qzHq5H60',
    title: 'Alex vs Elena. Beach Wrestling. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 12,
    youtubeID: 'tB47JzDQ-mc',
    title: 'Submission Grappling. Tournament. April, 2010',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 13,
    youtubeID: '0-6S3nnMNYk',
    title: 'Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011',
    category: "BOXING",
  },
  {
    id: 14,
    youtubeID: 'mXLIzt6ZBFk', /*todo: add second youtube id here*/
    title: 'Two men against one woman. Part 1. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 15,
    youtubeID: 'piZ5J6Rierc',
    title: 'Two men against one woman. Part 2. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 16,
    youtubeID: '-uNa-IIOOQk',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 18,
    youtubeID: 'fYEVVlzkUsA',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais. May, 2012',
    category: 'MMA',
  },
  {
    id: 19,
    youtubeID: 'lJwlQIrfGww',
    title: 'Varvara Akulova vs Tais. Submission Grappling. 2012',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 20,
    youtubeID: 'qo9DmpAXT5w',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais. May, 2012',
    category: 'MMA',
  },
  {
    id: 21,
    youtubeID: 'WO77phk8NWk',
    title: 'MMA. Darya Balina vs Olga. July, 2012',
    category: 'MMA',
  },
  {
    id: 22,
    youtubeID: 'FTCeUYW5O2g',
    title: 'Irina and Elena vs Villian. Mixed Wrestling. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 23,
    youtubeID: 'fbESZrys6fc',
    title: 'Irina (Vlasta) vs Tais. Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 24,
    youtubeID: 'NctqeFj1TG8',
    title: 'Lyudmila vs Tais Submission Grappling. 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 25,
    youtubeID: '29EMwdnOvJk',
    title: 'Mixed Wrestling. Best Fights. Part 2. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 26,
    youtubeID: 'iBBVt0JNN-Y',
    title: 'Female Beach Wrestling. Part 1. June, 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 27,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Female Beach Wrestling Part 2. June, 2011',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 28,
    youtubeID: '6nP3PAUF7hw',
    title: 'Mixed Wrestling. Best Fights. Part 3. 2011',
    category: 'MIXED WRESTLING',
  },
  {
    id: 29,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2013',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 30,
    youtubeID: 'Xf_8wprghvA',
    title: 'Mixed Wrestling. Best Fights. Part 4. 2013',
    category: 'MIXED WRESTLING',
  },
  {
    id: 31.1,
    youtubeID: '0C9U65HQSxY',
    title: 'Mixed Wrestling. Best Fights. Part 5.1. 2013',
    category: 'MIXED WRESTLING',
  },
  {
    id: 31.2,
    youtubeID: '-3kHYn2U8Vo',
    title: 'Mixed Wrestling. Best Fights. Part 5.2. 2013',
    category: 'MIXED WRESTLING',
  },
  {
    id: 32,
    youtubeID: 'hOdvtSS6Nbw',
    title: 'Mixed Wrestling. Artem vs Tais. 2013',
    category: 'MIXED WRESTLING',
  },
  {
    id: 33,
    youtubeID: 'UdxhMrIku4A',
    title: 'Crossfit tournament. Submission Grappling. 2013',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 34,
    youtubeID: 'U0Eu-u52FQs',
    title: 'Mixed Wrestling. Alexander and Villian against Tais. 2013',
    category: 'MIXED WRESTLING',
  },
  {
    id: 35,
    youtubeID: 'tYIIf2sPt4c',
    title: 'Lidiya Oslopovskih vs Tais. Pins matches. 2013',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 36,
    youtubeID: 'kkbQ7YEQ9nQ',
    title: 'Tournament between beginners. Part 1. Preliminary fights. 2014',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 37,
    youtubeID: 'oxAzT_GWSJA',
    title: 'Tournament between beginners. Part 2. Final fights. 2014',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 38,
    youtubeID: 'Syc6WtXS2w0',
    title: 'Mixed Wrestling Alexander vs Tais. 2014',
    category: 'MIXED WRESTLING',
  },
  {
    id: 39,
    youtubeID: 'kpBVV_5iaYQ',
    title: 'Mixed Wrestling Villian vs Tais. Part 1. 2014',
    category: 'MIXED WRESTLING',
  },
  {
    id: 40,
    youtubeID: '_nBXLJXazc0',
    title: 'Mixed Wrestling Villian vs Tais. Part 2. 2014',
    category: 'MIXED WRESTLING',
  },
  {
    id: 41,
    youtubeID: 'YJpP-Sz86pE',
    title: 'Mixed Wrestling Elena vs Tais. 2014',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 42,
    youtubeID: 'DpP_UjZONME',
    title: 'Mixed Wrestling. Tournament. 2014',
    category: 'SUBMISSION WRESTLING',
  },
 /* {
    id: 43,
    youtubeID: 'K6S9UO8XGB8',
    title: 'Lidiya Oslopovskih vs Tais. Final of the Cup. 2014',
    category: 'SUBMISSION WRESTLING',
  },*/ //todo: this unallocated 
  {
    id: 44,
    youtubeID: 'kmYVbFlT4XY',
    title: 'Training Submission Wrestling. November, 2016',
    category: 'SUBMISSION WRESTLING',
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
    )
  },
  {
    id: 46,
    youtubeID: '4yGZIXxUwus',
    title: 'Mixed Wrestling. Training. 2017',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 47,
    youtubeID: 'fMXXIKtAm3g',
    title: 'Women’s Submission Wrestling. Tournament. 2017',
    category: 'SUBMISSION WRESTLING',
  },
  {
    id: 48,
    youtubeID: 'HdvAzNGhLMY',
    title: 'Training Submission Wrestling. August, 2017',
    category: 'SUBMISSION WRESTLING',
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
    )
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
    )
  }
];


const colorPicker = () => {
  
}

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
  }
}

type Video_data_src = {
  id: number
  youtubeID: string
  title: string
  des?: string,
  description?: () => React.ReactNode
}

// todo: this is very duplicate type with Video_data_src. Need to combine or del one. 
type Video_data_src_all = {
  category: Category
  id: number
  youtubeID: string
  title: string
  des?: string,
  description?: () => React.ReactNode
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
}

//todo: mma nc17 missed
//todo: check links
//todo: need to fix on Gumroad nc names
//todo: add zero add beginning of nc1-9 names
//todo: understand what to do with nc03