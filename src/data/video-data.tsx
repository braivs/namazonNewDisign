import React from "react"
import {
  DIR01,
  DIR02,
  DIR03_3,
  DIR04,
  DIR06,
  DIR08_1,
  DIR08_2,
  DIR08_3,
  DIR09_1,
  DIR09_2,
  DIR09_3,
  DIR12,
  DIR16,
  DIR_MMA_SPORT_HOLIDAY_1,
  DIR_MMA_SPORT_HOLIDAY_2,
  DIR_NC46,
  DIR_NC47,
  DIR_NEVSKAYA_ARENA_1,
  DIR_NEVSKAYA_ARENA_2
} from "@/common/ImageContexts"

import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"
import DescriptionComponent from "@/components/DescriptionComponent"

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
    youtubeID: 'iBBVt0JNN-Y',
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
    youtubeID: '_7gBrg1KOYw',
    title: 'Maria Rylyova  vs Tais. Armwrestling and Wrestling'
  },
  {
    id: 4,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Submission Grappling. Christmas Cup  2011'
  },
  {
    id: 3,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Beach Wrestling. Mixed Tournament. 2010'
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
    description: () => (
      <>
        <p>This is the second MMA fight at the <b>"First Nevsky Arena Tournament"</b>. <b>Darya Balina</b> (5'4" /
          124 lb) and <b>Olga</b> (5'7" / 139 lb) are young participants who don't yet have enough experience in
          MMA fights, but that doesn't diminish the interest or entertainment value of their bout; their punches are
          strong, and the struggle is tough.
        </p>
        <p>The fighters engage in three full rounds, with neither willing to concede defeat.</p>
        <p>
          If you prefer fights with minimal striking, this match may not fully satisfy you. However, if you appreciate
          genuine, intense, and uncompromising MMA bouts, this fight will surely captivate you.
        </p>
        <ButtonGallery images={DIR_NEVSKAYA_ARENA_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      </>
    )
  },
  {
    id: 20,
    youtubeID: 'qo9DmpAXT5w',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais.  May, 2012',
    description: () => (
      <>
        <p><b>Yulia Fedutenko</b> (5'8" / 130 lb) - from the mixed martial arts Club "Tibron" in St. Petersburg. <b>Kara
          Teller</b> (5'7" / 123 lb) - representing the Vityaz Club in Moscow. This bout took place at the "<b>First
          Nevsky Arena Tournament</b>". Both fighters are technically skilled, showcasing a blend of hard punches,
          kicks,
          and close-quarter power struggles.</p>
        <p>The match extends over three full rounds. Yulia demonstrates more confidence in stand-up fighting, while Kara
          focuses on ground techniques to secure victory.</p>
        <p>If you enjoy intense and uncompromising fights between athletic and charismatic women, this bout is sure to
          captivate you.</p>
        <ButtonGallery images={DIR_NEVSKAYA_ARENA_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      </>
    )
  },
  {
    id: 18,
    youtubeID: 'fYEVVlzkUsA',
    title: 'MMA. Kara Teller vs Darya. Balina and Tais.  May, 2012',
    description: () => (
      <>
        <p>
          The first match is between the experienced fighter <b>Kara Teller</b> (Moscow, 5’7” / 119 lb) and the
          newcomer <b>Darya Balina</b> (St. Petersburg, 5’4” / 124 lb). Almost the entire fight is contested standing
          up,
          where Kara clearly dominates. Despite this, Darya proves to be very strong and holds her own for nearly two
          rounds.
        </p>
        <p>The second fight (Kara Teller vs Tais), unlike the first, primarily takes place on the mat. Over two rounds,
          Tais strives to secure victory with a chokehold or submission lock, occasionally enduring strikes from her
          opponent. The final outcome is quite surprising.</p>
        <h5><u>MMA:</u> Darya Balina vs Kara Teller</h5>
        <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_1}/>
        <h5><u>MMA:</u> Kara Teller vs Tais</h5>
        <ButtonGallery images={DIR_MMA_SPORT_HOLIDAY_2}/>
      </>
    )
  },
  {
    id: 9,
    youtubeID: '8NnbhTgPKXE',
    title: 'MMA tournament “Christmas Cup 2012',
    description: () => (
      <>
        <p>
          Three fighters participated in this tournament: <b>Elena Vasilyeva</b> (St. Petersburg, 5’6” / 132 lb),
          <b>Kara Teller</b>, a newcomer from Namazon Club (Moscow, 5’7” / 119 lb), and <b>Tais</b> (St. Petersburg,
          5’7” / 130 lb). The tournament was conducted in a single round format, with each fighter having two matches.
          Each match consisted of three 4-minute rounds with a 1-minute rest period between rounds.
        </p>
        <p>The fighters competed fiercely and uncompromisingly in all three matches.</p>
        <p>If you enjoy competitive fights involving strikes with arms and legs, as well as wrestling with armlocks and
          chokes, then you will definitely enjoy our film.</p>
        <h5><u>First fight:</u> Elena Vasilyeva vs Kara Teller</h5>
        <ButtonGallery images={DIR09_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
        <h5><u>Second fight:</u> Kara Teller vs Tais</h5>
        <ButtonGallery images={DIR09_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
        <h5><u>Third fight:</u> Elena Vasilyeva vs Tais</h5>
        <ButtonGallery images={DIR09_3} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      </>
    )
  },
]

// Add color: '' & category: 'Submission wrestling', to each object in the array
export const video_data: Array<Video_data> = video_data_src.map(video => {
  const formattedId = video.id < 10 ? `0${video.id}` : video.id
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

//todo: check links
//todo: need to fix on Gumroad nc names