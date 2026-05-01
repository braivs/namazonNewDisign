import imgMain from 'public/assets/img/girl/natalia-mysik/natalia.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_NATALIA_MYSIK_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'

export const nataliaMysikDesc = () => {
  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Natalia Mysik" />
      </Col>
      <p>
        <b>Natalia Mysik</b> (5&apos;11&quot; / 154 lb) - a participant in the club&apos;s tournaments on Submission
        Grappling.
        <br />
        She is the winner of the &quot;Christmas Cup 2011&quot; tournament in Submission Grappling.
      </p>
      <ButtonGallery images={DIR_NATALIA_MYSIK_SUBGR} buttonName="Submission grappling" />
      <h4>
        <u>Results of Fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Natalia Mysik vs. Maria Rylyova</th>
            <th>Natalia Mysik vs. Valentina Perfilyeva</th>
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
            <th>Natalia Mysik vs. Ksenia Voloshina</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc04">
                VIDEO 4. &quot;Christmas Cup 2011&quot;. Tournament on Submission Grappling
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
