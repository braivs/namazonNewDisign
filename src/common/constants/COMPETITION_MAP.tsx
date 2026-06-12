import type {FC} from 'react'
import {Maslenitsa2016Desc} from '@/data/competitions-description/maslenitsa2016Desc'
import {Tournament2013Desc} from '@/data/competitions-description/tournament2013Desc'
import {Tournament2014Desc} from '@/data/competitions-description/tournament2014Desc'

/** Replace entries with real articles when ported from the old site. */
const CompetitionArticlePlaceholder: FC = () => (
  <p className="text-muted">Full competition article is not published on the new site yet.</p>
)

const competitionIds = [
  'maslenitsa-2016',
  'tournament-2013',
  'tournament-2014',
  'grappling-2014',
  'christmas-2012',
  'mma-2012',
  'sportHoliday-2012',
  'varvara-tais-2012',
  'nevskaya-arena-2012',
  'christmas-2011',
  'beach-2011',
  'beach-mix-2011',
  'IzidaVsTais2008',
  'IzidaVsIrina2008',
  'IrinaVsTais2009',
  'beach-mix-2010',
] as const

const competitionMapBase: Record<string, FC> = Object.fromEntries(
  competitionIds.map((id) => [id, CompetitionArticlePlaceholder]),
) as Record<string, FC>

export const COMPETITION_MAP: Record<string, FC> = {
  ...competitionMapBase,
  'maslenitsa-2016': Maslenitsa2016Desc,
  'tournament-2013': Tournament2013Desc,
  'tournament-2014': Tournament2014Desc,
}
