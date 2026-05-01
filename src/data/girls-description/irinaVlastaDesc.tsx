import imgMain from 'public/assets/img/girl/irina_vlasta/vlasta.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_VLASTA_BEACHGR, DIR_VLASTA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'

export const irinaVlastaDesc = () => {
  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Irina (Vlasta)" />
      </Col>
      <p>
        <b>Irina (Vlasta)</b> (5&apos;9&quot; / 154 lb) - participant in club tournaments on submission grappling.
        <br />
        She also engages in muay thai and pole dance.
      </p>
      <ButtonGallery images={DIR_VLASTA_BEACHGR} buttonName="Submission grappling" />
      <ButtonGallery images={DIR_VLASTA_SUBGR} buttonName="Beach wrestling" />
      <h4>
        <u>Results of Fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Vlasta (Irina) vs. Tais</th>
            <th>Vlasta (Irina) vs. Elena Vasilyeva</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc08">
                VIDEO 8. Beach Tournament. Submission Grappling. June, 2011
              </Link>
            </td>
            <td>
              <Link href="/video/nc08">
                VIDEO 8. Beach Tournament. Submission Grappling. June, 2011
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
