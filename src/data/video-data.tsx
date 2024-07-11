import React from "react"
import {
  DIR01,
  DIR02,
  DIR03_3,
  DIR04,
  DIR06,
  DIR08_1,
  DIR08_2,
  DIR08_3, DIR09_1, DIR09_2, DIR09_3,
  DIR12,
  DIR16,
  DIR19,
  DIR23,
  DIR24,
  DIR26,
  DIR27,
  DIR29,
  DIR35,
  DIR36,
  DIR37,
  DIR41_KZ,
  DIR41_VZ,
  DIR_LIDA_VIKA, DIR_MMA_SPORT_HOLIDAY_1, DIR_MMA_SPORT_HOLIDAY_2,
  DIR_NC42,
  DIR_NC46,
  DIR_NC47, DIR_NEVSKAYA_ARENA_1, DIR_NEVSKAYA_ARENA_2,
  DIR_TAIS_YULIA
} from "@/common/ImageContexts"

import ButtonGallery from "@/common/ButtonGallery/ButtonGallery"
import Link from "next/link"
import {Col, Row} from "react-bootstrap"
import cn from 'classnames'
import VSmorodina_vs_VVardugina1 from '/public/assets/img/videoGallery/nc44/1_V.Smorodina_vs_V.Vardugina.jpg'
import VSmorodina_vs_VVardugina2 from '/public/assets/img/videoGallery/nc44/2_V.Smorodina_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VVardugina from '/public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Vardugina.jpg'
import p2_OGrigorenko_vs_VVardugina from '/public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Vardugina.jpg'
import p1_OGrigorenko_vs_VSmorodina from '/public/assets/img/videoGallery/nc44/1_O.Grigorenko_vs_V.Smorodina.jpg'
import p2_OGrigorenko_vs_VSmorodina from '/public/assets/img/videoGallery/nc44/2_O.Grigorenko_vs_V.Smorodina.jpg'
import {GalleryFromArray} from "@/common/GalleryFromArray"
import {COMPETITIONS_BUTTON_TEXT} from "@/common/constants"

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
    description: () => {
      return <>
        <p>You can read the report on the competitions, the main part of which was these fights, <Link
          href={'/competition/2015-2017/maslenitsa-2016'}>here</Link>. There you will find a short report on
          the fights, as well as many photos. For extra beauty, we have added a couple of photos from each fight here.
        </p>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Viktoria Smorodina vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore todo: need to add Image ts type*/}
        <GalleryFromArray images={[VSmorodina_vs_VVardugina1.src, VSmorodina_vs_VVardugina2.src]}/>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Vardugina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryFromArray images={[p1_OGrigorenko_vs_VVardugina.src, p2_OGrigorenko_vs_VVardugina.src]}/>
        <Row>
          <Col className={cn('d-flex', 'justify-content-center')}>Oksana Grigorenko vs Viktoria Smorodina</Col>
        </Row>
        {/*@ts-ignore*/}
        <GalleryFromArray images={[p1_OGrigorenko_vs_VSmorodina.src, p2_OGrigorenko_vs_VSmorodina.src]}/>
      </>
    }
  },
  {
    id: 42,
    youtubeID: 'e8fADPtHm7w',
    title: 'Submission grappling tournament. Part 2. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
    description: function () {
      return <>
        <p><b>VIDEO {this.id}</b> is the second part of our full HD video featuring the submission grappling
          mini-tournament
          that took place on October 13, 2014. It includes two fights between <b>Christina Shvets</b> (68.9 kg / 151.9
          lb)
          and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). After defeating Zoya Dorofeeva (see <b>VIDEO 41</b>),
          they competed to determine the winner of this small wrestling event.
        </p>
        <p>This was their second encounter. The first was at a <Link
          href="/video/nc36">tournament for beginners held on May 9th of that year</Link>, where Victoria emerged
          victorious. Here they were again on the same mat, with Christina determined for a rematch!</p>
        <p>
          According to the rules, to win an individual fight, it was necessary to either submit the opponent or pin
          her for a count of 5.<br/>
          By this time, they were evenly matched in weight and strength. The fight began cautiously, with both studying
          and feeling each other out for a long while, avoiding takedowns. However, the pace picked up, and once on the
          ground, Christina found herself in a precarious position: Victoria applied a headlock and attempted a pin,
          from which Christina narrowly escaped! It was an exhilarating moment, but neither emerged as the victor. The
          regular time ended in a draw, leading to a short rest break followed by an additional 2-minute extension, yet
          neither wrestler managed to secure a submission or pin.
        </p>
        <p>
          The second fight followed a similar pattern to the first. After regular time, it also resulted in a draw.
          However, adhering to our rules to determine a clear winner, we extended the extra time from 2 to 10 minutes.
          The remainder of the fight became an endurance test. As the struggle persisted, controlling the match became
          increasingly challenging for Christina, who appeared fatigued by the end, unlike Victoria.
        </p>
        <ButtonGallery images={DIR_NC42}/>
      </>
    }
  },
  {
    id: 41,
    youtubeID: 'vE6uc_UXaWc',
    title: 'Submission grappling tournament. Part 1. October 2014',
    des: 'The second part of our full HD video featuring the submission grappling mini-tournament',
    description: function () {
      return <>
        <p>Our HD video featuring the submission grappling mini-tournament that was held on October 13, 2014, has been
          divided into two parts: <b>VIDEO 41</b> and <b>VIDEO 42</b>. The first part includes four fights featuring <b>Zoya
            Dorofeeva</b> (56 kg / 123.5 lb), who is a newcomer to our competitions.</p>
        <p>Prior to this event, Zoya participated in Russian hand-to-hand fighting. Here, her opponents were two
          competitors who previously faced off in the May 2014 Grappling tournament for beginners – <b>Christina
            Shvets</b> (68.9 kg / 151.9 lb) and <b>Victoria Vardugina</b> (65.3 kg / 144.0 lb). The rules remained
          the same – pins-and-submissions, requiring a wrestler to either force her opponent to submit or hold her
          in a pin for a count of five to win an individual fight.
          Zoya proved to be a brave and resilient fighter. Despite being outweighed by her opponents, she
          fought tenaciously, avoiding submissions.</p>
        <p>In the first fight between Zoya and Christina, neither the 4 minutes of regular time nor the 2 extra minutes
          produced a winner. Only in their second encounter did Christina manage to secure a pinfall victory after a
          hard-fought struggle.</p>
        <h5>Christina Shvets vs Zoya Dorofeeva</h5>
        <ButtonGallery images={DIR41_KZ}/>
        <p>Victoria proved to be an even more formidable opponent for Zoya, defeating her twice with chokeholds. Despite
          this, Zoya had several opportunities to defeat Victoria in both their first and second fights. Unfortunately,
          due to her lack of experience in such competitions, she was unable to capitalize on those chances.</p>
        <h5>Victoria Vardugina vs Zoya Dorofeeva</h5>
        <ButtonGallery images={DIR41_VZ}/>
      </>
    }
  },
  {
    id: 37,
    youtubeID: 'oxAzT_GWSJA',
    title: 'Tournament between beginners. Part 2. Final fights. 2014',
    des: 'This video is a continuation of the Video 36 that featured the preliminary fights.',
    description: function () {
      return <>
        <p>Weight class: 145 to 160 lb. May, 2014</p>
        <p>
          This video is a continuation of the Video 36 that featured the preliminary fights (see its
          description <Link href="/video/nc36">HERE</Link>). Now here you can see two final fights in
          which the loser and the winner of the tournament
          were determined.
        </p>
        <Row>
        </Row>
        <p>In one of them, Nina and Irina fought with each other for the IV place (for not becoming the outsider),
          and in the other Daria and Victoria decided between themselves who was the best wrestler of the
          competition. The fight Nina vs Irina went fast and ended pretty soon – one of the girls defeated the
          other twice by applying submission holds.</p>
        <p>The final fight was much longer and more strenuous. Suffice it to say that in the first round neither
          wrestler was able to gain a victory within the 4 min of time limit.</p>
        <ButtonGallery images={DIR37}/>
        <p>We recommend this video for those of you who like real female wrestling and young sexy-looking girls with
          competitive spirit. You will find it especially entertaining if you are interested to see a fight in
          which one of the two girls grappling on the mat continuously struggles to pin her opponent down and
          finally succeeds after long hard attempts.</p>
      </>
    }
  },
  {
    id: 36,
    youtubeID: 'kkbQ7YEQ9nQ',
    title: 'Tournament between beginners. Part 1. Preliminary fights. 2014',
    des: 'In this competition, five fighters participated: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb), and Victoria (70.7 kg / 155.9 lb).',
    description: function () {
      return <>
        <p>
          In this competition, five fighters participated: Christina (67.4 kg / 148.6 lb), Daria (66.5 kg / 146.6
          lb), Irina (70.7 kg / 155.9 lb), Nina (66.1 kg / 145.7 lb), and Victoria (70.7 kg / 155.9 lb). Rules:
          fights with submissions or pins counted to 10.
        </p>
        <p>
          All the girls except Victoria Vardugina, who has already wrestled once before at the Namazon Club, are
          beginners in submission grappling and are participating here for the first time.<br/>
          About half a year ago, in October 2013, Vika won a women&apos;s <Link href="/video/nc33">crossfit
          wrestling</Link> competition in our club by forcing the uncompromising wrestler Lidiya Oslopovskih
          to submit in the final fight. Vika is a physically strong young woman who not only learns how to wrestle
          but also competes successfully in college arm wrestling tournaments.
        </p>
        <p>
          Our competition today is notable for its typically FEMALE wrestling. The rules require the winner of a
          match to win at least 2 rounds out of 3. Each round has a 4-minute time limit.<br/>
          The video includes three matches, the first two consisting of two rounds each, and the last one
          (Vika vs Christina) going three rounds.
        </p>
        <ButtonGallery images={DIR36}/>
        <p>We recommend you watch this video (Video 36) if you like to see ambitious, athletic girls with
          beautiful bodies competing with each other in a hard-fought contest where everything is allowed:
          choking, pinning, and submission holds.</p>
      </>
    }
  },
  {
    id: 35,
    youtubeID: 'tYIIf2sPt4c',
    title: 'Lidiya Oslopovskih vs Tais. Pins matches. 2013',
    des: 'Lovely young lady, Lidiya Oslopovskih (53 kg / 117 lbs), is a newcomer to the Namazon wrestling competitions.',
    description: function () {
      return <>
        <p>
          Lovely young lady, <b>Lidiya Oslopovskih</b> (53 kg / 117 lbs), is a newcomer to the Namazon wrestling
          competitions. She is a small but agile fighter, with a very well-built body. In this video, you can see
          her three fights with the strongest and most experienced woman of the club, <b>Tais</b> (60 kg / 132 lb).
        </p>
        <p>
          It’s somewhat interesting and exciting to watch how Lidiya struggles, especially on the ground.
          The rules required the opponents to wrestle to submission only, regardless of whether one wrestler would pin
          the
          other to submission or use another move. This time Tais decided to use a little &quot;naughty&ldquo; tactic
          for
          success.
        </p>
        <p>
          If you like to watch competitive mat wrestling between two strong and fit women and if you like to see
          some long pin holds, as well as some hard attempts of the bottom lady to bridge out of these pins, then
          this video is highly recommended for you.
        </p>
        <ButtonGallery images={DIR35}/>
      </>
    }
  },
  {
    id: 33,
    youtubeID: 'UdxhMrIku4A',
    title: 'Crossfit tournament\nSubmission Grappling. 2013',
    des: ' This video features two submission grappling matches held as the final part of a Crossfit tournament organized by the St. Petersburg Athletic Center in cooperation with the Namazon Club.',
    description: function () {
      return <>
        <p>
          This video features two submission grappling matches held as the final part of a Crossfit tournament organized
          by the St. Petersburg Athletic Center in cooperation with the Namazon Club.<br/>
          The matches were to determine winners in two weight categories: up to 70 kg / 155 lb between <b>Lidia
          Oslopovskih</b> (53 kg / 117 lb) and <b>Victoria Vardugina</b> (69 kg / 152 lb), and in the absolute category
          between <b>Yulia Borovik</b> (91 kg / 201 lb) and <b>Tais</b> (61 kg / 135 lb).
        </p>
        <p>
          Despite significant weight differences between the opponents in each pair, their struggle on the mat was
          strenuous, entertaining, and exciting. The girls fought hard and bravely to win this last decisive part of the
          tournament.
        </p>
        <h5>Lidia Oslopovskih vs Victoria Vardugina</h5>
        <ButtonGallery images={DIR_LIDA_VIKA}/>
        <h5>Yulia Borovik vs Tais</h5>
        <ButtonGallery images={DIR_TAIS_YULIA}/>
      </>
    }
  },
  {
    id: 29,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2013',
    des: 'Elena (5\'7" / 157 lb) is a strong and ambitious young woman. She had fought Tais (5\'7" / 130 lb) many times two years ago...',
    description: function () {
      return <>
        <p>
          <b>Elena</b> (5&quot;7&quot; / 157 lb) is a strong and ambitious young woman. She had
          fought <b>Tais</b> (5&quot;7&quot; / 130 lb)
          many times two years ago, but then she disappeared from the Club. Now she’s back, stronger, heavier, more
          skillful, and confident than ever.
        </p>
        <p>Right from the start, it’s clear that Elena intends to give her experienced rival a real fight. Despite Tais
          being very strong, she immediately finds herself in trouble against the aggressive Elena. After 15 intense
          minutes of wrestling, she is forced to admit defeat. This marks the first time Tais has lost a competitive
          submission match to Elena.</p>
        <p>If you’re curious to see how it all unfolded, watch this video.</p>
        <ButtonGallery images={DIR29}/>
      </>
    }
  },
  {
    id: 27,
    youtubeID: 'HaMtoel8Tdw',
    title: 'Female Beach Wrestling Part 2. June, 2011',
    des: 'This is a continuation of the multi-round sand-wrestling contest between Tais (5"7" / 130 lb) and Elena Vasilyeva (5"6" / 135 lb).',
    description: function () {
      return <>
        <p>
          This is a continuation of the multi-round sand-wrestling contest between <b>Tais</b> (5&quot;7&quot; / 130 lb)
          and <b>Elena
          Vasilyeva</b> (5&quot;6&quot; / 135 lb). The first nine rounds of this exciting match were featured in our
          Video 26
          (scroll down to see the initial description). In Part 2, you can see eight more rounds fought with the same
          rules as in Part 1.
        </p>
        <p>Although both women are very ambitious, they are not quite equal in experience and skill. One of them is
          still
          using nice wrestling combinations, applying effective choking and submission holds, while the other is just
          struggling heavily, showing her fighting spirit and refusing to give up.</p>
        <p>If you enjoy watching strong, skilled, and athletic women in real wrestling, then we recommend you purchase
          this video.</p>
        <ButtonGallery images={DIR27}/>
      </>
    }
  },
  {
    id: 26,
    youtubeID: 'iBBVt0JNN-Y',
    title: 'Female Beach Wrestling. Part 1. June, 2011',
    des: 'This video features a sand-wrestling contest between two ambitious women, Tais (5"7" / 130 lb) and Elena Vasilyeva (5"6" / 134 lb).',
    description: function () {
      return <>
        <p>
          This video features a sand-wrestling contest between two ambitious women, <b>Tais</b> (5&quot;7&quot; / 130
          lb)
          and <b>Elena Vasilyeva</b> (5&quot;6&quot; / 134 lb). Tais, who has competed in various grappling and MMA
          tournaments, has more experience than her younger opponent. But Elena is not a pushover either.
        </p>
        <p>
          The two women fought nine rounds with submission grappling rules. It was an interesting and exciting
          wrestling match with many different pins, chokes, and submission holds. Both wrestlers struggled
          arduously for every single point. The weaker woman didn’t give up easily.
        </p>
        <ButtonGallery images={DIR26}/>
      </>
    }
  },
  {
    id: 24,
    youtubeID: 'iBBVt0JNN-Y',
    title: 'Lyudmila vs Tais Submission Grappling. 2011',
    description: function () {
      return <>
        <p>
          <b>Irina</b> (5’9” / 154 lb) is a strong young athlete engaged in Muay Thai and pole dancing, but she is still
          a
          newcomer in her wrestling matches in the Namazon Club’s tournaments. <b>Tais</b> (5’7” / 130 lb) is a
          well-known, strong, and skilled lady who specializes in Submission Grappling and MMA.
        </p>
        <p>In this competitive match, Irina, using her height and weight advantage, tried to force her experienced
          opponent into a hard body-to-body fight. You will see what came out of it if you watch our video.</p>
        <p>
          If you like real female wrestling and want to see two trained women struggling hard against each other in a
          competitive ground fight, then this video is just for you.
        </p>
        <ButtonGallery images={DIR24}/>
      </>
    }
  },
  {
    id: 23,
    youtubeID: 'fbESZrys6fc',
    title: 'Irina (Vlasta) vs Tais. Submission Grappling. 2011',
    description: function () {
      return <>
        <p>
          <b>Lyudmila</b> (5’11” / 154 lb) is a strong sportswoman engaged in Muay Thai, but she is a newcomer in our
          Club’s competitions, while <b>Tais</b> (5’7” / 130 lb) is a repeat winner in the competitions, specializing in
          Submission Grappling and MMA.
        </p>
        <Row>
        </Row>
        <p>As you can see, Lyudmila is much heavier and taller than Tais. In this match, the girls wrestled three
          rounds.
          Lyudmila managed to place Tais in a very difficult position at the beginning of the first round.</p>
        <p>
          Watch the video to see what followed and how it all ended. If you like real mat wrestling between some of the
          fittest and most beautiful women, then this video is for you.
        </p>
        <ButtonGallery images={DIR23}/>
      </>
    }
  },
  {
    id: 19,
    youtubeID: 'lJwlQIrfGww',
    title: 'Varvara Akulova vs Tais. Submission Grappling. 2012',
    description: function () {
      return <>
        <p>
          <b>Varvara Akulova</b> is a great athlete. As a child and teenager, she was several times recognized as the
          strongest girl on the planet, which was twice confirmed by the Guinness Book of World Records. Varvara&apos;s
          strength results at various periods of her life have been presented, for example, on the official website of
          the <a href="http://www.spb-ac.ru/var.htm">St. Petersburg Athletic Center</a>. Look also <a
          href="http://warnet.ws/news/16167">here</a>.
        </p>
        <p>
          <a
            href="http://fakty.ua/130242-menya-osuzhdali-mol-doch-vyrastet-mutantom-da-u-varvary-do-500-predlozhenij-braka-v-internete-ezhemesyachno">Today</a>,
          Akulova is an active sportswoman, a master of sports in weightlifting and powerlifting. Her height/weight are
          175 cm (5'9") / 75 kg (165 lb). <b>Tais</b> (5'7" / 130 lb) is the leader of the Namazon Club. She specializes
          in wrestling and MMA.
        </p>
        <p>In this fight, Varvara has a significant advantage in weight (about 33 lb) and in strength, but Tais is more
          experienced and technically skilled. The fight is fought in the grappling style. The intrigue is that nobody
          knows in advance who will win in the end. The principal question is <b>WHICH will be better, the skill or pure
            strength</b>.</p>
        <p>It is really a hard fight! Clearly, the big, strong Varvara does not want to lose to her smaller opponent. In
          turn, Tais would like nothing better than to beat the bigger and stronger athlete to demonstrate her skill and
          competitiveness. Who will prevail?</p>
        <ButtonGallery images={DIR19}/>
      </>
    }
  },
  {
    id: 16,
    youtubeID: '-uNa-IIOOQk',
    title: 'Elena Vasilyeva vs Tais. Submission Grappling. 2011',
    description: function () {
      return <>
        <p>
          <b>Elena Vasilyeva (Gladiatriks)</b> (5'6" / 135 lb) specializes in submission grappling, MMA, judo, and arm
          wrestling. <b>Tais</b> (5'7" / 130 lb) also specializes in submission grappling and MMA. To win this
          competition, the girls needed not only physical strength and wrestling skill but also a lot of endurance.
          The fight consisted of 9 rounds, each with no time limit, lasting until there was a clear winner. Between each
          round, the fighters had only 1 minute to rest.
        </p>
        <p>Each round was fought hard and aggressively, with the girls giving all their strength to win the battle.</p>
        <p>
          Which of the girls was more exhausted? And who was the winner in the end? You can find out by purchasing our
          film.
        </p>
        <ButtonGallery images={DIR16}/>
      </>
    }
  },
  {
    id: 12,
    youtubeID: 'tB47JzDQ-mc',
    title: 'Submission Grappling. Tournament.  April,  2010',
    description: function () {
      return <>
        <p>
          This film documents the Submission Grappling tournament held in April 2010, featuring <b>Natalia
          Mysik</b> (5'11" / 154 lb), <b>Maria Rylyova</b> (5'8" / 126 lb), and <b>Valentina Perfilyeva</b> (5'8" / 132
          lb). The
          wrestlers competed across different weight categories, essentially making it a club competition based on total
          weight.
          Natalia, being the heaviest wrestler, was a favorite in the tournament, while Maria was favored for her
          exceptional skill. Maria and Valentina engaged in a closely contested match, showcasing their comparable
          abilities. Natalia demonstrated her superiority over Valentina in their bouts.
        </p>
        <p>However, to find out how the fights between our favorites ended, who won, and how, you will need to watch our
          film.</p>
        <ButtonGallery images={DIR12}/>
      </>
    }
  },
  {
    id: 8,
    youtubeID: '_7gBrg1KOYw',
    title: 'Women\'s Beach Tournament. Submission Grappling.  2011',
    description: function () {
      return <>
        <p>
          This film documents the Submission Grappling tournament held in April 2010, featuring <b>Natalia
          Mysik</b> (5'11" / 154 lb), <b>Maria Rylyova</b> (5'8" / 126 lb), and <b>Valentina Perfilyeva</b> (5'8" / 132
          lb). The
          wrestlers competed across different weight categories, essentially making it a club competition based on total
          weight.
          Natalia, being the heaviest wrestler, was a favorite in the tournament, while Maria was favored for her
          exceptional skill. Maria and Valentina engaged in a closely contested match, showcasing their comparable
          abilities. Natalia demonstrated her superiority over Valentina in their bouts.
        </p>
        <p>If you enjoy female wrestling not only indoors, but also under the open sky, this film is perfect for
          you.</p>
        <h5>Elena Vasilyeva vs Tais</h5>
        <ButtonGallery images={DIR08_1} buttonName={COMPETITIONS_BUTTON_TEXT}/>
        <h5>Irina (Vlasta) vs Tais</h5>
        <ButtonGallery images={DIR08_2} buttonName={COMPETITIONS_BUTTON_TEXT}/>
        <h5>Elena Vasilyeva vs Irina (Vlasta)</h5>
        <ButtonGallery images={DIR08_3} buttonName={COMPETITIONS_BUTTON_TEXT}/>
      </>
    }
  },
  {
    id: 6,
    youtubeID: '_7gBrg1KOYw',
    title: 'Maria Rylyova  vs Tais. Armwrestling and Wrestling',
    description: function () {
      return <>
        <p>
          <b>Tais</b> (5’7” / 128 lb) is a multiple winner of Submission Grappling competitions organized by our
          club. <b>Maria
          Rylyova</b> (5’8” / 126 lb) is the winner of the Namazon Club Championship in Submission Grappling in 2010 and
          a
          master of sports in armwrestling.<br/>
          The competition started with an arm wrestling contest using both arms (lying on the floor), which ended in a
          draw. They then continued their rivalry on the wrestling mat, engaging in several rounds of submission
          grappling.
        </p>
        <p>If you enjoy watching skillful wrestling between women who are evenly matched, you will love this film.</p>
        <ButtonGallery images={DIR06}/>
      </>
    }
  },
  {
    id: 4,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Submission Grappling. Christmas Cup  2011',
    description: function () {
      return <>
        <p>
          <b>Tais</b> (5’7” / 128 lb) is a multiple winner of Submission Grappling competitions organized by our
          club. <b>Maria
          Rylyova</b> (5’8” / 126 lb) is the winner of the Namazon Club Championship in Submission Grappling in 2010 and
          a
          master of sports in armwrestling.<br/>
          The competition started with an arm wrestling contest using both arms (lying on the floor), which ended in a
          draw. They then continued their rivalry on the wrestling mat, engaging in several rounds of submission
          grappling.
        </p>
        <p>If you enjoy watching skillful wrestling between women who are evenly matched, you will love this film.</p>
        <ButtonGallery images={DIR04}/>
      </>
    }
  },
  {
    id: 3,
    youtubeID: 'QAgCAy7XJiQ',
    title: 'Beach Wrestling. Mixed Tournament. 2010',
    description: function () {
      return <>
        <p>
          Female wrestlers from Namazon participated in the tournament: <b>Tais</b> (5’7” / 132 lb) and <b>Natalia
          Mysik</b> (5’11” / 154 lb). Their male opponent was Alex (5’9” / 150 lb). Specifically, the three fights
          between
          Natalia and Tais from <b>VIDEO {this.id}</b> are featured in the <b>WRESTLING</b> section of the website,
          showcasing <b>FEMALE WRESTLING</b> matches.
        </p>
        <p>These matches followed <b>SUBMISSION</b> only rules with no specified time limits. This time, Tais wrestled
          against a woman who was not only heavier but also physically stronger. The struggle was intense! Both women
          fought aggressively, vying for advantageous positions and attempting effective pins or submission holds.
          Particularly dramatic were the first two matches, which took place mainly on wet sand, with momentum shifting
          back and forth.</p>
        <ButtonGallery images={DIR03_3}/>
      </>
    }
  },
  {
    id: 2,
    youtubeID: 'Y_ixTzxIj44',
    title: 'Submission Grappling. Part 1. June, 2010',
    description: function () {
      return <>
        <p>
          This is the continuation of movie 1, featuring all the matches from the second round.<br/>
          Here, you can witness another aggressive fight between two favorites: <b>Tais</b> (5'7" / 128 lb) and <b>Maria
          Rylyova</b> (5'7" / 126 lb). Particularly dramatic were the bouts involving <b>Nadezhda Akhmerova</b> (5'6"
          / 128 lb). In her match against Tais, Nadezhda was knocked down but managed to continue the fight.<br/>
          Against Maria, Nadezhda put up a fierce struggle, with the advantage shifting back and forth between the two
          competitors.
        </p>
        <p>If you want to witness these intense matches and find out the final results, watch the film!</p>
        <ButtonGallery images={DIR02}/>
      </>
    }
  },
  {
    id: 1,
    youtubeID: 'G7RTYfRO4B4',
    title: 'Submission Grappling. Part 2. June, 2010',
    description: function () {
      return <>
        <p>
          In this tournament participated three fighters: <b>Tais</b> (5'7" / 128 lb), <b>Maria Rylyova</b> (5'7"
          / 126 lb) and <b>Nadezhda Akhmerova</b> (5'6" / 128 lb). Tais has already won such competitions several
          times. Maria has lately improved her skill level significantly, and you could expect that she would have
          a chance to become a winner. Nadezhda is specialized in Kickboxing and ММА. This was her first
          Submission Grappling tournament.
        </p>
        <p>The tournament was held in two rounds. As it was expected, the main struggle in the first round was
          between Tais and Maria. The two girls showed very tough and uncompromising wrestling. This video
          features all the three matches of the first round.</p>
        <ButtonGallery images={DIR01}/>
      </>
    }
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
export const video_data: Array<Video_data> = video_data_src_mma.map(video => {
  const formattedId = video.id < 10 ? `0${video.id}` : video.id
  return {
    ...video,
    color: '',
    category: 'Submission wrestling',
    img: `/assets/img/video/NC${formattedId}.jpg`,
    des: video.des ?? ''
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
  description: () => React.ReactNode
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