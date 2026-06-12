export type HomeCard = {
  id: string
  title: string
  href: string
  imgRef: string
  excerpt: string
}

const img = (name: string) => `/assets/img/home/${name}`

export const home_cards: HomeCard[] = [
  {
    id: 'submission',
    title: 'Submission Grappling (Wrestling) as Single Combat',
    href: '/articles/submission',
    imgRef: '/assets/img/videoGallery/16/09.jpg',
    excerpt:
      'Submission grappling (Submission wrestling) is a non-striking hybrid style formed from wrestling, jiu jitsu, sambo, and many other submission fighting styles. It consists of applying submission holds and choking techniques to make the opponent abandon the fight. Submission grappling plays an important role in the practice of Mixed Martial Arts (MMA) and is considered an effective form of self-defense.',
  },
  {
    id: 'mix',
    title: 'Mixed Wrestling (Mixwrestling)',
    href: '/articles/mix',
    imgRef: '/assets/img/videoGallery/22/03.jpg',
    excerpt:
      'Our fighting club is attended by both girls and young men. For the girls, it’s more comfortable to practice many wrestling techniques with male partners (we are grateful to the men for their assistance!). Sporting mixed wrestling is also practiced with us. In this case, the competitors for the fights are selected based on their weight categories and physical strength.',
  },
  {
    id: 'mma',
    title: 'MMA (Mixed Martial Arts)',
    href: '/articles/mma',
    imgRef: '/assets/img/videoGallery/09/mma-rozhdestvenskij-kubok-2012-1/05.jpg',
    excerpt:
      'MMA (Mixed Martial Arts) is a full-contact combat sport that allows the use of both striking and grappling arts while both standing and on the ground, including wrestling, Brazilian jiu-jitsu, sambo, judo, boxing, kickboxing, Muay Thai, karate, and other styles. The roots of modern mixed martial arts can be traced back to the ancient Olympic combat sport of Pankration.',
  },
  {
    id: 'maslenitsa-2016',
    title: 'Female Power Competitions for the Maslenitsa Festival, 2016',
    href: '/competition/2015_2017/maslenitsa-2016',
    imgRef: '/assets/img/competitions/2016/Shrove_Tuesday/wrestling/25.jpg',
    excerpt:
      'The female power competition for this year\'s Maslenitsa Festival took place at the Namazon Club on Thursday, March 10th. It was held in three categories: armwrestling, leg-wrestling, and pins-and-submissions wrestling, where a wrestler could win a fight by either submission or pin. There were three participants in total who competed in the same weight category - up to 60 kg.',
  },
]
