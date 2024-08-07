import React from "react"
import {DIR_NC46, DIR_NC47} from "@/common/constants/ImageContexts"

import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import DescriptionComponent from "@/common/DescriptionComponent"
import {formatNumber} from "@/common/helpers"

export const video_data_src: Array<Video_data_src> = [
  {
    id: 51,
    youtubeID: 'zvHDGMyqyXc',
    title: 'Kara, Darya, Tais. 08.05.2012',
    des: 'This is a short video, but the price for the full version is not high. You can enjoy it)',
    description: () => (
      <p>
        This is a short video, but the price for the full version is not high. You can enjoy it)
        Featured: Tais, Kara Teller, Darya Balina.
      </p>
    )
  },
  {
    id: 48,
    youtubeID: 'fb5NUMSB2qg',
    title: 'Competitions Spring 2017',
    des: 'Armwrestling & submission/pin grappling. Girls: Grigorenko Oksana (Tais), Murtazalieva Kurmandi, Piven Alyona.',
    description: () => (
      <p>
        Women&apos;s strength competition at 16.03.2017. Armwrestling & submission/pin grappling. Girls: Grigorenko
        Oksana
        (Tais), Murtazalieva Kurmandi, Piven Alyona.
      </p>
    )
  },
  {
    id: 47,
    youtubeID: 'fb5NUMSB2qg',
    title: "Women's strength competition at Maslenitsa 2017",
    des: "Women`s strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling.",
    description: () => (
      <>
        <p>
          Women&lsquo;s strength competition at Maslenitsa 16.02.2017. Armwrestling & submission grappling. Girls:
          Vardugina
          Viktoria, Vasilyeva Elena, Grigorenko Oksana (Tais), Piven Alyona.
          Grigorenko Oksana & Piven Alyona represented Namazon club. Vasilyeva Elena took part only in armwrestling.
        </p>
        <ButtonGallery images={DIR_NC47}/>
      </>
    )
  },
  {
    id: 46,
    youtubeID: 'lDgKoh-9KG4',
    title: 'Alena Kurmandi 30.03.2017 - 06.04.2017',
    description: () => {
      return <>
        <ButtonGallery images={DIR_NC46}/>
      </>
    }
  },
  {
    id: 44,
    youtubeID: 'bc9RU5hP4k4',
    title: 'The Female Power Competition for the Maslenitsa Festival, 2016. Wrestling',
    des: 'You can read the report on the competitions, the main part of which was these fights...',
  },
  {
    id: 42,
    youtubeID: 'e8fADPtHm7w',
    title: 'Submission grappling tournament. Part 2. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
  },
  {
    id: 41,
    youtubeID: 'vE6uc_UXaWc',
    title: 'Submission grappling tournament. Part 1. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
  },
  {
    id: 37,
    youtubeID: 'oxAzT_GWSJA',
    title: 'Tournament between beginners. Part 2. Final fights. 2014',
    des: 'This video is a continuation of the Video 36 that featured the preliminary fights.',
  },
  {
    id: 36,
    youtubeID: 'kkbQ7YEQ9nQ',
    title: 'Tournament between beginners. Part 1. Preliminary fights. 2014',
    des: 'In this competition, five fighters participated: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb), and Victoria (70.7 kg / 155.9 lb).',
  },
  {
    id: 35,
    youtubeID: 'tYIIf2sPt4c',
    title: 'Lidiya Oslopovskih vs Tais. Pins matches. 2013',
    des: 'Lovely young lady, Lidiya Oslopovskih (53 kg / 117 lbs), is a newcomer to the Namazon wrestling competitions.',
  },
  {
    id: 33,
    youtubeID: 'UdxhMrIku4A',
    title: 'Crossfit tournament\nSubmission Grappling. 2013',
    des: ' This video features two submission grappling matches held as the final part of a Crossfit tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.',
  },
  {
    id: 29,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2013',
    des: 'Elena (5\'7" / 157 lb) is a strong and ambitious young woman. She had fought Tais (5\'7" / 130 lb) many times two years ago...'
  },
  {
    id: 27,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Female Beach Wrestling Part 2. June, 2011',
    des: 'This is a continuation of the multi-round sand-wrestling contest between Tais (5"7" / 130 lb) and Elena Vasilyeva (5"6" / 135 lb).'
  },
  {
    id: 26,
    youtubeID: 'iBBVt0JNN-Y',
    title: 'Female Beach Wrestling. Part 1. June, 2011',
    des: 'This video features a sand-wrestling contest between two ambitious women, Tais (5"7" / 130 lb) and Elena Vasilyeva (5"6" / 134 lb).',
  },
  {
    id: 24,
    youtubeID: 'NctqeFj1TG8',
    title: 'Lyudmila vs Tais Submission Grappling. 2011'
  },
  {
    id: 23,
    youtubeID: 'fbESZrys6fc',
    title: 'Irina (Vlasta) vs Tais. Submission Grappling. 2011'
  },
  {
    id: 19,
    youtubeID: 'lJwlQIrfGww',
    title: 'Varvara Akulova vs Tais. Submission Grappling. 2012'
  },
  {
    id: 16,
    youtubeID: '-uNa-IIOOQk',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2011'
  },
  {
    id: 12,
    youtubeID: 'tB47JzDQ-mc',
    title: 'Submission Grappling. Tournament.  April,  2010'
  },
  {
    id: 8,
    youtubeID: '_7gBrg1KOYw',
    title: 'Women\'s Beach Tournament. Submission Grappling.  2011'
  },
  {
    id: 6,
    youtubeID: 'ARwmIhW7goQ',
    title: 'Maria Rylyova  vs Tais. Armwrestling and Wrestling'
  },
  {
    id: 4,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Submission Grappling. Christmas Cup  2011'
  },
  {
    id: 2,
    youtubeID: 'Y_ixTzxIj44',
    title: 'Submission Grappling. Part 1. June, 2010'
  },
  {
    id: 1,
    youtubeID: 'G7RTYfRO4B4',
    title: 'Submission Grappling. Part 2. June, 2010',
  },
]

