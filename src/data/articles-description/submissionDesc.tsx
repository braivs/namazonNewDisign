import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Row, Table} from 'react-bootstrap'
import React from 'react'

const IMG = '/assets/img/home/sg.jpg'

export const SubmissionDesc: React.FC = () => {
  return (
    <>
      <h3>Submission Grappling (Wrestling) as Single Combat</h3>
      <Row>
        <Col xl={2}>
          <img src={IMG} alt="" className={cn(sC.videosMainImg)} />
        </Col>
        <Col xl={10}>
          <p>
            <b>Submission grappling</b> (Submission wrestling) is a non-striking hybrid style formed from wrestling, jiu
            jitsu, sambo, and many other submission fighting styles. It consists of applying submission holds and choking
            techniques to make the opponent abandon the fight. Submission grappling plays an important role in the
            practice of <b>Mixed Martial Arts (MMA)</b> and is considered an effective form of <b>self-defense</b>.
          </p>
          <p>
            <b>ISWA</b> - International Submission Wrestling Association
          </p>
        </Col>
      </Row>
      <h5>
        <b>RULES</b>
      </h5>
      <p>
        Rules can vary slightly from tournament to tournament. As an example, we will outline the key points of the rules
        from the <b>Professional Submission League (PSL)</b>.
      </p>
      <h5>
        <b>I. Time Limits</b>
      </h5>
      <p>
        Each match consists of two rounds (four minutes each) with a 30-second break.
        <br />
        If the match is declared a draw after regulation time (2 x 4-minute rounds), it will continue with a two-minute
        sudden death overtime.
      </p>
      <h5>
        <b>II. Points:</b>
      </h5>
      <p>Points will be awarded for the following positions:</p>
      <ul>
        <li>Takedown (knees, stomach, or back on the mat for 1 second) - 1 point</li>
        <li>Mount held for 3 seconds - 1 point</li>
        <li>Back mount held for 3 seconds (with hooks or body triangle) - 1 point</li>
        <li>Catch (near submission) - 3 points</li>
      </ul>
      <h5>
        <b>III. Legal Techniques:</b>
      </h5>
      <ul>
        <li>All joint locks</li>
        <li>All chokes</li>
        <li>All knee bars and heel hooks</li>
        <li>All takedowns, throws, foot sweeps, etc.</li>
      </ul>
      <h5>
        <b>IV. Illegal Techniques:</b>
      </h5>
      <ul>
        <li>Small joint manipulations</li>
        <li>Direct attack to the trachea</li>
        <li>Striking of any kind</li>
        <li>Eye gouging, fish hooking</li>
        <li>Biting or spitting at an opponent</li>
        <li>Clawing, pinching, twisting the flesh, or grabbing the clavicle</li>
        <li>Hair pulling</li>
        <li>Grabbing of clothing</li>
        <li>Grease or oil on the body</li>
        <li>Chin in opponent&apos;s face, no thumbing, pinching, scratching, etc.</li>
        <li>Attacking the opponent&apos;s groin area</li>
        <li>Spiking the opponent&apos;s head on the mat</li>
      </ul>
      <h5>
        <b>Penalties:</b>
      </h5>
      <ul>
        <li>Any techniques from article IV</li>
        <li>Fleeing the mat</li>
        <li>Backing away from the action (i.e., away from takedowns and/or away from the ground)</li>
      </ul>
      <p>
        Committing any of these penalties results in a stalling penalty/yellow card. Three penalties will result in a red
        card/disqualification.
      </p>
      <h5>
        <b>VI. Uniform:</b>
      </h5>
      <ul>
        <li>Competitors shall be barefoot</li>
        <li>Any tape, knee pads, knee sleeves, anklets, etc., must be approved by PSL training staff</li>
        <li>
          Competitors shall have a dark uniform and a light uniform ready for the PSL event. Competitors shall wear
          appropriate shorts; undergarments must be approved by PSL officials.
        </li>
      </ul>
      <h5>
        <b>VII. Winning the Match:</b>
      </h5>
      <p>A match is won when:</p>
      <ul>
        <li>Opponent taps the mat, your body, etc.</li>
        <li>Opponent verbally submits to the PSL official</li>
        <li>The PSL official feels that your opponent is unable to continue</li>
        <li>
          Opponent fails to continue the match after any round, slam, or submission attempt (15-second count-out rule)
        </li>
        <li>A PSL official declares the competitor the winner by points</li>
      </ul>
      <h5>
        <b>VIII. Weigh-ins:</b>
      </h5>
      <ul>
        <li>All competitors must be present at the official weigh-ins</li>
        <li>
          If a competitor fails to make the weight stated in the LA SUB X Wrestling Agreement, he/she has two hours from
          the end of the official PSL weigh-in to do so
        </li>
        <li>
          If a competitor misses weight, he/she shall be fined 25% of his show money and any travel expenses incurred by
          PSL
        </li>
      </ul>
      <Table bordered>
        <thead>
          <tr>
            <th scope="col">OFFICIAL PSL WEIGHT DIVISIONS</th>
            <th scope="col">WEIGHT-MEN-WOMEN UPPER LIMIT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>STRAWWEIGHT</td>
            <td>110 lb / 50 kg</td>
          </tr>
          <tr>
            <td>FLYWEIGHT</td>
            <td>130 lb / 59 kg</td>
          </tr>
          <tr>
            <td>FEATHERWEIGHT</td>
            <td>145 lb / 66 kg</td>
          </tr>
          <tr>
            <td>LIGHTWEIGHT</td>
            <td>155 lb / 70 kg</td>
          </tr>
          <tr>
            <td>WELTERWEIGHT</td>
            <td>170 lb / 77 kg</td>
          </tr>
          <tr>
            <td>MIDDLEWEIGHT</td>
            <td>185 lb / 84 kg</td>
          </tr>
          <tr>
            <td>LIGHT HEAVYWEIGHT</td>
            <td>200 lb / 91 kg</td>
          </tr>
          <tr>
            <td>CRUISERWEIGHT</td>
            <td>215 lb / 98 kg</td>
          </tr>
          <tr>
            <td>HEAVYWEIGHT</td>
            <td>UNLIMITED</td>
          </tr>
          <tr>
            <td>ABSOLUTE</td>
            <td>NONE</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
