export type HomeCard = {
  id: string
  href: string
  imgRef: string
  imgRef2?: string
}

export const home_cards: HomeCard[] = [
  {
    id: 'july-update',
    href: '/articles/july-update',
    imgRef: '/assets/img/Jule_2026_4parts.jpg',
    imgRef2: '/assets/img/Jule_2026_3parts.jpg',
  },
  {
    id: 'june-update',
    href: '/articles/june-update',
    imgRef: '/assets/img/Triple_Namazon_June_update.jpg',
  },
  {
    id: 'submission',
    href: '/articles/submission',
    imgRef: '/assets/img/videoGallery/16/09.jpg',
  },
  {
    id: 'mix',
    href: '/articles/mix',
    imgRef: '/assets/img/videoGallery/22/03.jpg',
  },
  {
    id: 'mma',
    href: '/articles/mma',
    imgRef: '/assets/img/videoGallery/09/mma-rozhdestvenskij-kubok-2012-1/05.jpg',
  },
  {
    id: 'maslenitsa-2016',
    href: '/competition/2015_2017/maslenitsa-2016',
    imgRef: '/assets/img/competitions/2016/Shrove_Tuesday/wrestling/25.jpg',
  },
  {
    id: 'maslenitsa-2017',
    href: '/competition/2015_2017/maslenitsa-2017',
    imgRef: '/assets/img/competitions/2017/Shrove_Tuesday/wrestling/26.jpg',
  },
]
