import sC from '@/common/styles.module.scss'
import imgMain from 'public/assets/img/girl/tais2011/main/08.jpg'
import Image from 'next/image'
import ButtonGallery from '@/common/ButtonGallery/ButtonGallery'
import {
  DIR_TAIS2011_MAIN,
  DIR_TAIS2011_SUBGR,
  DIR_TAIS2011_MMA,
  DIR_TAIS2011_KARATE,
} from '@/common/constants/ImageContexts'
import {Table} from 'react-bootstrap'
import Link from 'next/link'

export const tais2011Desc = () => {
  return (
    <>
      <Image className={sC.MainImg} src={imgMain} alt="Tais" />
      <p>
        <b>Tais</b> (5&apos;7&quot; / 130 lb) is a many-time winner of the submission grappling championships at the
        Namazon Club. She is also regarded as the best MMA fighter at our club.
      </p>
      <ButtonGallery images={DIR_TAIS2011_MAIN} buttonName={'Tais. Gallery'} />
      <ButtonGallery images={DIR_TAIS2011_SUBGR} buttonName={'Submission grappling'} />
      <ButtonGallery images={DIR_TAIS2011_MMA} buttonName={'MMA'} />
      <ButtonGallery images={DIR_TAIS2011_KARATE} buttonName={'Karate'} />
      <h4>
        <u>Results of fights</u>
      </h4>
      <Table bordered>
        <tbody>
          <tr>
            <th>Tais vs. Maria Rylyova</th>
            <th>Tais vs. Nadezhda Akhmerova</th>
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
          <tr>
            <td>
              <Link href="/video/nc06">VIDEO 6. Maria Rylyova vs Tais. March, 2011</Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table bordered>
        <tbody>
          <tr>
            <th>Tais vs. Elena Vasilyeva</th>
            <th>Tais vs. Vlasta</th>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc08">
                VIDEO 8. Beach Tournament. Submission grappling. June, 2011
              </Link>
            </td>
            <td>
              <Link href="/video/nc08">
                VIDEO 8. Beach Tournament. Submission grappling. June, 2011
              </Link>
            </td>
          </tr>
          <tr>
            <td>
              <Link href="/video/nc16">
                VIDEO 16. Youth vs Experience. Submission grappling. June, 2011
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
