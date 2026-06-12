import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Row, Table} from 'react-bootstrap'
import React from 'react'

const IMG = '/assets/img/home/mma.jpg'

export const MmaDesc: React.FC = () => {
  return (
    <>
      <h3>MMA (Mixed Martial Arts)</h3>
      <Row>
        <Col xl={2}>
          <img src={IMG} alt="" className={cn(sC.videosMainImg)} />
        </Col>
        <Col xl={10}>
          <p>
            <b>MMA</b> (Mixed Martial Arts) is a full-contact combat sport that allows the use of both striking and
            grappling arts while both standing and on the ground, including wrestling, Brazilian jiu-jitsu, sambo,
            judo, boxing, kickboxing, Muay Thai, karate, and other styles. The roots of modern mixed martial arts can be
            traced back to the ancient Olympic combat sport of Pankration.
          </p>
          <p>
            MMA is often called fighting without rules. Actually, that&apos;s not quite correct. Though the rules in MMA
            fights can be fairly tough, we follow certain rules during the MMA competitions in our club. These rules are
            shown below.
          </p>
        </Col>
      </Row>
      <h5>
        <b>I. Weight Classes</b>
      </h5>
      <p>
        The unified weight division system for women has not been designated yet. In our club, we designate limits for
        seven different weight classes:
      </p>
      <Table bordered>
        <thead>
          <tr>
            <th scope="col">WEIGHT CLASS NAME</th>
            <th scope="col">IN KILOGRAMS (kg)</th>
            <th scope="col">IN POUNDS (lb)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FLYWEIGHT</td>
            <td>45.4</td>
            <td>100</td>
          </tr>
          <tr>
            <td>BANTAMWEIGHT</td>
            <td>48.5</td>
            <td>107</td>
          </tr>
          <tr>
            <td>FEATHERWEIGHT</td>
            <td>52.2</td>
            <td>115</td>
          </tr>
          <tr>
            <td>LIGHTWEIGHT</td>
            <td>56.7</td>
            <td>125</td>
          </tr>
          <tr>
            <td>WELTERWEIGHT</td>
            <td>61.2</td>
            <td>135</td>
          </tr>
          <tr>
            <td>MIDDLEWEIGHT</td>
            <td>65.8</td>
            <td>145</td>
          </tr>
          <tr>
            <td>LIGHT HEAVYWEIGHT</td>
            <td>72.5</td>
            <td>160</td>
          </tr>
        </tbody>
      </Table>
      <h5>
        <b>II. Legal Techniques:</b>
      </h5>
      <ul>
        <li>All punches and kicks</li>
        <li>All chokes (no direct attack to the trachea)</li>
        <li>All joint locks</li>
        <li>All knee bars and heel hooks</li>
        <li>All takedowns, throws, and foot sweeps</li>
      </ul>
      <h5>
        <b>III. Illegal Techniques:</b>
      </h5>
      <ul>
        <li>Eye gouging of any kind</li>
        <li>Biting or spitting at an opponent</li>
        <li>Butting with the head</li>
        <li>Hair pulling</li>
        <li>Fish hooking</li>
        <li>Groin attacks of any kind</li>
        <li>Holding or grabbing the fence</li>
        <li>Holding opponent&apos;s attire or gloves</li>
        <li>Intentionally placing a finger into any orifice, or into any cut or laceration of your opponent</li>
        <li>Downward pointing of elbow strikes</li>
        <li>Small joint manipulation (control of three or more fingers/toes is necessary)</li>
        <li>Strikes to the spine or back of the head</li>
        <li>Heel kicks to the kidney</li>
        <li>Throat strikes of any kind, including grabbing the trachea</li>
        <li>Clawing, pinching, twisting the flesh, or grabbing the clavicle</li>
        <li>The use of abusive language in the fighting area</li>
        <li>Any unsportsmanlike conduct that causes an injury to the opponent</li>
        <li>Attacking an opponent on or during the break</li>
        <li>Attacking an opponent who is under the care of the referee</li>
        <li>Timidity (avoiding contact, or consistently dropping of mouthpiece, or faking an injury)</li>
        <li>Interference from a mixed martial artist&apos;s seconds</li>
        <li>Throwing an opponent out of the ring or caged area</li>
        <li>Flagrant disregard of the referee&apos;s instructions</li>
        <li>Attacking an opponent after the bell has sounded to end the period of unarmed combat</li>
      </ul>
      <h5>
        <b>IV. Penalties:</b>
      </h5>
      <ul>
        <li>Any techniques from Article III</li>
        <li>Fleeing the mat</li>
        <li>When a competitor backs away from the action (i.e., away from takedowns and/or away from the ground)</li>
      </ul>
      <h5>
        <b>V. Ways to Victory:</b>
      </h5>
      <h6>
        <b>Knockout (KO)</b>
      </h6>
      <p>
        KO is as soon as a fighter becomes unconscious due to strikes, his opponent is declared the winner. As MMA rules
        allow ground fighting, the fight is stopped to prevent further injury to an unconscious fighter.
      </p>
      <h6>
        <b>Technical Knockout (TKO)</b>
      </h6>
      <u>Referee Stoppage</u>
      <p>The referee may stop a match in progress if:</p>
      <ul>
        <li>
          A fighter becomes dominant to the point where the opponent is unable to intelligently defend himself from
          attacks, which may occur as quickly as a few seconds
        </li>
        <li>
          A fighter appears to have developed a severe injury: the referee will call for a time out if a fighter&apos;s
          ability to continue is in question as a result of apparent injuries, such as a large cut. The ring doctor will
          inspect the fighter and stop the match if the fighter is deemed unable to continue safely, rendering the
          opponent the winner. However, if the match is stopped as a result of an injury from illegal actions by the
          opponent, either a disqualification or no contest will be issued instead.
        </li>
      </ul>
      <u>Corner Stoppage</u>
      <p>
        A fighter&apos;s cornermen may announce defeat on the fighter&apos;s behalf by throwing in the towel during the
        match in progress or between rounds.
      </p>
      <u>Retirement</u>
      <p>
        If a fighter feels unable to continue after the conclusion of a round, they may inform or have the corner inform
        the referee that they forfeit the match to their opponent.
      </p>
      <h6>
        <b>Submission</b>
      </h6>
      <p>A fighter may admit defeat during a match by:</p>
      <ul>
        <li>A tap on the opponent&apos;s body</li>
        <li>A tap on the mat or floor</li>
        <li>Verbal announcement</li>
      </ul>
      <h6>
        <b>Technical Submission</b>
      </h6>
      <p>A referee may intervene and call a stop to the contest when:</p>
      <ul>
        <li>A fighter appears to be unconscious from a grappling hold</li>
        <li>A fighter appears to have suffered a serious injury from a grappling hold</li>
      </ul>
      <h6>
        <b>Decision</b>
      </h6>
      <p>
        If the match goes the distance, then the outcome of the bout is determined by three judges. The judging criteria
        are organization-specific:
      </p>
      <u>Unanimous Decision</u>
      <p>All three judges on the panel score a bout unanimously in favor of one fighter.</p>
      <u>Split Decision</u>
      <p>
        Two judges on the panel score a bout in favor of one fighter, with one judge scoring the bout in favor of the
        other.
      </p>
      <u>Majority Decision</u>
      <p>Two judges on the panel score a bout in favor of one fighter, with one judge scoring the bout a draw.</p>
      <u>Draw</u>
      <p>All three judges on the panel score a bout unanimously in favor of neither fighter.</p>
      <u>Split Draw</u>
      <p>
        One judge on the panel scores a bout in favor of one fighter, the second in favor of the other, and the third in
        favor of neither fighter.
      </p>
      <u>Majority Draw</u>
      <p>Two judges score the bout a draw, with one judge scoring the bout in favor of one fighter.</p>
      <h6>
        <b>Technical Decision</b>
      </h6>
      <p>
        If a fighter behind or even on points commits an intentional foul during the course of the match, and the
        opponent is unable to continue due to the injury or injuries inflicted by the foul at any subsequent point in the
        fight, the match is stopped and awarded to the injured fighter.
      </p>
      <h6>
        <b>Technical Draw</b>
      </h6>
      <p>
        If a fighter ahead on points commits an intentional foul during the course of the match, and the opponent is
        unable to continue due to the injury or injuries inflicted by the foul at any subsequent point in the fight, the
        match is stopped and is awarded a draw.
      </p>
      <h6>
        <b>Forfeit</b>
      </h6>
      <p>
        A fighter or their representative may forfeit a match prior to the beginning of the match, thereby losing the
        match.
      </p>
      <h6>
        <b>Disqualification</b>
      </h6>
      <p>
        A &quot;warning&quot; will be given when a fighter commits a foul or illegal action or does not follow the
        referee&apos;s instruction. Three warnings will result in a disqualification. Moreover, if a fighter is injured
        and unable to continue due to a deliberate illegal technique from their opponent, the opponent will be
        disqualified.
      </p>
      <h6>
        <b>No Contest</b>
      </h6>
      <p>
        In the event that both fighters commit a violation of the rules, or a fighter is unable to continue due to an
        injury from an accidental illegal technique, the match will be declared a &quot;No Contest&quot;.
      </p>
      <h5>
        <b>VI. Attire</b>
      </h5>
      <p>
        It is allowed for fighters to have latitude in their choice of attire, but open finger gloves, a mouthguard, and
        a protective cup are mandatory. It is within a fighter&apos;s discretion to tape parts of their body, but they
        cannot wear a gi top, gi pants, wrestling shoes, kneepads, elbow pads, shin guards, or ankle supports.
      </p>
      <h5>
        <b>VII. Rounds</b>
      </h5>
      <p>Uses three 5-minute rounds. There is a two-minute rest period between each round.</p>
    </>
  )
}
