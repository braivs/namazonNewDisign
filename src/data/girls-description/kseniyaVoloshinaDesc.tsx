import imgMain from 'public/assets/img/girl/kseniya-voloshina/kseniya.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_KSENIYA_VOLOSHINA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'

export const kseniyaVoloshinaDesc = () => {
  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Ksenia Voloshina" />
      </Col>
      <p>
        <b>Ksenia Voloshina</b> (5&apos;3&quot; / 141 lb) - a participant in the club&apos;s tournaments on Submission
        Grappling.
        <br />
        She is a prize winner of the &quot;Christmas Cup 2011&quot; tournament in Submission Grappling.
      </p>
      <ButtonGallery images={DIR_KSENIYA_VOLOSHINA_SUBGR} buttonName="Submission grappling" />
      <h4>
        <u>Results of Fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Ksenia Voloshina vs. Natalia Mysik</th>
            <th>Ksenia Voloshina vs. Valentina Perfilyeva</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc04">
                VIDEO 4. &quot;Christmas Cup 2011&quot;. Tournament on Submission Grappling
              </Link>
            </td>
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
