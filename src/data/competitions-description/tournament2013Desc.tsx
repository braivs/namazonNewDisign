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

const LINK_SHOP_MAIN = 'https://www.patreon.com/namazon/shop'

type PageSelectorProps = {
  activePage: number
  setActivePage: (page: number) => void
  mode?: 'standard' | 'prevNext'
}

const PageSelector: React.FC<PageSelectorProps> = ({activePage, setActivePage, mode}) => {
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
              page {pageNumber}
            </li>
          ))}
        </>
      ) : (
        <>
          <li
            onClick={onPrevClick}
            className={cn(sel.pageSelector, blockPrev && sel.active)}
          >
            Prev
          </li>
          <li
            onClick={onNextClick}
            className={cn(sel.pageSelector, blockNext && sel.active)}
          >
            Next
          </li>
        </>
      )}
    </ul>
  )
}

const Tournament2013Page1: React.FC = () => (
  <>
    <p>
      The female power combat tournament was organized in cooperation with the Female Single Combat Club &quot;Namazon&quot;
      and the St. Petersburg Athletic Center. The full title of the competition was{' '}
      <b>
        &quot;The Female Single Combat Tournament for the prizes of the SBR Athletic Center and the Namazon Club&quot;
      </b>
      . The aim of the competition was to popularize non-traditional power single combats between women.
    </p>
    <p>Actually, the tournament was structured as a crossfit competition consisting of the following events:</p>
    <ul>
      <li>Tug-of-war (a win is awarded with 2 points);</li>
      <li>
        Arm wrestling on the floor - with both left and right arms (a win with either arm is awarded with 1 point);
      </li>
      <li>
        Leg wrestling - wrestling with legs in sitting position (a win in each of the 2 positions is awarded with 1
        point);
      </li>
      <li>&quot;Sumo-wrestling&quot; with simplified rules (a win is awarded with 2 points).</li>
    </ul>
    <p>
      The competition format was based on the expected participants. Until the last day, it was uncertain which girls
      would compete. Eventually, on October 2, 2013, pairs of girls were formed to compete in 3 qualification rounds to
      determine a winner in the amateur division:
    </p>
    <h5>
      <u>Lisa Sergovskaya vs Lida Oslopovskih</u>
    </h5>
    <p>
      <b>Lisa Sergovskaya</b> has been involved in arm wrestling for more than a year, and previously engaged in rock
      climbing. Lisa is 18 years old and currently a student. In summer 2013, she participated in a photo session at the
      SBR Athletic Center. Her weight is 126 lb (57 kg).
      <br />
      <b>Lida Oslopovskih</b> does not participate in sports but attends a fitness center, and had a successful debut in
      combined strength events, particularly strong in push-ups (she can do 20 repetitions on parallel bars). Lida is 27
      years old and weighs 117 lb (53 kg).
    </p>
    <h5>
      <u>Darina Chupahina vs Vika Vardugina</u>
    </h5>
    <p>
      <b>Darina Chupahina</b> — information is limited to her role as a coach in a fitness center. Darina is 20 years
      old.
      <br />
      <b>Vika Vardugina</b>— in summer 2013, she competed for the first time at a college arm wrestling tournament,
      winning 1st place in her weight class. She currently attends a fitness center. Vika is from Kazakhstan, a student
      who is 18 years old.
    </p>
    <h5>
      <u>Masha Barsukova vs Yaroslava Shuvalova</u>
    </h5>
    <p>
      <b>Masha Barsukova</b> trains in a fitness center and participates in various amateur strength sports events; her
      notable achievement is a 4-minute static squat against the wall. Masha is 26 years old and weighs 124 lb (56 kg).
      <br />
      <b>Yaroslava Shuvalova</b> is a photographer who is not involved in sports or fitness activities. Despite this, she
      did surprisingly well in non-professional combined strength competitions, especially in weightlifting — managing
      60 repetitions of squats with 56 lb (25 kg). Yaroslava is 45 years old and weighs 124 lb (56 kg).
    </p>
    <hr />
    <p>
      i) To minimize the technical advantage of more experienced opponents in table arm wrestling, matches were conducted
      on the floor, where physical strength typically outweighs technical skills.
    </p>
    <p>
      ii) The goal in leg wrestling is to use thigh strength to close the opponent&apos;s knees together, while the
      opponent tries to open them; positions are then exchanged.
    </p>
    <p>
      iii) Also known as &quot;Mercy&quot; wrestling, the objective is to push the opponent outside the mat boundaries or
      make them touch the ground with any part of their body (touching the ground with one knee is allowed).
    </p>
  </>
)

