import type {CardType} from '@/shared/assets/types/types'
import React from 'react'
import DescriptionComponent from '@/common/DescriptionComponent'

const thumb = (name: string) => `/assets/img/competitions/thumb/${name}`

export type CompetitionsVariant = 'all' | '2015-2017' | '2013-2014' | '2012' | '2011' | 'Archive'

export type Competition_data = CardType & {
  period: Exclude<CompetitionsVariant, 'all'>
  description: () => React.ReactNode
  /** When true, list cards show overlay and no links (like girls). Default true until articles are ready. */
  isInProgress?: boolean
}

type Competition_src = CardType & {isInProgress?: boolean}

function yearsToPeriod(years: string): Competition_data['period'] {
  const m: Record<string, Competition_data['period']> = {
    '2015_2017': '2015-2017',
    '2013_2014': '2013-2014',
    '2012': '2012',
    '2011': '2011',
    Archive: 'Archive',
  }
  return m[years] ?? '2012'
}

function enrich(card: Competition_src): Competition_data {
  const years = card.years!
  return {
    ...card,
    period: yearsToPeriod(years),
    isInProgress: card.isInProgress ?? true,
    description() {
      return <DescriptionComponent version="competition" id={card.id} />
    },
  }
}

const competitions_data_src_2015_2017: Array<CardType> = [
  {
    id: 'maslenitsa-2016',
    title: 'Female power competitions for\nthe Maslenitsa week, 2015-2017',
    imgRef: thumb('maslenitsa-2016.jpg'),
    years: '2015_2017',
  },
]

const competitions_data_src_2013_2014: Array<CardType> = [
  {
    id: 'tournament-2013',
    title: "Women's Power Event\n Tournament. October 2013",
    imgRef: thumb('tournament-2013.jpg'),
    years: '2013_2014',
  },
  {
    id: 'tournament-2014',
    title: 'Wrestling tournament for\nbeginners. May, 2014',
    imgRef: thumb('tournament-2014.jpg'),
    years: '2013_2014',
  },
  {
    id: 'grappling-2014',
    title: 'Tournament for the prize of the\nNamazon Club. October, 2014',
    imgRef: thumb('grappling-2014.jpg'),
    years: '2013_2014',
  },
]

const competitions_data_src_2012_raw: Array<Omit<CardType, 'years'>> = [
  {
    id: 'christmas-2012',
    title: 'Christmas Cup 2012\nMMA fights',
    imgRef: thumb('Elena_Vasilyeva_vs_Kara_Teller.jpg'),
  },
  {
    id: 'mma-2012',
    title: 'ММА. Kara Teller vs\nSvetlana Solovyova. 2012',
    imgRef: thumb('Kara_Teller_vs_Svetlana_Solovyova.jpg'),
  },
  {
    id: 'sportHoliday-2012',
    title: 'MMA fights in the May\nholidays. 2012',
    imgRef: thumb('KaraTellervsDariaBalina.jpg'),
  },
  {
    id: 'varvara-tais-2012',
    title: 'Varvara Akulova vs Tais.\nSubmission grappling. 2012',
    imgRef: thumb('VarvaravsTais.jpg'),
  },
  {
    id: 'nevskaya-arena-2012',
    title: 'The first Nevsky Arena. MMA\n tournament. 2012',
    imgRef: thumb('video-20.jpg'),
  },
]

const competitions_data_src_2012: Array<CardType> = competitions_data_src_2012_raw.map((c) => ({
  ...c,
  years: '2012',
}))

const competitions_data_src_2011_raw: Array<Omit<CardType, 'years'>> = [
  {
    id: 'christmas-2011',
    title: 'Christmas Cup 2011 Submission Grappling',
    imgRef: thumb('video-4.jpg'),
  },
  {
    id: 'beach-2011',
    title: 'Beach tournament\nSubmission Grappling. 2011',
    imgRef: thumb('video-8.jpg'),
  },
  {
    id: 'beach-mix-2011',
    title: 'Mixed beach tournament\nSubmission Grappling. 2011',
    imgRef: thumb('2011-alex-elena.jpg'),
  },
]

const competitions_data_src_2011: Array<CardType> = competitions_data_src_2011_raw.map((c) => ({
  ...c,
  years: '2011',
}))

const competitions_data_src_archive_raw: Array<Omit<CardType, 'years'>> = [
  {
    id: 'IzidaVsTais2008',
    title: 'Izida vs Tais\nWrestling. 2008',
    imgRef: thumb('2008-izida-tais.jpg'),
  },
  {
    id: 'IzidaVsIrina2008',
    title: 'Izida vs Irina\nWrestling. 2008',
    imgRef: thumb('2008-izida-irina.jpg'),
  },
  {
    id: 'IrinaVsTais2009',
    title: 'Irina vs Tais\nBeach wrestling. 2009',
    imgRef: thumb('2009-irina-tais.jpg'),
  },
  {
    id: 'beach-mix-2010',
    title: 'Mixed beach\ntournament. 2010',
    imgRef: thumb('2010-natalia-alex.jpg'),
  },
]

const competitions_data_src_archive: Array<CardType> = competitions_data_src_archive_raw.map((c) => ({
  ...c,
  years: 'Archive',
}))

export const competitions_data_2015_2017: Competition_data[] =
  competitions_data_src_2015_2017.map(enrich)
export const competitions_data_2013_2014: Competition_data[] =
  competitions_data_src_2013_2014.map(enrich)
export const competitions_data_2012: Competition_data[] = competitions_data_src_2012.map(enrich)
export const competitions_data_2011: Competition_data[] = competitions_data_src_2011.map(enrich)
export const competitions_data_archive: Competition_data[] = competitions_data_src_archive.map(enrich)

export const competitions_data: Competition_data[] = [
  ...competitions_data_2015_2017,
  ...competitions_data_2013_2014,
  ...competitions_data_2012,
  ...competitions_data_2011,
  ...competitions_data_archive,
]

export const competitions_data_blank: Competition_data = {
  id: '',
  title: '',
  imgRef: '',
  years: '2012',
  period: '2012',
  isInProgress: false,
  description: () => null,
}

export const competitions_period_order: Competition_data['period'][] = [
  '2015-2017',
  '2013-2014',
  '2012',
  '2011',
  'Archive',
]

export function getAllCompetitionPaths(): {years: string; id: string}[] {
  return competitions_data.map((c) => ({years: c.years!, id: String(c.id)}))
}

export function findCompetitionData(years: string, id: string): Competition_data | undefined {
  return competitions_data.find((c) => c.years === years && String(c.id) === id)
}
