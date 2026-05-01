import imgMain from 'public/assets/img/girl/elena-vasileva/elena.jpg'
import sC from '@/common/styles.module.scss'
import cn from 'classnames'
import {Col, Table} from 'react-bootstrap'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {DIR_ELENA_VASILEVA_MMA, DIR_ELENA_VASILEVA_SUBGR} from '@/common/constants/ImageContexts'
import Link from 'next/link'

export const elenaVasilevaDesc = () => {
  return (
    <>
      <Col className={cn('d-flex', 'justify-content-center')}>
        <Image className={sC.videosMainImg} src={imgMain} alt="Elena Vasilyeva" />
      </Col>
      <p>
        <b>Elena Vasilyeva</b> (5&apos;6&quot; / 135 lb) - a rising star in the club.
        <br />
        Specializes in Submission grappling, MMA, Judo, and Arm wrestling (candidate for the Master of Sports).
      </p>
      <ButtonGallery images={DIR_ELENA_VASILEVA_MMA} buttonName="Submission grappling" />
      <ButtonGallery images={DIR_ELENA_VASILEVA_SUBGR} buttonName="MMA" />
      <h4>
        <u>Results of Fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Elena Vasilyeva vs. Tais</th>
            <th>Elena Vasilyeva vs. Vlasta</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc08">
                VIDEO 8. Submission Grappling. Beach Tournament. June, 2011
              </Link>
            </td>
            <td>
              <Link href="/video/nc08">
                VIDEO 8. Submission Grappling. Beach Tournament. June, 2011
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc16">
                VIDEO 16. Youth vs Experience. Submission grappling. June, 2011
              </Link>
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
