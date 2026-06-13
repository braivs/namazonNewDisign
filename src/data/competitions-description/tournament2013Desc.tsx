'use client'

import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_LIDA_VIKA,
  DIR_TAIS_YULIA,
  DIR_TOURNAMENT2013_DARINA_VICTORIA,
  DIR_TOURNAMENT2013_YAROSLAVA_MASHA,
  DIR_TOURNAMENT2013_YAROSLAVA_VIKA,
} from '@/common/constants/ImageContexts'
import sC from '@/common/styles.module.scss'
import sel from '@/data/competitions-description/tournament2013PageSelector.module.scss'
import {findCompetitionData} from '@/data/competitions/competitions-data'
import cn from 'classnames'
import React, {useState} from 'react'
import {Table} from 'react-bootstrap'
import {Trans, useTranslation} from 'react-i18next'

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'
const NS = 'tournament-2013'

type PageSelectorProps = {
  activePage: number
  setActivePage: (page: number) => void
  mode?: 'standard' | 'prevNext'
}

const useTournamentT = () => {
  const {t} = useTranslation('competitions')
  const tr = (key: string, defaultValue: string) => t(`${NS}.${key}`, {defaultValue})
  const weight = (key: string, enLb: string) => tr(`weights.${key}`, enLb)
  const pageLabel = (n: number) =>
    t(`${NS}.page`, {n, defaultValue: 'page {{n}}'})
  return {tr, weight, pageLabel}
}

const TableHeaderRow: React.FC = () => {
  const {tr} = useTournamentT()
  return (
    <tr>
      <td>{tr('table.competitors', 'Competitors')}</td>
      <td>{tr('table.weight', 'Weight (lb)')}</td>
      <td>{tr('table.tug', 'Tug of war')}</td>
      <td>{tr('table.arm', 'Arm wrestling')}</td>
      <td>{tr('table.leg', 'Leg wrestling')}</td>
      <td>{tr('table.sumo', 'Sumo (Mercy)')}</td>
      <td>{tr('table.points', 'Points')}</td>
    </tr>
  )
}

const PageSelector: React.FC<PageSelectorProps> = ({activePage, setActivePage, mode}) => {
  const {tr, pageLabel} = useTournamentT()
  const blockPrev = activePage === 1
  const blockNext = activePage === 3

  const onPrevClick = () => {
    if (blockPrev) return
    setActivePage(activePage - 1)
  }

  const onNextClick = () => {
    if (blockNext) return
    setActivePage(activePage + 1)
  }

  return (
    <ul className={cn(sel.pageList, mode === 'prevNext' && sel.pageListPrevNext)}>
      {mode !== 'prevNext' ? (
        <>
          {[1, 2, 3].map((pageNumber) => (
            <li
              key={pageNumber}
              onClick={() => setActivePage(pageNumber)}
              className={cn(sel.pageSelector, activePage === pageNumber && sel.active)}
            >
              {pageLabel(pageNumber)}
            </li>
          ))}
        </>
      ) : (
        <>
          <li
            onClick={onPrevClick}
            className={cn(sel.pageSelector, blockPrev && sel.active)}
          >
            {blockPrev ? tr('prevNav', 'Prev') : tr('prev', '<< Prev')}
          </li>
          <li
            onClick={onNextClick}
            className={cn(sel.pageSelector, blockNext && sel.active)}
          >
            {blockNext ? tr('nextNav', 'Next') : tr('next', 'Next >>')}
          </li>
        </>
      )}
    </ul>
  )
}

const PairHeading: React.FC<{labelKey: string; defaultLabel: string}> = ({labelKey, defaultLabel}) => {
  const {tr} = useTournamentT()
  return (
    <h5 className={sC.textAlignCenter}>
      <u>{tr(labelKey, defaultLabel)}</u>
    </h5>
  )
}

