import imgMain from 'public/assets/img/girl/nadezhda_akhmerova/nadezhda.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_NADEZHDA_AKHMEROVA_KICK,
  DIR_NADEZHDA_AKHMEROVA_SUBGR,
} from '@/common/constants/ImageContexts'
import Link from 'next/link'

export const nadezhdaAkhmerovaDesc = () => {
  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Nadezhda Akhmerova" />
      </Col>
      <p>
        <b>Nadezhda Akhmerova</b> (5&apos;6&quot; / 132 lb) - participant in club tournaments on Submission grappling.
        <br />
        She also competes in kickboxing and MMA.
      </p>
      <ButtonGallery images={DIR_NADEZHDA_AKHMEROVA_SUBGR} buttonName="Submission grappling" />
      <ButtonGallery images={DIR_NADEZHDA_AKHMEROVA_KICK} buttonName="Kickboxing" />
      <h4>
        <u>Results of fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Nadezhda Akhmerova vs. Maria Rylyova</th>
            <th>Nadezhda Akhmerova vs. Tais</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc01">
                VIDEO 1. Submission grappling. Tournament. Part 1. June, 2010
              </Link>
            </td>
            <td>
              <Link href="/video/nc01">
                VIDEO 1. Submission grappling. Tournament. Part 1. June, 2010
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc02">
                VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010
              </Link>
            </td>
            <td>
              <Link href="/video/nc02">
                VIDEO 2. Submission grappling. Tournament. Part 2. June, 2010
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr>
            <th>Nadezhda Akhmerova vs. Valentina Perfilyeva</th>
          </tr>
          <tr>
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