const Tournament2013Page2: React.FC = () => (
  <>
    <h4 className={sC.textAlignCenter}>
      <u>Results of the First Round (Quarter-finals):</u>
    </h4>
    <h5 className={sC.textAlignCenter}>
      <u>Lisa Sergovskaya vs Lida Oslopovskih</u>
    </h5>
    <Table bordered className={sC.customTablePadding}>
      <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Lisa Sergovskaya</td>
          <td>127</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>2</td>
        </tr>
        <tr>
          <td>
            <b>Lida Oslopovskih</b>
          </td>
          <td>117</td>
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
    <p>In the first pair, a significant advantage was on Lida&apos;s side, who was more spirited to win the contest.</p>

    <h5 className={sC.textAlignCenter}>
      <u>Darina Chupahina vs Vika Vardugina</u>
    </h5>
    <Table bordered className={sC.customTablePadding}>
      <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Darina Chupahina</td>
          <td>141</td>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>
            <b>Vika Vardugina</b>
          </td>
          <td>152</td>
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
    <p>In the second pair, Vika clearly had the advantage.</p>

    <ButtonGallery images={DIR_TOURNAMENT2013_DARINA_VICTORIA} buttonName="See photos" />

    <h5 className="text-center">
      <u>Yaroslava Shuvalova vs Masha Barsukova</u>
    </h5>
    <Table bordered className={sC.customTablePadding}>
      <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>
            <b>Yaroslava Shuvalova</b>
          </td>
          <td>124</td>
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
            <b>Masha Barsukova</b>
          </td>
          <td>124</td>
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
      The struggle in the third pair was very tough; the opponents were almost evenly matched. Yaroslava is naturally
      stronger than Masha, but Masha is better trained, more skilled, and cunning. The result was{' '}
      <b>a draw at 4-4</b>.
    </p>
    <ButtonGallery images={DIR_TOURNAMENT2013_YAROSLAVA_MASHA} buttonName="See photos" />
    <p>
      The winners of the first two pairs and both contestants of the third pair entered the semi-finals, where they had to
      compete with each other only in one event: tug of war.
    </p>
  </>
)