const video_data_src_mma: Array<Video_data_src> = [
  {
    id: 21,
    youtubeID: 'WO77phk8NWk',
    title: 'MMA. Darya Balina vs Olga. July, 2012',
  },
  {
    id: 20,
    youtubeID: 'qo9DmpAXT5w',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais.  May, 2012',
  },
  {
    id: 18,
    youtubeID: 'fYEVVlzkUsA',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais.  May, 2012',
  },
  {
    id: 9,
    youtubeID: '8NnbhTgPKXE',
    title: 'MMA tournament “Christmas Cup 2012',
  },
]

const video_data_src_boxing: Array<Video_data_src> = [
  {
    id: 13,
    youtubeID: '0-6S3nnMNYk',
    title: 'Valentina Perfilyeva vs Nadezhda Akhmerova. Kickboxing. 2011',
  },
]

const video_data_src_mix: Array<Video_data_src> = [
  {
    id: 3,
    youtubeID: 'sddvDSjafEY',
    title: 'Beach Wrestling. Mixed Tournament. 2010'
  },
  {
    id: 5,
    youtubeID: 'hGAZo2Ffrz4',
    title: 'Villian  vs  Tais. Mixed Wrestling. 2011'
  },
  {
    id: 7,
    youtubeID: 'sKIu0T-a4wE',
    title: 'Alex  vs  Tais. Extreme fight. 2011'
  },
  {
    id: 10,
    youtubeID: 'xbguaf9YTGo',
    title: 'Mixed Wrestling. Best Fights. Part 1. 2011'
  },
  {
    id: 11,
    youtubeID: '_T6qzHq5H60',
    title: 'Alex  vs  Elena. Beach Wrestling. 2011',
  },
  {
    id: 14,
    youtubeID: 'mXLIzt6ZBFk', /*todo: add second youtube id here*/
    title: 'Two men against one woman. Part 1. 2011',
  },
  {
    id: 15,
    title: 'Two men against one woman. Part 2. 2011',
    youtubeID: 'piZ5J6Rierc',
  },
  {
    id: 22,
    title: 'Irina and Elena vs Villian. Mixed Wrestling. 2011',
    youtubeID: 'FTCeUYW5O2g',
  },
  {
    id: 25,
    title: 'Mixed Wrestling. Best Fights. Part 2. 2011',
    youtubeID: '29EMwdnOvJk',
  },
  {
    id: 28,
    title: 'Mixed Wrestling. Best Fights. Part 3. 2011',
    youtubeID: '6nP3PAUF7hw',
  },
  {
    id: 30,
    title: 'Mixed Wrestling. Best Fights. Part 4. 2013',
    youtubeID: 'Xf_8wprghvA',
  },
  {
    id: 31.1,
    title: 'Mixed Wrestling. Best Fights. Part 5.1. 2013',
    youtubeID: '0C9U65HQSxY',
  },
  {
    id: 31.2,
    title: 'Mixed Wrestling. Best Fights. Part 5.2. 2013',
    youtubeID: '-3kHYn2U8Vo',
  },
  {
    id: 32,
    title: 'Mixed Wrestling. Artem vs Tais. 2013',
    youtubeID: 'hOdvtSS6Nbw',
  },
  {
    id: 34,
    title: 'Mixed Wrestling. Alexander and Villian against Tais. 2013',
    youtubeID: 'U0Eu-u52FQs',
  },
  {
    id: 38,
    title: 'Mixed Wrestling Alexander vs Tais. 2014',
    youtubeID: 'Syc6WtXS2w0',
  },
  {
    id: 39,
    title: 'Mixed Wrestling Villian vs Tais. Part 1. 2014',
    youtubeID: 'kpBVV_5iaYQ',
  },
  {
    id: 40,
    title: 'Mixed Wrestling Villian vs Tais. Part 2. 2014',
    youtubeID: '_nBXLJXazc0',
  },
  {
    id: 45,
    title: 'Braivs vs Alyona 11.10.2016',
    youtubeID: 'Ew7fMthTt0Q',
    description: () => (
      <p>
        Braivs and Alyona are evenly matched in strength. The full video contains 15 minutes of action.
      </p>
    )
  },
  {
    id: 49,
    title: 'Braivs vs Alyona collection 2016-2017',
    youtubeID: 'LETUteJJ724',
    description: () => (
      <p>
        This is a collection of wrestling clips featuring Braivs and Alyona, compiled into a single film. Filmed over 5
        days between late 2016 and early 2017. The full clip is 56 minutes long! Please note, it is more male-dominated.
      </p>
    )
  },
  {
    id: 50,
    title: 'Tais vs Braivs collection 2014-2017',
    youtubeID: 'W8TqBxzEMaI',
    description: () => (
      <p>
        This is a collection of wrestling clips featuring Braivs and Tais, compiled into a single film. Filmed over 8
        days between 2014 and 2017, Braivs put forth his best effort, but Tais proved to be stronger. The full clip is
        23 minutes long.
      </p>
    )
  }
]

// Add data to video_data_src
export const video_data: Array<Video_data> = video_data_src_mix.map(video => {
  const formattedId = video.id < 10 ? `0${video.id}` : formatNumber(video.id)
  return {
    ...video,
    color: '',
    category: 'Submission wrestling',
    img: `/assets/img/video/NC${formattedId}.jpg`,
    des: video.des ?? '',
    description: video.description ?? function () {
      return <DescriptionComponent id={video.id}/>
    }
  }
})

console.log('video_data: ', video_data)

export const video_data_blank: Video_data = {
  id: 0,
  youtubeID: '',
  color: '',
  img: '',
  category: '',
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


export type Video_data = {
  id: number
  youtubeID: string
  color: string
  img: string
  category: string
  title: string
  des: string,
  description: () => React.ReactNode
}

//todo: mma nc17 missed
//todo: check links
//todo: need to fix on Gumroad nc names
//todo: add zero add beginning of nc1-9 names
//todo: understand what to do with nc03
//todo: revert video_data_src_mix