const Tournament2013Page1: React.FC = () => {
  const {tr} = useTournamentT()

  return (
    <>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page1.intro`}
          components={{1: <b />, 2: <b />}}
          defaults={`The female power combat tournament was organized in cooperation with the Female Single Combat Club "Namazon" and the St. Petersburg Athletic Center. The full title of the competition was <1>"The Female Single Combat Tournament for the prizes of the SBR Athletic Center and the Namazon Club"</1>. The aim of the competition was to popularize <2>non-traditional power single combats</2> between women.`}
        />
      </p>
      <p>{tr('page1.crossfitIntro', 'Actually, the tournament was structured as a crossfit competition consisting of the following events:')}</p>
      <ul>
        <li>{tr('page1.eventTug', 'Tug-of-war (a win is awarded with 2 points);')}</li>
        <li>
          {tr(
            'page1.eventArm',
            'Arm wrestling on the floor - with both left and right arms (a win with either arm is awarded with 1 point);',
          )}
        </li>
        <li>
          {tr(
            'page1.eventLeg',
            'Leg wrestling - wrestling with legs in sitting position (a win in each of the 2 positions is awarded with 1 point);',
          )}
        </li>
        <li>{tr('page1.eventSumo', '"Sumo-wrestling" with simplified rules (a win is awarded with 2 points).')}</li>
      </ul>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page1.formatIntro`}
          components={{br: <br />}}
          defaults={`The competition format was based on the expected participants. Until the last day, it was uncertain which girls would compete. Eventually, on October 2, 2013, pairs of girls were formed to compete in 3 qualification rounds to determine a winner in the amateur division:`}
        />
      </p>
      <PairHeading labelKey="page1.pairLisaLida" defaultLabel="Lisa Sergovskaya vs Lida Oslopovskih" />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page1.lisaLidaBio`}
          components={{1: <b />, 2: <b />, br: <br />}}
          defaults={`<1>Lisa Sergovskaya</1> has been involved in arm wrestling for more than a year, and previously engaged in rock climbing. Lisa is 18 years old and currently a student. In summer 2013, she participated in a photo session at the SBR Athletic Center. Her weight is 126 lb (57 kg).<br/><2>Lida Oslopovskih</2> does not participate in sports but attends a fitness center, and had a successful debut in combined strength events, particularly strong in push-ups (she can do 20 repetitions on parallel bars). Lida is 27 years old and weighs 117 lb (53 kg).`}
        />
      </p>
      <PairHeading labelKey="page1.pairDarinaVika" defaultLabel="Darina Chupahina vs Vika Vardugina" />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page1.darinaVikaBio`}
          components={{1: <b />, 2: <b />, br: <br />}}
          defaults={`<1>Darina Chupahina</1> — information is limited to her role as a coach in a fitness center. Darina is 20 years old.<br/><2>Vika Vardugina</2>— in summer 2013, she competed for the first time at a college arm wrestling tournament, winning 1st place in her weight class. She currently attends a fitness center. Vika is from Kazakhstan, a student who is 18 years old.`}
        />
      </p>
      <PairHeading labelKey="page1.pairMashaYaroslava" defaultLabel="Masha Barsukova vs Yaroslava Shuvalova" />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page1.mashaYaroslavaBio`}
          components={{1: <b />, 2: <b />, br: <br />}}
          defaults={`<1>Masha Barsukova</1> trains in a fitness center and participates in various amateur strength sports events; her notable achievement is a 4-minute static squat against the wall. Masha is 26 years old and weighs 124 lb (56 kg).<br/><2>Yaroslava Shuvalova</2> is a photographer who is not involved in sports or fitness activities. Despite this, she did surprisingly well in non-professional combined strength competitions, especially in weightlifting — managing 60 repetitions of squats with 56 lb (25 kg). Yaroslava is 45 years old and weighs 124 lb (56 kg).`}
        />
      </p>
      <hr />
      <p>
        {tr(
          'page1.footnote1',
          'i) To minimize the technical advantage of more experienced opponents in table arm wrestling, matches were conducted on the floor, where physical strength typically outweighs technical skills.',
        )}
      </p>
      <p>
        {tr(
          'page1.footnote2',
          'ii) The goal in leg wrestling is to use thigh strength to close the opponent\'s knees together, while the opponent tries to open them; positions are then exchanged.',
        )}
      </p>
      <p>
        {tr(
          'page1.footnote3',
          'iii) Also known as "Mercy" wrestling, the objective is to push the opponent outside the mat boundaries or make them touch the ground with any part of their body (touching the ground with one knee is allowed).',
        )}
      </p>
    </>
  )
}

const Tournament2013Page2: React.FC = () => {
  const {tr, weight} = useTournamentT()

  return (
    <>
      <h4 className={sC.textAlignCenter}>
        <u>{tr('page2.round1Title', 'Results of the First Round (Quarter-finals):')}</u>
      </h4>
      <PairHeading labelKey="page2.pairLisaLida" defaultLabel="Lisa Sergovskaya vs Lida Oslopovskih" />
      <Table bordered className={sC.customTablePadding}>
        <tbody>
          <TableHeaderRow />
          <tr>
            <td>{tr('page2.lisaName', 'Lisa Sergovskaya')}</td>
            <td>{weight('lisa', '127')}</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <b>{tr('page2.lidaName', 'Lida Oslopovskih')}</b>
            </td>
            <td>{weight('lida', '117')}</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>
              <b>6</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page2.pair1Comment`}
          components={{1: <b />}}
          defaults={`In the first pair, a significant advantage was on Lida's side, who was more spirited to win the contest.`}
        />
      </p>

      <PairHeading labelKey="page2.pairDarinaVika" defaultLabel="Darina Chupahina vs Vika Vardugina" />
      <Table bordered className={sC.customTablePadding}>
        <tbody>
          <TableHeaderRow />
          <tr>
            <td>{tr('page2.darinaName', 'Darina Chupahina')}</td>
            <td>{weight('darina', '141')}</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <td>
              <b>{tr('page2.vikaName', 'Vika Vardugina')}</b>
            </td>
            <td>{weight('vikaQuarter', '152')}</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>
              <b>7</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page2.pair2Comment`}
          components={{1: <b />}}
          defaults="In the second pair, Vika clearly had the advantage."
        />
      </p>

      <ButtonGallery images={DIR_TOURNAMENT2013_DARINA_VICTORIA} buttonName={tr('seePhotos', 'See photos')} />

      <h5 className="text-center">
        <u>{tr('page2.pairYaroslavaMasha', 'Yaroslava Shuvalova vs Masha Barsukova')}</u>
      </h5>
      <Table bordered className={sC.customTablePadding}>
        <tbody>
          <TableHeaderRow />
          <tr>
            <td>
              <b>{tr('page2.yaroslavaName', 'Yaroslava Shuvalova')}</b>
            </td>
            <td>{weight('yaroslava', '124')}</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>
              <b>4</b>
            </td>
          </tr>
          <tr>
            <td>
              <b>{tr('page2.mashaName', 'Masha Barsukova')}</b>
            </td>
            <td>{weight('masha', '124')}</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>
              <b>4</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page2.pair3Comment`}
          components={{1: <b />, br: <br />}}
          defaults={`The struggle in the third pair was very tough; the opponents were almost evenly matched. Yaroslava is naturally stronger than Masha, but Masha is better trained, more skilled, and cunning. The result was <1>a draw at 4-4</1>.`}
        />
      </p>
      <ButtonGallery images={DIR_TOURNAMENT2013_YAROSLAVA_MASHA} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        {tr(
          'page2.semiFinalIntro',
          'The winners of the first two pairs and both contestants of the third pair entered the semi-finals, where they had to compete with each other only in one event: tug of war.',
        )}
      </p>
    </>
  )
}