const Tournament2013Page3: React.FC = () => (
  <>
    <h4 className={sC.textAlignCenter}>
      <u>Results of the Second Round (Semi-finals):</u>
    </h4>
    <h5 className={sC.textAlignCenter}>
      <u>Masha Barsukova vs Lida Oslopovskih</u>
    </h5>
    <Table bordered>
      <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Masha Barsukova</td>
          <td>124</td>
          <td>0</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <b>Lida Oslopovskih</b>
          </td>
          <td>117</td>
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
    <h5 className={sC.textAlignCenter}>
      <u>Yaroslava Shuvalova vs Vika Vardugina</u>
    </h5>
    <Table bordered>
      <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Yaroslava Shuvalova</td>
          <td>124</td>
          <td>0</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>0</td>
        </tr>
        <tr>
          <td>
            <b>Vika Vardugina</b>
          </td>
          <td>152</td>
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
    <ButtonGallery images={DIR_TOURNAMENT2013_YAROSLAVA_VIKA} buttonName="See photos" />
    <p>
      The semi-final results show that <b>Vika</b> had an obvious advantage over <b>Yaroslava</b>, just like <b>Lida</b>{' '}
      did over <b>Masha</b>. They both (Vika and Lida) moved on to the final round of the competition.
    </p>
    <h4 className={sC.textAlignCenter}>
      <u>Final</u>
    </h4>
    <h5 className={sC.textAlignCenter}>
      <u>Lida Oslopovskih vs Vika Vardugina</u>
    </h5>
    <p>
      In the final, Lida and Vika faced each other on the mat. They were offered to wrestle a submission-style match, even
      though they had never tried this kind of combat before. It turned out to be an extremely tough struggle between
      almost evenly matched opponents. In spite of her big weight advantage, Vika could not for a long time overcome Lida
      who didn&apos;t give up and fought back proving herself a tough and smart wrestler.
    </p>
    <ButtonGallery images={DIR_LIDA_VIKA} buttonName="See photos" />
    <p>
      Eventually <b>Vika Vardugina</b> won the tournament, and <b>Lida Oslopovskih</b> took the 2nd place.
    </p>
    <h4 className={sC.textAlignCenter}>
      <u>Absolute Division</u>
    </h4>
    <p>
      Besides the three pairs of competitors in the amateur division, there was created a special <b>absolute division</b>{' '}
      in which the opponents had to compete with each other in one round to determine a winner. One of the competitors in
      the absolute division was <b>Yulia Borovik</b> who, in view of her significant weight advantage over the other girls
      (she weighed 201 lb), was put against the most experienced wrestler in the Club, <b>Tais</b>.
    </p>
    <h5 className={sC.textAlignCenter}>
      <u>Yulia Borovik vs Tais</u>
    </h5>
    <Table bordered>
      <tbody>
        <tr>
          <td>Competitors</td>
          <td>Weight (lb)</td>
          <td>Tug of war</td>
          <td>Arm wrestling</td>
          <td>Leg wrestling</td>
          <td>Sumo (Mercy)</td>
          <td>Points</td>
        </tr>
        <tr>
          <td>Yulia Borovik</td>
          <td>201</td>
          <td>2</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>3</td>
        </tr>
        <tr>
          <td>
            <b>Tais</b>
          </td>
          <td>133</td>
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
      Powerful Yulia dominated the tug of war, leaving Tais no chance to compete. She anticipated victory in the arm
      wrestling contest as well, only to be disappointed by Tais&apos;s unexpectedly superior strength in their arms. The
      leg wrestling match was a hard-fought struggle between the two women – Tais faced difficulties but managed to
      deadlock the contest. Consequently, their final winner was determined through a submission wrestling match scheduled
      for the tournament&apos;s last round. This match proved thrilling and far from one-sided; Yulia showcased her
      formidable physical prowess as a wrestler. Tais, confronted with the challenge of overcoming Yulia, a much larger
      and determined opponent, relied on her extensive experience and wrestling skills to maintain dominance throughout most
      of the match, eventually forcing Yulia into submission.
    </p>
    <ButtonGallery images={DIR_TAIS_YULIA} buttonName="See photos" />
    <p>
      <b>Tais</b> won the 1st place in the absolute (open weight) division, <b>Yulia Borovik</b> took the 2nd.
    </p>
    <hr />
    <p>
      You can see both final wrestling matches, <b>Victoriya Vardugina</b> vs <b>Lidiya Oslopovskih</b> and <b>Tais</b> vs{' '}
      <b>Yulia Borovik</b>, in our movie (VIDEO 33) which is available for purchasing in our online store on{' '}
      <a href={LINK_SHOP_MAIN}>Patreon</a>.
    </p>
  </>
)

const pages: Record<number, React.FC> = {
  1: Tournament2013Page1,
  2: Tournament2013Page2,
  3: Tournament2013Page3,
}

const tournament2013Data = findCompetitionData('2013_2014', 'tournament-2013')
const tournament2013HeroSrc =
  tournament2013Data?.heroImgRef ?? tournament2013Data?.imgRef ?? ''

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
