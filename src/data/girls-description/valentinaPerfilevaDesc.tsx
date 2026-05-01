import imgMain from 'public/assets/img/girl/valentina_perfileva/valentina.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_VALENTINA_KICK, DIR_VALENTINA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'

export const valentinaPerfilevaDesc = () => {
  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Valentina Perfilyeva" />
      </Col>
      <p>
        <b>Valentina Perfilyeva</b> (5&apos;8&quot; / 132 lb) - participant in tournaments of the &quot;Namazon&quot;
        club in Submission Grappling, winner of the Olympic Games of martial arts &quot;EAST-WEST&quot; in karate
        (kumite).
      </p>
      <ButtonGallery images={DIR_VALENTINA_SUBGR} buttonName={'Submission Grappling'} />
      <ButtonGallery images={DIR_VALENTINA_KICK} buttonName={'Kickboxing'} />
      <h4>
        <u>Results of Fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Valentina Perfilyeva vs Maria Rylyova</th>
            <th>Valentina Perfilyeva vs Natalia Mysik</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc12">VIDEO 12. Submission grappling. Tournament. April, 2010</Link>
            </td>
            <td>
              <Link href="/video/nc04">
                VIDEO 4. &quot;Christmas Cup 2011&quot;. Tournament on Submission Grappling
              </Link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link href="/video/nc12">VIDEO 12. Submission grappling. Tournament. April, 2010</Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr>
            <th>Valentina Perfilyeva vs Ksenia Voloshina</th>
            <th>Valentina Perfilyeva vs Nadezhda Akhmerova</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc04">
                VIDEO 4. &quot;Christmas Cup 2011&quot;. Tournament on Submission Grappling
              </Link>
            </td>
            <td>
              <Link href="/video/nc13">
                VIDEO 13. Kickboxing. Nadezhda Akhmerova vs Valentina Perfilyeva. 2011
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