const Tournament2013Page3: React.FC = () => {
  const {tr, weight} = useTournamentT()

  return (
    <>
      <h4 className={sC.textAlignCenter}>
        <u>{tr('page3.round2Title', 'Results of the Second Round (Semi-finals):')}</u>
      </h4>
      <PairHeading labelKey="page3.pairMashaLida" defaultLabel="Masha Barsukova vs Lida Oslopovskih" />
      <Table bordered>
        <tbody>
          <TableHeaderRow />
          <tr>
            <td>{tr('page3.mashaName', 'Masha Barsukova')}</td>
            <td>{weight('masha', '124')}</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <b>{tr('page3.lidaName', 'Lida Oslopovskih')}</b>
            </td>
            <td>{weight('lida', '117')}</td>
            <td>2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <b>2</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <PairHeading labelKey="page3.pairYaroslavaVika" defaultLabel="Yaroslava Shuvalova vs Vika Vardugina" />
      <Table bordered>
        <tbody>
          <TableHeaderRow />
          <tr>
            <td>{tr('page3.yaroslavaName', 'Yaroslava Shuvalova')}</td>
            <td>{weight('yaroslava', '124')}</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>0</td>
          </tr>
          <tr>
            <td>
              <b>{tr('page3.vikaName', 'Vika Vardugina')}</b>
            </td>
            <td>{weight('vikaSemi', '152')}</td>
            <td>2</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>
              <b>2</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <ButtonGallery images={DIR_TOURNAMENT2013_YAROSLAVA_VIKA} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page3.semiFinalComment`}
          components={{1: <b />, 2: <b />, 3: <b />, 4: <b />}}
          defaults={`The semi-final results show that <1>Vika</1> had an obvious advantage over <2>Yaroslava</2>, just like <3>Lida</3> did over <4>Masha</4>. They both (Vika and Lida) moved on to the final round of the competition.`}
        />
      </p>
      <h4 className={sC.textAlignCenter}>
        <u>{tr('page3.finalTitle', 'Final')}</u>
      </h4>
      <PairHeading labelKey="page3.pairFinal" defaultLabel="Lida Oslopovskih vs Vika Vardugina" />
      <p>
        {tr(
          'page3.finalText',
          'In the final, Lida and Vika faced each other on the mat. They were offered to wrestle a submission-style match, even though they had never tried this kind of combat before. It turned out to be an extremely tough struggle between almost evenly matched opponents. In spite of her big weight advantage, Vika could not for a long time overcome Lida who didn\'t give up and fought back proving herself a tough and smart wrestler.',
        )}
      </p>
      <ButtonGallery images={DIR_LIDA_VIKA} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page3.finalResult`}
          components={{1: <b />, 2: <b />}}
          defaults="Eventually <1>Vika Vardugina</1> won the tournament, and <2>Lida Oslopovskih</2> took the 2nd place."
        />
      </p>
      <h4 className={sC.textAlignCenter}>
        <u>{tr('page3.absoluteTitle', 'Absolute Division')}</u>
      </h4>
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page3.absoluteIntro`}
          components={{1: <b />, 2: <b />, 3: <b />}}
          defaults={`Besides the three pairs of competitors in the amateur division, there was created a special <1>absolute division</1> in which the opponents had to compete with each other in one round to determine a winner. One of the competitors in the absolute division was <2>Yulia Borovik</2> who, in view of her significant weight advantage over the other girls (she weighed 201 lb), was put against the most experienced wrestler in the Club, <3>Tais</3>.`}
        />
      </p>
      <PairHeading labelKey="page3.pairYuliaTais" defaultLabel="Yulia Borovik vs Tais" />
      <Table bordered>
        <tbody>
          <TableHeaderRow />
          <tr>
            <td>{tr('page3.yuliaName', 'Yulia Borovik')}</td>
            <td>{weight('yulia', '201')}</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>0</td>
            <td>3</td>
          </tr>
          <tr>
            <td>
              <b>{tr('page3.taisName', 'Tais')}</b>
            </td>
            <td>{weight('tais', '133')}</td>
            <td>0</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>
              <b>5</b>
            </td>
          </tr>
        </tbody>
      </Table>
      <p>
        {tr(
          'page3.absoluteMatch',
          'Powerful Yulia dominated the tug of war, leaving Tais no chance to compete. She anticipated victory in the arm wrestling contest as well, only to be disappointed by Tais\'s unexpectedly superior strength in their arms. The leg wrestling match was a hard-fought struggle between the two women – Tais faced difficulties but managed to deadlock the contest. Consequently, their final winner was determined through a submission wrestling match scheduled for the tournament\'s last round. This match proved thrilling and far from one-sided; Yulia showcased her formidable physical prowess as a wrestler. Tais, confronted with the challenge of overcoming Yulia, a much larger and determined opponent, relied on her extensive experience and wrestling skills to maintain dominance throughout most of the match, eventually forcing Yulia into submission.',
        )}
      </p>
      <ButtonGallery images={DIR_TAIS_YULIA} buttonName={tr('seePhotos', 'See photos')} />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page3.absoluteResult`}
          components={{1: <b />, 2: <b />}}
          defaults="<1>Tais</1> won the 1st place in the absolute (open weight) division, <2>Yulia Borovik</2> took the 2nd."
        />
      </p>
      <hr />
      <p>
        <Trans
          ns="competitions"
          i18nKey={`${NS}.page3.shop`}
          components={{
            1: <b />,
            2: <b />,
            3: <b />,
            4: <b />,
            5: <b />,
            6: <a href={LINK_SHOP_MAIN} />,
          }}
          defaults={`You can see both final wrestling matches, <1>Victoriya Vardugina</1> vs <2>Lidiya Oslopovskih</2> and <3>Tais</3> vs <4>Yulia Borovik</4>, in our movie (VIDEO 33) which is available for purchasing in our online store on <6>Patreon</6>.`}
        />
      </p>
    </>
  )
}

const pages: Record<number, React.FC> = {
  1: Tournament2013Page1,
  2: Tournament2013Page2,
  3: Tournament2013Page3,
}

const tournament2013Data = findCompetitionData('2013_2014', 'tournament-2013')
const tournament2013HeroSrc = tournament2013Data?.heroImgRef ?? tournament2013Data?.imgRef ?? ''

export const Tournament2013Desc: React.FC = () => {
  const [page, setPage] = useState(1)
  const Body = pages[page]

  return (
    <>
      <PageSelector activePage={page} setActivePage={setPage} />
      {page === 1 && tournament2013HeroSrc && (
        <img
          src={tournament2013HeroSrc}
          alt=""
          className={cn('img-fluid w-100', sC.videosMainImg)}
        />
      )}
      {Body ? <Body /> : null}
      <PageSelector activePage={page} setActivePage={setPage} mode="prevNext" />
    </>
  )
}
